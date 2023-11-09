import React, { Fragment } from "react"

// Import required component
import { BasicBox as SuiBasicBlock } from "../src"

import { Button } from "@wpmudev/sui-button"
import { SettingBlock } from "@wpmudev/sui-setting-block"

// Import documentation main page
import docs from "./basic-box.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Advanced/Basic Box",
	component: SuiBasicBlock,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "BasicBox" story.
const BasicBox = ({ ...props }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={{ backgroundColor: "white", borderRadius: "4px" }}>
					<SuiBasicBlock
						{...props}
						headerActions={
							<Fragment>
								<Button
									appearance="secondary"
									color="black"
									isSmall={true}
									icon="upload"
								>
									Upload
								</Button>
								<Button appearance="primary" color="blue" isSmall={true}>
									Create new
								</Button>
							</Fragment>
						}
						footerActions={[
							<Button key={0} appearance="primary" color="blue" isSmall={true}>
								Save changes
							</Button>,
							<Button
								key={1}
								startIcon="power-off"
								appearance="tertiary"
								color="red"
								isSmall={true}
							>
								Deactivate
							</Button>,
						]}
					>
						<SettingBlock
							title="Import"
							description="Import your blocklist and allowlist from another website."
						>
							<p>
								Upload the blocklist and allowlist CSV file exported from
								another website. Imported user agents will be added to the
								existing blocklist and allowlist.
							</p>
							<div>
								<Button
									appearance="secondary"
									icon="upload"
									color="black"
									isSmall={true}
								>
									Upload file
								</Button>
							</div>
						</SettingBlock>
						<SettingBlock
							title="Export"
							description="Export your blocklist and allowlist for use on another website."
						>
							<Button
								appearance="secondary"
								icon="upload"
								color="black"
								isSmall={true}
							>
								Export
							</Button>
						</SettingBlock>
					</SuiBasicBlock>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
BasicBox.args = {
	title: "Example with setting block",
	description: "This is example of the basic box with setting blocks.",
}

// Set controls for story arguments.
BasicBox.argTypes = {
	title: {
		name: "title",
		control: {
			type: "text",
		},
	},
	description: {
		name: "description",
		control: {
			type: "text",
		},
	},
}

// Publish required stories.
export { BasicBox }
