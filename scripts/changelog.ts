const CLFunctions = require("@changesets/changelog-github")
// @ts-ignore
const { config } = require("dotenv")
const {
	getInfo,
	getInfoFromPullRequest,
} = require("@changesets/get-github-info")

config()

// Conventional commit icons
const COMMIT_TYPES = {
	feat: "✨",
	fix: "🐛",
	refactor: "🔨",
	docs: "📚",
	build: "📦",
	test: "🚨",
	ci: "👷",
	chore: "🔧",
}

const changelogFunctions = {
	...CLFunctions.default,
	getReleaseLine: async (changeset, type, options) => {
		if (!options || !options.repo) {
			throw new Error(
				'Please provide a repo to this changelog generator like this:\n"changelog": ["../scripts/changelog.ts", { "repo": "org/repo" }]',
			)
		}

		let prFromSummary
		let commitFromSummary
		const usersFromSummary = []

		const replacedChangelog = changeset.summary
			.replace(/^\s*(?:pr|pull|pull\s+request):\s*#?(\d+)/im, (_, pr) => {
				let num = Number(pr)
				if (!isNaN(num)) prFromSummary = num
				return ""
			})
			.replace(/^\s*commit:\s*([^\s]+)/im, (_, commit) => {
				commitFromSummary = commit
				return ""
			})
			.replace(/^\s*(?:author|user):\s*@?([^\s]+)/gim, (_, user) => {
				usersFromSummary.push(user)
				return ""
			})
			.trim()

		const [firstLine, ...futureLines] = replacedChangelog
			.split("\n")
			.map((l) => l.trimRight())

		const links = await (async () => {
			if (prFromSummary !== undefined) {
				let { links } = await getInfoFromPullRequest({
					repo: options.repo,
					pull: prFromSummary,
				})
				if (commitFromSummary) {
					const shortCommitId = commitFromSummary.slice(0, 7)
					links = {
						...links,
						commit: shortCommitId,
					}
				}
				return links
			}
			const commitToFetchFrom = commitFromSummary || changeset.commit
			if (commitToFetchFrom) {
				let { links } = await getInfo({
					repo: options.repo,
					commit: commitToFetchFrom,
				})
				return links
			}
			return {
				commit: null,
				pull: null,
				user: null,
			}
		})()

		// const users = usersFromSummary.length
		// 	? usersFromSummary
		// 			.map((userFromSummary) => `@${userFromSummary}`)
		// 			.join(", ")
		// 	: links.user

		const conventionalRegEx = new RegExp(
			/^\s*(feat|fix|refactor|docs|build|test|ci|chore)/i,
		)
		const findMatch = firstLine.match(conventionalRegEx)

		let annotation = ""
		if (!!findMatch && !!findMatch?.[0]) {
			annotation = COMMIT_TYPES?.[findMatch[0]] ?? ""
		}

		const prefix = [
			links.pull === null ? "" : `&nbsp;${links.pull}`,
			links.commit === null ? "" : `&nbsp;${links.commit}`,
		].join("")

		return `- ${annotation}&nbsp;${firstLine.replace(" ", "&nbsp;")}${
			prefix ? `&nbsp;${prefix}` : ""
		}\n${futureLines
			.map((l) => `&nbsp;${l.replace(" ", "&nbsp;")}`)
			.join("\n")}`
	},
}

module.exports = {
	...changelogFunctions,
	default: changelogFunctions,
}
