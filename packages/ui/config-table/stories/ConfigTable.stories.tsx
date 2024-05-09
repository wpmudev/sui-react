import React from "react"

// Import required component(s)
import { ConfigTable as SuiConfigTable } from "../src"
import { configs } from "./configs"

// Import documentation main page
import docs from "./ConfigTable.mdx"

export default {
	title: "SUI/Components/Collections/Config Table",
	component: SuiConfigTable,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const ConfigTable = ({ ...props }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div>
					<SuiConfigTable configs={configs} {...props} />
				</div>
			</div>
		</div>
	)
}

ConfigTable.args = {
	hasCreatedDate: true,
	hasLastApplied: true,
	proItems: [
		"High contrast mode",
		"File change detection",
		"Remove Emoji JS & CSS files",
	],
}

ConfigTable.argTypes = {
	hasCreatedDate: {
		name: "Created Date",
		control: {
			type: "boolean",
		},
	},
	hasLastApplied: {
		name: "Last Applied Date",
		control: {
			type: "boolean",
		},
	},
	proItems: {
		name: "Pro Items",
	},
}
