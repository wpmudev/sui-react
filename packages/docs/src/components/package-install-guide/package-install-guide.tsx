/**
 * External Dependencies
 */
import React from "react"

/**
 * Internal Dependencies
 */
import { Section, Snippet, Code } from "../../index"

interface PackageInstallGuideProps {
	packageName: string
}

const PackageInstallGuide: React.FunctionComponent<
	PackageInstallGuideProps
> = ({ packageName = "{PACKAGE NAME GOES HERE}" }) => {
	const installCommand = `npm install ${packageName}`

	return (
		<Section
			title="Installation"
			contained={true}
			style={{ paddingTop: 20, paddingBottom: 0 }}
		>
			<p>
				Install the package <Code small={true}>{packageName}</Code> as an
				individual component or follow the Overview page instructions to get the
				complete SUI Components package.
			</p>
			<p>
				<Snippet language="javascript" hideToggle={true}>
					{installCommand}
				</Snippet>
			</p>
		</Section>
	)
}

export default PackageInstallGuide
