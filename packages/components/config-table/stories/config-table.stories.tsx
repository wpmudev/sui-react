import React from "react"

// Import required component(s)
import { ConfigTable as SuiConfigTable } from "../src"

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

const configs = [
	{
		id: 1,
		name: "Default config",
		description: "Recommended performance config for every site.",
		config: {
			configs: {
				settings: {
					advanced: {
						query_string: false,
						emoji: false,
						cart_fragments: false,
						lazy_load: {
							enabled: false,
							preload: false,
						},
					},
					gravatar: {
						enabled: true,
					},
					page_cache: {
						enabled: true,
						detection: "auto",
						integrations: {
							varnish: false,
							opcache: false,
						},
						preload: false,
					},
					performance: [],
					rss: {
						enabled: true,
						duration: 3600,
					},
					settings: {
						accessible_colors: false,
						remove_settings: false,
						remove_data: false,
						control: true,
					},
					uptime: {
						enabled: false,
					},
				},
			},
			strings: {
				advanced: [
					"Remove query strings from assets - Inactive\nRemove Emoji JS & CSS files - Inactive\nDisable WooCommerce cart fragments - Inactive\nComments lazy loading - Inactive\n",
				],
				gravatar: ["Gravatar cache - Active\n"],
				page_cache: [
					"Page cache - Active\nFile change detection - Auto\nPurge Varnish cache - Inactive\nPurge OpCache - Inactive\nCache preloading - Inactive\n",
				],
				rss: ["RSS caching - Active\n"],
				settings: [
					"High contrast mode - Inactive\nRemove settings on uninstall - Inactive\nRemove data on uninstall - Inactive\nCache control in admin bar - Active\n",
				],
				uptime: ["Uptime - Inactive\n"],
			},
		},
		plugin: "1081721",
	},
]

// Build story
export const ConfigTable = ({ example, ...props }) => {
	const box = {
		display: "flex",
		flexDirection: "column",
		gap: "8px",
		margin: "0 0 20px",
		padding: "30px",
		border: "1px solid #E6E6E6",
		borderRadius: "4px",
		// background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={box}>
					<SuiConfigTable {...props} configs={configs}>
						Test link
					</SuiConfigTable>
				</div>
			</div>
		</div>
	)
}

ConfigTable.args = {
	href: "#",
	as: "a",
	isInline: false,
	isDisabled: false,
	isExternal: false,
	hasExternalIcon: false,
}

ConfigTable.argTypes = {
	as: {
		name: "As",
		control: {
			type: "text",
		},
	},
	isInline: {
		name: "isInline",
		control: {
			type: "boolean",
		},
	},
	isDisabled: {
		name: "isDisabled",
		control: {
			type: "boolean",
		},
	},
	isExternal: {
		name: "isExternal",
		control: {
			type: "boolean",
		},
	},
	hasExternalIcon: {
		name: "hasExternalIcon",
		control: {
			type: "boolean",
		},
	},
	className: {
		name: "className",
		control: {
			type: "text",
		},
	},
}
