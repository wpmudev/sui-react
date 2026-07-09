import React from "react"

// Import required component
import { SettingBlock as SuiSettingBlock, SettingBlockOption } from "../src"
import { Tag } from "@wpmudev/sui-tag"

// Import documentation main page
import docs from "./setting-block.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Advanced/Setting Block",
	component: SuiSettingBlock,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "SettingBlock" story.
const SettingBlock = ({ ...props }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={{ backgroundColor: "white" }}>
					<SuiSettingBlock {...props}>
						<SettingBlockOption
							title="Optional block title"
							description="Setting block optional description"
						>
							Body content here
						</SettingBlockOption>

						<SettingBlockOption
							title="Optional block title"
							description="Setting block optional description"
							actions={<Tag>Tag</Tag>}
						>
							Body content here
						</SettingBlockOption>
					</SuiSettingBlock>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
SettingBlock.args = {
	title: "Title",
	description:
		"Block IP addresses that send POST requests with empty Referer and User-Agent headers.",
	isPro: false,
	isFluid: false,
	overflowHidden: false,
}

// Set controls for story arguments.
SettingBlock.argTypes = {
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
	isFluid: {
		name: "Fluid",
		control: {
			type: "boolean",
		},
	},
	actions: { table: { disable: true } },
	overflowHidden: {
		name: "hidden overflow",
		control: {
			type: "boolean",
		},
	},
}

// Publish required stories.
export { SettingBlock }
