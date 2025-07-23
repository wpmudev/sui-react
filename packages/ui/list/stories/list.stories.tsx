import React from "react"

// Import required component(s)
import { List as SuiList, ListItem, ListProps } from "../src"

import {
	PluginBeehive,
	PluginBlc,
	PluginDefender,
	PluginAutomate,
	PluginDashboard,
} from "@wpmudev/sui-icons"

// Import documentation main page
// import docs from "./list.mdx"

export default {
	title: "SUI/Components/Core/List",
	component: SuiList,
	parameters: {
		layout: "fullscreen",
		// docs: {
		// 	page: docs,
		// },
	},
}

// Build story
export const List = ({ ...props }: ListProps) => {
	const box = {
		margin: "0 0 20px",
		padding: "30px",
		border: "1px solid #E6E6E6",
		borderRadius: "4px",
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={box}>
					<SuiList {...props} />
				</div>
			</div>
		</div>
	)
}

List.args = {
	type: "ul",
	variant: "bordered",
	className: "",
	children: (
		<>
			<ListItem action={true}>
				<PluginBeehive />
				Automated firewall protection
			</ListItem>
			<ListItem variant="neutral" isPro={true}>
				<PluginBeehive />
				Automated firewall protection
			</ListItem>
			<ListItem variant="info">
				<PluginDashboard />
				Regularly Reviewed IP Database
			</ListItem>
			<ListItem variant="warning" action={true}>
				<PluginBlc />
				Millions of IPs Checked Daily
			</ListItem>
			<ListItem variant="success" action={true}>
				<PluginAutomate />
				Millions of IPs Checked Daily
			</ListItem>
			<ListItem
				variant="critical"
				action={true}
				onItemClick={() => alert("Clicked!")}
			>
				<PluginDefender />
				Millions of IPs Checked Daily
			</ListItem>
		</>
	),
	_style: {},
	_htmlProps: {},
}

List.argTypes = {
	type: {
		name: "Type",
		description:
			"HTML list type to render (`ul` for unordered, `ol` for ordered).",
		options: ["ul", "ol"],
		control: {
			type: "select",
			labels: {
				ul: "Unordered List (ul)",
				ol: "Ordered List (ol)",
			},
		},
		table: {
			type: { summary: "'ul' | 'ol'" },
			defaultValue: { summary: "'ul'" },
		},
	},
	variant: {
		name: "Variant",
		description:
			"Variant of the list to render (`unstyled`, `bordered`, `flushed`).",
		options: ["unstyled", "bordered", "flushed"],
		control: {
			type: "select",
			labels: {
				unstyled: "Unstyled",
				bordered: "Bordered",
				flushed: "Flushed",
			},
		},
		table: {
			type: { summary: "'unstyled' | 'bordered' | 'flushed'" },
			defaultValue: { summary: "'unstyled'" },
		},
	},
	border: {
		name: "Border",
		description: "Adds a border around the list.",
		control: "boolean",
		table: {
			type: { summary: "boolean" },
			defaultValue: { summary: false },
		},
	},
	flush: {
		name: "Flush",
		description: "Removes spacing between list items.",
		control: "boolean",
		table: {
			type: { summary: "boolean" },
			defaultValue: { summary: false },
		},
	},
	unstyled: {
		name: "Unstyled",
		description: "Removes all default list styles.",
		control: "boolean",
		table: {
			type: { summary: "boolean" },
			defaultValue: { summary: true },
		},
	},
	className: {
		name: "Class Name",
		description: "Additional class names for the list.",
		control: "text",
		table: {
			type: { summary: "string" },
			defaultValue: { summary: "''" },
		},
	},
	_style: {
		name: "_style",
		description: "Inline styles applied to the list.",
		control: "object",
		table: {
			type: { summary: "React.CSSProperties" },
			defaultValue: { summary: "{}" },
		},
	},
	_htmlProps: {
		name: "_htmlProps",
		description: "Additional HTML props to be spread on the list element.",
		control: "object",
		table: {
			type: { summary: "object" },
			defaultValue: { summary: "{}" },
		},
	},
	children: {
		name: "Children",
		description: "List items to render inside the list.",
		table: {
			type: { summary: "React.ReactNode" },
		},
	},
}
