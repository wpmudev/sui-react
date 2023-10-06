import React from "react"

// Import required component(s)
import { ConfigTable as SuiConfigTable } from "../src"
import { configs } from "./configs"

// Import documentation main page
import docs from "./config-table.mdx"

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
				<SuiConfigTable {...props} configs={configs} />
			</div>
		</div>
	)
}

ConfigTable.args = {}

ConfigTable.argTypes = {}
