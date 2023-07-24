import React, { Fragment, Children } from "react"

// Import required components.
import dedent from "dedent"
import { Tag, Code } from "@wpmudev/storybook"
import docs from "./IconsPack.mdx"

// Import required styles.
import "../dist/css/sui-icons.css"
import "./styles/icons-pack.scss"

import { capitalizeText } from "@wpmudev/sui-utils"

export default {
	title: "SUI/Icons Pack",
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
		interactions: {
			disabled: true,
		},
	},
}

const Page = ({ category, search }) => {
	const groups = Object.keys(ListIcons).map((group, groupIndex) => {
		const catName = ListIcons[group].name
		const objIcons = ListIcons[group].icons

		const filteredobjIcons =
			0 !== search.trim().length
				? Object.entries(objIcons).reduce((newObj, [key, val]) => {
						const name = val.name.toLowerCase()
						if (name.includes(search.toLowerCase())) {
							newObj[key] = val
						}
						return newObj
				  }, {})
				: objIcons

		const icons = Children.map(
			Object.keys(filteredobjIcons),
			(icon, iconIndex) => {
				return (
					<Fragment>
						{("all" === category || group === category) && (
							<li key={`${groupIndex}--${iconIndex}`}>
								<div className="csb-icons__content">
									<IconsCard
										category={catName}
										name={objIcons[icon].name}
										alt={objIcons[icon].alt}
										checked={objIcons[icon].checked}
										id={icon}
									/>
								</div>
							</li>
						)}
					</Fragment>
				)
			},
		)

		return <Fragment key={groupIndex}>{icons}</Fragment>
	})

	return (
		<div className="sui-layout sui-layout--spacing sui-layout--justify">
			<div className="sui-layout__content">
				<ul className="csb-icons">{groups}</ul>
			</div>
		</div>
	)
}

const IconsCard = ({ category, name, alt, checked, id }) => {
	const hasTagAlternative = "boolean" === typeof alt
	const hasTagChecked = "boolean" === typeof checked

	const camelCased = (id ?? "").replace(/-([a-z])/g, function (g) {
		return g[1].toUpperCase()
	})

	const sample = dedent`<span class="suicons suicons--${id}" aria-hidden="true"></span>`

	const compSample = dedent`<${capitalizeText(camelCased)}/>`

	return (
		<div className="csb-icon">
			<div className="csb-icon__preview">
				{(hasTagAlternative || hasTagChecked) && (
					<div className="csb-icon__preview-mode">
						{hasTagAlternative && alt && <Tag color="yellow">Alternative</Tag>}
						{hasTagChecked && (
							<Fragment>
								{checked ? (
									<Tag color="green" light={true}>
										Check
									</Tag>
								) : (
									<Tag light={true}>Uncheck</Tag>
								)}
							</Fragment>
						)}
					</div>
				)}
				<div className="csb-icon__preview-icon">
					<span className={`suicons suicons--${id}`} style={{ fontSize: 64 }} />
				</div>
			</div>

			<div className="csb-icon__data">
				<h2 className="csb-icon__category">
					{category} / <span className="csb-icon__name">{name}</span>
				</h2>

				<div className="csb-icon__data-block">
					<h3 className="csb-icon__data-title">SVG Name</h3>
					<Code theme="ghost" fullWidth={true}>
						{id}
					</Code>
				</div>

				<div className="csb-icon__data-block">
					<h3 className="csb-icon__data-title">HTML Code</h3>
					<Code fullWidth={true} className="csb-icon__code">
						{sample}
					</Code>
				</div>
				<div className="csb-icon__data-block">
					<h3 className="csb-icon__data-title">React Component</h3>
					<Code fullWidth={true} className="csb-icon__code">
						{compSample}
					</Code>
				</div>
			</div>
		</div>
	)
}

const ListIcons = {
	products: {
		name: "Products",
		icons: {
			"plugin-beehive": {
				name: "Beehive",
			},
			"plugin-blc": {
				name: "BLC",
			},
			"plugin-branda": {
				name: "Branda",
			},
			"plugin-dashboard": {
				name: "Dashboard",
			},
			"plugin-defender": {
				name: "Defender",
			},
			"plugin-forminator": {
				name: "Forminator",
			},
			"plugin-hummingbird": {
				name: "Hummingbird",
			},
			"plugin-hustle": {
				name: "Hustle",
			},
			"plugin-ivt": {
				name: "IVT",
			},
			"plugin-shipper": {
				name: "Shipper",
			},
			"plugin-smartcrawl": {
				name: "SmartCrawl",
			},
			"plugin-smush": {
				name: "Smush",
			},
			"plugin-snapshot": {
				name: "Snapshot",
			},
			hub: {
				name: "The Hub",
			},
			logo: {
				name: "WPMU DEV",
			},
		},
	},
	"summary-box": {
		name: "Summary Box",
		icons: {
			chart: {
				name: "Chart",
			},
			"chart-alt": {
				name: "Chart",
				alt: true,
			},
			video: {
				name: "Video",
			},
			link: {
				name: "Link",
			},
			shield: {
				name: "Shield",
				checked: false,
			},
			"shield-check": {
				name: "Shield",
				checked: true,
			},
			form: {
				name: "Form",
			},
			performance: {
				name: "Performance",
			},
			email: {
				name: "Email",
			},
			package: {
				name: "Package",
				checked: false,
			},
			"package-check": {
				name: "Package",
				checked: true,
			},
			cloud: {
				name: "Cloud",
			},
		},
	},
	status: {
		name: "Status",
		icons: {
			check: {
				name: "Check",
			},
			"check-alt": {
				name: "Check",
				alt: true,
			},
			info: {
				name: "Info",
			},
			"info-alt": {
				name: "Info",
				alt: true,
			},
			question: {
				name: "Question",
			},
			warning: {
				name: "Warning",
			},
		},
	},
	action: {
		name: "Action",
		icons: {
			close: {
				name: "Close",
			},
			"close-alt": {
				name: "Close",
				alt: true,
			},
			add: {
				name: "Add",
			},
			upload: {
				name: "Upload",
			},
			compress: {
				name: "Compress",
			},
			settings: {
				name: "Settings",
			},
			refresh: {
				name: "Refresh",
			},
			trash: {
				name: "Trash",
			},
			"trash-alt": {
				name: "Trash",
				alt: true,
			},
			fullscreen: {
				name: "Fullscreen",
			},
			stop: {
				name: "Stop",
			},
			save: {
				name: "Save",
			},
			"cloud-add": {
				name: "Cloud (Add)",
			},
			more: {
				name: "More",
			},
			download: {
				name: "Download",
			},
			filter: {
				name: "Filter",
			},
			"power-off": {
				name: "Power Off",
			},
			show: {
				name: "Show",
			},
			hide: {
				name: "Hide",
			},
			lock: {
				name: "Lock",
			},
			"lock-alt": {
				name: "Lock",
				alt: true,
			},
			submit: {
				name: "Submit",
			},
			roadmap: {
				name: "Roadmap",
			},
		},
	},
	state: {
		name: "State",
		icons: {
			spinner: {
				name: "Spinner",
			},
			"spinner-alt": {
				name: "Spinner",
				alt: true,
			},
			grip: {
				name: "Grip",
			},
		},
	},
	navigation: {
		name: "Navigation",
		icons: {
			"arrow-up": {
				name: "Arrow Up",
			},
			"arrow-down": {
				name: "Arrow Down",
			},
			"arrow-left": {
				name: "Arrow Left",
			},
			"arrow-right": {
				name: "Arrow Right",
			},
			"chevron-up": {
				name: "Chevron Up",
			},
			"chevron-down": {
				name: "Chevron Down",
			},
			"chevron-left": {
				name: "Chevron Left",
			},
			"chevron-right": {
				name: "Chevron Right",
			},
			"caret-up": {
				name: "Caret Up",
			},
			"caret-down": {
				name: "Caret Down",
			},
			"caret-left": {
				name: "Caret Left",
			},
			"caret-right": {
				name: "Caret Right",
			},
			"rotate-left": {
				name: "Rotate Left",
			},
			"rotate-right": {
				name: "Rotate Right",
			},
			exit: {
				name: "Exit",
			},
		},
	},
	social: {
		name: "Social Media",
		icons: {
			facebook: {
				name: "Facebook",
			},
			instagram: {
				name: "Instagram",
			},
			twitter: {
				name: "Twitter",
			},
		},
	},
	global: {
		name: "Global",
		icons: {
			image: {
				name: "Image",
			},
			globe: {
				name: "Globe",
			},
			docs: {
				name: "Documentation",
			},
			plugin: {
				name: "Plugin",
			},
			tutorials: {
				name: "Tutorials",
			},
			menu: {
				name: "Menu",
			},
			user: {
				name: "User",
			},
			"user-alt": {
				name: "User",
				alt: true,
			},
			search: {
				name: "Search",
			},
			calendar: {
				name: "Calendar",
			},
			"folder-open": {
				name: "Folder (Open)",
			},
			"folder-close": {
				name: "Folder (Close)",
			},
			file: {
				name: "File",
				checked: false,
			},
			"file-check": {
				name: "File",
				checked: true,
			},
			config: {
				name: "Config",
			},
			images: {
				name: "Images",
			},
			desktop: {
				name: "Desktop",
			},
			mobile: {
				name: "Mobile",
			},
			"file-zip": {
				name: "File Zip",
			},
			edit: {
				name: "Edit (Pen Line)",
			},
			like: {
				name: "Like",
			},
			"like-alt": {
				name: "Like",
				alt: true,
			},
			dislike: {
				name: "Dislike",
			},
			"dislike-alt": {
				name: "Dislike",
				alt: true,
			},
			lifesaver: {
				name: "Lifesaver (Life Ring)",
			},
			"compress-alt": {
				name: "Compress",
				alt: true,
			},
			"file-code": {
				name: "File Code",
			},
			server: {
				name: "Server",
			},
			code: {
				name: "Code",
			},
			cart: {
				name: "Cart",
			},
			emoji: {
				name: "Emoji",
			},
			tools: {
				name: "Tools (Settings Wrench)",
			},
			bell: {
				name: "Bell (Notification)",
			},
			rss: {
				name: "RSS (Feed)",
			},
			"external-link": {
				name: "External Link",
			},
			key: {
				name: "Key",
			},
			copy: {
				name: "Copy",
			},
			tag: {
				name: "Label Tag",
			},
			clock: {
				name: "Clock (Time)",
			},
		},
	},
}

Page.storyName = "Icons Pack"
Page.args = {
	category: "all",
	search: "",
}
Page.argTypes = {
	category: {
		name: "Category",
		control: {
			type: "select",
			options: {
				"All Categories": "all",
				Products: "products",
				"Summary Box": "summary-box",
				Status: "status",
				Action: "action",
				State: "state",
				Navigation: "navigation",
				"Social Media": "social",
				Global: "global",
			},
		},
	},
	search: {
		name: "Keyword Search",
		control: {
			type: "text",
		},
	},
}

export { Page }
