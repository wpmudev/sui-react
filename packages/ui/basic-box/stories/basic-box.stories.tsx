import React, { Fragment, ReactNode } from "react"

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
					<SuiBasicBlock {...props}>
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
									type="secondary"
									icon="Upload"
									colorScheme="black"
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
								type="secondary"
								icon="Upload"
								colorScheme="black"
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
	isPro: false,
	headerActions: (
		<Fragment>
			<Button type="secondary" colorScheme="black" isSmall={true} icon="Upload">
				Upload
			</Button>
			<Button type="primary" colorScheme="blue" isSmall={true}>
				Create new
			</Button>
		</Fragment>
	),
	footerActions: [
		<Button key={0} type="primary" colorScheme="blue" isSmall={true}>
			Save changes
		</Button>,
		<Button
			key={1}
			startIcon="PowerOff"
			type="tertiary"
			colorScheme="red"
			isSmall={true}
		>
			Deactivate
		</Button>,
	],
}

// Set controls for story arguments.
BasicBox.argTypes = {
	title: {
		name: "Title",
		control: {
			type: "text",
		},
	},
	description: {
		name: "Description",
		control: {
			type: "text",
		},
	},
	isPro: {
		name: "Pro",
		control: {
			type: "boolean",
		},
	},
	headerActions: {
		name: "Header actions",
	},
	footerActions: {
		name: "Footer actions",
	},
}

// Publish required stories.
export { BasicBox }
