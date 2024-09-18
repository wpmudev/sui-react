/**
 * External Dependencies
 */
import React from "react"

/**
 * Internal Dependencies
 */
import { Section, Snippet, Code } from "../index"

interface PackageInstallGuideProps {
	packageName: string
}

const PackageInstallGuide: React.FunctionComponent<
	PackageInstallGuideProps
> = ({ packageName = "{PACKAGE NAME GOES HERE}" }) => {
	const installCommand = `npm install ${packageName} --save`

	const docs = [
		{
			name: "NPM",
			url: `https://www.npmjs.com/package/${packageName}`,
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="30"
					width="40"
					viewBox="0 0 576 512"
				>
					{/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
					<path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z" />
				</svg>
			),
		},
	]

	return (
		<Section
			title="Installation"
			contained={true}
			style={{ paddingTop: 20, paddingBottom: 0 }}
		>
			<p>
				Install the package <Code small={true}>{packageName}</Code> as an
				individual component or follow the{" "}
				<a href="/?path=/docs/sui-getting-started--docs" target="_blank">
					overview page
				</a>{" "}
				instructions to get the complete SUI Components package.
			</p>

			<p>
				<Snippet language="console" hideToggle={true}>
					{installCommand}
				</Snippet>
				{docs.map((link, index) => (
					<div
						key={index}
						style={{ display: "flex", alignItems: "center", gap: "5px" }}
					>
						{link.icon}
						<a href={link.url} target="_blank" rel="noreferrer noopener">
							{packageName}
						</a>
					</div>
				))}
			</p>
		</Section>
	)
}

export { PackageInstallGuide }
