import React, { Fragment, Children } from "react"

// Import required components.
import dedent from "dedent"
import { Tag, Code } from "@wpmudev/sui-docs"
import docs from "./IconsPack.mdx"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"

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

interface Icon {
	name: string
	alt?: boolean
	checked?: boolean
}

interface IconGroup {
	name: string
	icons: Record<string, Icon>
}

interface IconsCardProps {
	category: string
	name: string
	alt?: boolean
	checked?: boolean
	id: string
}

const Page = ({ category, search }: { category: string; search: string }) => {
	const groups = Object.keys(ListIcons).map((group, groupIndex) => {
		const catName = ListIcons[group].name
		const objIcons = ListIcons[group].icons

		const filteredobjIcons: Record<string, Icon> =
			0 !== search.trim().length
				? Object.entries(objIcons).reduce((newObj, [key, val]) => {
						const name = val.name.toLowerCase()
						if (name.includes(search.toLowerCase())) {
							newObj[key] = val
						}
						return newObj
				  }, {} as Record<string, Icon>)
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

const IconsCard = ({ category, name, alt, checked, id }: IconsCardProps) => {
	const hasTagAlternative = "boolean" === typeof alt
	const hasTagChecked = "boolean" === typeof checked

	const camelCased = (id ?? "").replace(/-([a-z])/g, function (g) {
		return g[1].toUpperCase()
	})

	const sample = dedent`<span class="suicons suicons--${id}" aria-hidden="true"></span>`

	const compSample = dedent`<${capitalizeText(camelCased)}/>`

	const iconName: IconsNamesType = capitalizeText(camelCased) as IconsNamesType

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
					{Icons[iconName] &&
						React.createElement(Icons[iconName], {
							size: "xl",
						})}
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
					<h3 className="csb-icon__data-title">React Component</h3>
					<Code fullWidth={true} className="csb-icon__code">
						{compSample}
					</Code>
				</div>
			</div>
		</div>
	)
}

const ListIcons: Record<string, IconGroup> = {
	products: {
		name: "Products",
		icons: {
			beehive: {
				name: "Beehive",
			},
			blc: {
				name: "BLC",
			},
			branda: {
				name: "Branda",
			},
			dashboard: {
				name: "Dashboard",
			},
			defender: {
				name: "Defender",
			},
			forminator: {
				name: "Forminator",
			},
			hummingbird: {
				name: "Hummingbird",
			},
			hustle: {
				name: "Hustle",
			},
			hub: {
				name: "The Hub",
			},
			ivt: {
				name: "IVT",
			},
			shipper: {
				name: "Shipper",
			},
			smartcrawl: {
				name: "SmartCrawl",
			},
			smush: {
				name: "Smush",
			},
			snapshot: {
				name: "Snapshot",
			},
			wpmudev: {
				name: "WPMU DEV",
			},
			automate: {
				name: "Automate",
			},
			uptime: {
				name: "Uptime",
			},
		},
	},
	general: {
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
			"cloud-alt": {
				name: "Cloud",
				alt: true,
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
			ban: {
				name: "Ban",
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
			play: {
				name: "Play",
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
			export: {
				name: "Export",
			},
		},
	},
	state: {
		name: "State",
		icons: {
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
			"caret-up-alt": {
				name: "Caret Up",
				alt: true,
			},
			"caret-down": {
				name: "Caret Down",
			},
			"caret-down-alt": {
				name: "Caret Down",
				alt: true,
			},
			"caret-left": {
				name: "Caret Left",
			},
			"caret-left-alt": {
				name: "Caret Left",
				alt: true,
			},
			"caret-right": {
				name: "Caret Right",
			},
			"caret-right-alt": {
				name: "Caret Right",
				alt: true,
			},
			exit: {
				name: "Exit",
			},
			"rotate-left": {
				name: "Rotate Left",
			},
			"rotate-right": {
				name: "Rotate Right",
			},
			hamburger: {
				name: "Hamburger",
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
			"plugin-disconnected": {
				name: "Plugin Disconnected",
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
			"user-add": {
				name: "User Add",
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
			spinner: {
				name: "Spinner",
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
			phone: {
				name: "Phone",
			},
			currency: {
				name: "Currency (Dollar)",
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
			"clock-alt": {
				name: "Clock (Time)",
				alt: true,
			},
			wordpress: {
				name: "WordPress",
			},
			merge: {
				name: "Merge",
			},
			footer: {
				name: "Footer",
			},
			inline: {
				name: "Inline",
			},
			async: {
				name: "Async",
			},
			roadmap: {
				name: "Roadmap",
			},
			gift: {
				name: "Gift",
			},
			optimization: {
				name: "Optimization",
			},
			reports: {
				name: "Reports",
			},
			graduation: {
				name: "Graduation Cap",
			},
			brush: {
				name: "Brush",
			},
			palette: {
				name: "Palette",
			},
			"file-zip": {
				name: "File Zip",
			},
			newspaper: {
				name: "Newspaper",
			},
			captcha: {
				name: "Captcha",
			},
			"page-break": {
				name: "Page Break",
			},
			signature: {
				name: "Signature",
			},
			"signature-alt": {
				name: "Signature",
				alt: true,
			},
			"group-field": {
				name: "Group Field",
			},
			bug: {
				name: "Bug",
			},
			"caret-up-down": {
				name: "Caret Up Down",
			},
			"align-left": {
				name: "Align Left",
			},
			"align-right": {
				name: "Align Right",
			},
			"align-center": {
				name: "Align Center",
			},
			broom: {
				name: "Broom",
			},
			js: {
				name: "JS",
			},
			css: {
				name: "CSS",
			},
		},
	},
	forms: {
		name: "Forms",
		icons: {
			"radio-selected": {
				name: "Radio Selected",
			},
			calculator: {
				name: "Calculator",
			},
			"calculator-alt": {
				name: "Calculator",
				alt: true,
			},
			"input-text": {
				name: "Input Text",
			},
			"input-number": {
				name: "Input Number",
			},
			"checkbox-checked": {
				name: "Checkbox Checked",
			},
			"checkbox-checked-alt": {
				name: "Checkbox Checked",
				alt: true,
			},
			"checkbox-indeterminate": {
				name: "Checkbox Indeterminate",
			},
		},
	},
	payments: {
		name: "Payments",
		icons: {
			invoice: {
				name: "Invoice",
			},
			stripe: {
				name: "Stripe",
			},
			paypal: {
				name: "Paypal",
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
}

Page.storyName = "Icons Pack"
Page.args = {
	category: "all",
	search: "",
}
Page.argTypes = {
	category: {
		name: "Category",
		options: [
			"all",
			"products",
			"general",
			"status",
			"action",
			"state",
			"navigation",
			"social",
			"forms",
			"global",
		],
		control: {
			type: "select",
			labels: {
				all: "All Categories",
				products: "Products",
				general: "General Icons",
				status: "Edit and toolbar",
				action: "Files/folders",
				state: "Arrow & directions",
				navigation: "Layouts",
				forms: "Forms",
				social: "Brands",
				global: "Charts",
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
