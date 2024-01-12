const { getInfo } = require("@changesets/get-github-info")
const { config } = require("dotenv")

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

const SEE_LINE = /^See:\s*(.*)/i
const formatList = new Intl.ListFormat("en-US")

const getlines = ({ summary }) => {
	const lines = summary
		.trim()
		.split(/[\r\n]+/)
		.map((l) => l.trim())
		.filter(Boolean)

	const size = lines.length
	if (size > 0) {
		lines[size - 1] = lines[size - 1].replace(/[.;:]$/g, "")
	}

	return lines
}

const templateSeeRef = (links) => {
	const humanReadableLinks = links.filter(Boolean).map((link) => {
		if (typeof link === "string") return link
		return link.pull || link.commit
	})

	if (humanReadableLinks.length === 0) return ""
	return `(See ${formatList.format(humanReadableLinks)})`
}

const changelogFunctions = {
	getDependencyReleaseLine: async () => "",
	getReleaseLine: async (changeset) => {
		let pull
		let commit
		let user

		const lines = getlines(changeset)
		const prLineIndex = lines.findIndex((line) => SEE_LINE.test(line))

		if (prLineIndex > -1) {
			const match = lines[prLineIndex].match(SEE_LINE)
			pull = (match && match[1].trim()) || undefined
			lines.splice(prLineIndex, 1)
		}

		const [firstLine, ...futureLines] = lines

		if (changeset.commit && !pull) {
			const { links } = await getInfo({
				repo: "wpmudev/sui-react",
				commit: changeset.commit,
			})

			pull = links.pull || undefined
			commit = links.commit || undefined
			user = links.user || undefined
		}

		const conventionalRegEx = new RegExp(
			/^\s*(feat|fix|refactor|docs|build|test|ci|chore)/i,
		)
		const findMatch = firstLine.match(conventionalRegEx)

		let annotation = ""
		if (!!findMatch && !!findMatch?.[0]) {
			annotation = COMMIT_TYPES?.[findMatch[0]] ?? ""
		}

		let str = `- ${annotation} ${firstLine}`
		if (futureLines.length > 0) {
			str += `\n${futureLines.map((l) => `  ${l}`).join("\n")}`
		}

		if (user) {
			str += `, by ${user}`
		}

		if (pull || commit) {
			const seeRef = templateSeeRef([pull || commit])
			if (seeRef) str += ` ${seeRef}`
		}

		return str
	},
}

module.exports = {
	...changelogFunctions,
	default: changelogFunctions,
}
