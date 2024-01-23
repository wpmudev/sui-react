import React from "react"

// Import required component
import { SettingBlock as SuiSettingBlock } from "../src"

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
	return <SuiSettingBlock />
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={{ backgroundColor: "white" }}>
					<SuiSettingBlock {...props}>Controls</SuiSettingBlock>
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
	actions: null,
}

// Set controls for story arguments.
SettingBlock.argTypes = {
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
	isPro: {
		name: "isPro",
		control: {
			type: "boolean",
		},
	},
	isFluid: {
		name: "isFluid",
		control: {
			type: "boolean",
		},
	},
	actions: {
		name: "actions",
		control: {
			type: "string",
		},
	},
}

// Publish required stories.
export { SettingBlock }
