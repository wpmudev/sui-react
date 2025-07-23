import React, { Fragment, Children } from "react"

// Import required components.
import dedent from "dedent"
import { Tag, Code } from "@wpmudev/sui-docs"
import docs from "./IconsPack.mdx"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"

// Import required styles.
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
	depreciated?: boolean
}

interface IconGroup {
	name: string
	icons: Record<string, Icon>
}

interface IconsCardProps {
	category: string
	name: string
	alt?: boolean
	depreciated?: boolean
	checked?: boolean
	id: string
}

const List = ({ category, search }: { category: string; search: string }) => {
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
										depreciated={objIcons[icon].depreciated}
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

const IconsCard = ({
	category,
	name,
	alt,
	checked,
	id,
	depreciated,
}: IconsCardProps) => {
	const hasTagAlternative = alt
	const hasTagChecked = checked
	const hasDepreciated = depreciated

	const camelCased = (id ?? "").replace(/-([a-z])/g, function (g) {
		return g[1].toUpperCase()
	})

	//const sample = dedent`<span class="suicons suicons--${id}" aria-hidden="true"></span>`

	const compSample = dedent`<${capitalizeText(camelCased)}/>`

	const iconName: IconsNamesType = capitalizeText(camelCased) as IconsNamesType

	return (
		<div className="csb-icon">
			<div className="csb-icon__preview">
				{(hasTagAlternative || hasTagChecked || hasDepreciated) && (
					<div className="csb-icon__preview-mode">
						{hasDepreciated && <Tag light={true}>Depreciated</Tag>}
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
			"plugin-thc": {
				name: "The Hub",
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
			logo: {
				name: "WPMU DEV",
			},
			"plugin-automate": {
				name: "Automate",
			},
			"plugin-uptime": {
				name: "Uptime",
			},
		},
	},
	general: {
		name: "General",
		icons: {
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
			"check-alt": {
				name: "Check",
				alt: true,
			},
			check: {
				name: "Check",
			},
			ban: {
				name: "Ban",
			},
			"power-off": {
				name: "Power Off",
			},
			lock: {
				name: "Lock",
			},
			key: {
				name: "Key",
			},
			plugin: {
				name: "Plug",
			},
			"plugin-disconnected": {
				name: "Plug Error",
			},
			bug: {
				name: "Bug",
			},
			gift: {
				name: "Gift",
			},
			shield: {
				name: "Shield",
				checked: false,
			},
			"shield-check": {
				name: "Shield",
				checked: true,
			},
			performance: {
				name: "Gauge",
			},
			search: {
				name: "Search",
			},
			email: {
				name: "Envelope",
			},
			phone: {
				name: "Phone",
			},
			roadmap: {
				name: "Map Marker",
			},
			bell: {
				name: "Bell (Notification)",
			},
			calendar: {
				name: "Calendar",
			},
			"user-alt": {
				name: "User",
				alt: true,
			},
			user: {
				name: "User",
			},
			"user-add": {
				name: "User Add",
			},
			package: {
				name: "Box",
			},
			"package-check": {
				name: "Box Check",
				checked: true,
			},
			show: {
				name: "Eye Open",
			},
			hide: {
				name: "Eye Close",
			},
			globe: {
				name: "Globe",
			},
			video: {
				name: "Video Plus",
			},
			play: {
				name: "Play",
			},
			stop: {
				name: "Stop",
			},
			desktop: {
				name: "Desktop",
			},
			mobile: {
				name: "Mobile",
			},
			clock: {
				name: "Clock (Time)",
			},
			graduation: {
				name: "Graduation Cap",
			},
			spinner: {
				name: "Spinner",
			},
			submit: {
				name: "Submit",
			},
			optimization: {
				name: "Bolt",
			},
			cloud: {
				name: "Cloud",
			},
			"cloud-add": {
				name: "Cloud (Add)",
			},
			code: {
				name: "Code",
			},
			"square-code": {
				name: "Square Code",
			},
			merge: {
				name: "Merge",
			},
			like: {
				name: "Like",
			},
			dislike: {
				name: "Dislike",
			},
			lifesaver: {
				name: "Lifesaver (Life Ring)",
			},
			server: {
				name: "Server",
			},
			cart: {
				name: "Cart",
			},
			tag: {
				name: "Label Tag",
			},
			emoji: {
				name: "Emoji",
			},
			currency: {
				name: "Currency (Dollar)",
			},
			broom: {
				name: "Broom",
			},
			newspaper: {
				name: "Newspaper",
			},
			captcha: {
				name: "Captcha",
			},
			sitemap: {
				name: "Sitemap",
			},
			poll: {
				name: "Square Poll",
			},
			group: {
				name: "Group",
			},
		},
	},
	"edit-toolbar": {
		name: "Edit and toolbar",
		icons: {
			add: {
				name: "Plus",
			},
			close: {
				name: "Close",
			},
			"close-alt": {
				name: "Close",
				alt: true,
			},
			settings: {
				name: "Settings",
			},
			tools: {
				name: "Tools",
			},
			brush: {
				name: "Brush",
			},
			palette: {
				name: "Palette",
			},
			grip: {
				name: "Grip Dots",
			},
			more: {
				name: "More",
			},
			hamburger: {
				name: "Hamburger",
			},
			filter: {
				name: "Filter",
			},
			save: {
				name: "Save",
			},
			link: {
				name: "Link",
			},
			copy: {
				name: "Copy",
			},
			edit: {
				name: "Edit (Pen Line)",
			},
			config: {
				name: "Config (Square sliders)",
			},
			trash: {
				name: "Trash",
			},
			compress: {
				name: "Compress",
			},
			expand: {
				name: "Expand",
			},
		},
	},
	"files-folders": {
		name: "Files/Folders",
		icons: {
			"folder-close": {
				name: "Folder (Close)",
			},
			"folder-open": {
				name: "Folder (Open)",
			},
			file: {
				name: "File",
				checked: false,
			},
			"file-check": {
				name: "File",
				checked: true,
			},
			"file-code": {
				name: "File Code",
			},
			"file-zip": {
				name: "File Zip",
			},
			form: {
				name: "Form (File)",
			},
			invoice: {
				name: "Invoice",
			},
			"page-break": {
				name: "Page Break",
			},
			export: {
				name: "Export",
			},
			"signature-alt": {
				name: "Signature",
				alt: true,
			},
			image: {
				name: "Image",
			},
			images: {
				name: "Images",
			},
		},
	},
	"arrows-directions": {
		name: "Arrows & directions",
		icons: {
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
			"arrow-right": {
				name: "Arrow Right",
			},
			"arrow-left": {
				name: "Arrow Left",
			},
			"arrow-up": {
				name: "Arrow Up",
			},
			"arrow-down": {
				name: "Arrow Down",
			},
			async: {
				name: "Async",
			},
			"external-link": {
				name: "External Link",
			},
			"caret-right": {
				name: "Caret Right",
			},
			"caret-left": {
				name: "Caret Left",
			},
			"caret-up": {
				name: "Caret Up",
			},
			"caret-down": {
				name: "Caret Down",
			},
			"caret-up-down": {
				name: "Sort",
			},
			upload: {
				name: "Upload",
			},
			download: {
				name: "Download",
			},
			"rotate-left": {
				name: "Rotate Left",
			},
			"rotate-right": {
				name: "Rotate Right",
			},
			refresh: {
				name: "Refresh",
			},
			exit: {
				name: "Exit",
			},
			"compress-alt": {
				name: "Compress",
				alt: true,
			},
		},
	},
	"spacings-alignments-layouts": {
		name: "Layouts",
		icons: {
			"align-left": {
				name: "Align Left",
			},
			"align-right": {
				name: "Align Right",
			},
			"align-bottom": {
				name: "Align Bottom",
			},
			"align-top": {
				name: "Align Top",
			},
			"align-center": {
				name: "Align Center",
			},
			"align-horizontal": {
				name: "Align Center Horizontal",
			},
			"spacing-vertical": {
				name: "Spacing Vertical",
			},
			"spacing-horizontal": {
				name: "Spacing Horizontal",
			},
			"align-justify": {
				name: "Align Justify",
			},
			"align-left-alt": {
				name: "Align Left",
				alt: true,
			},
			"align-center-alt": {
				name: "Align Center",
				alt: true,
			},
			"align-right-alt": {
				name: "Align Right",
				alt: true,
			},
			header: {
				name: "Header (Flex top)",
			},
			inline: {
				name: "Inline (Flex center)",
			},
			footer: {
				name: "Footer (Flex bottom)",
			},
		},
	},
	forms: {
		name: "Forms",
		icons: {
			"radio-selected": {
				name: "Radio Selected",
			},
			"checkbox-checked": {
				name: "Checkbox Checked",
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
			js: {
				name: "JS",
			},
			css: {
				name: "CSS",
			},
			rss: {
				name: "RSS (Feed)",
			},
			stripe: {
				name: "Stripe",
			},
			paypal: {
				name: "Paypal",
			},
			wordpress: {
				name: "WordPress",
			},
			woocommerce: {
				name: "Woocommerce",
			},
			linkedin: {
				name: "Linkedin",
			},
			google: {
				name: "Google",
			},
			"google-tag-manager": {
				name: "Google Tag Manager",
			},
			pinterest: {
				name: "Pinterest",
			},
			html: {
				name: "HTML",
			},
			tiktok: {
				name: "Tiktok",
			},
		},
	},
	charts: {
		name: "Charts",
		icons: {
			chart: {
				name: "Chart",
			},
			reports: {
				name: "Reports",
			},
		},
	},
	depreciated: {
		name: "Depreciated",
		icons: {
			"lock-alt": {
				name: "Lock",
				alt: true,
				depreciated: true,
			},
			"clock-alt": {
				name: "Clock (Time)",
				alt: true,
				depreciated: true,
			},
			"spinner-alt": {
				name: "Spinner",
				alt: true,
				depreciated: true,
			},
			"cloud-alt": {
				name: "Cloud",
				alt: true,
				depreciated: true,
			},
			"like-alt": {
				name: "Like",
				alt: true,
				depreciated: true,
			},
			"dislike-alt": {
				name: "Dislike",
				alt: true,
				depreciated: true,
			},
			signature: {
				name: "Signature",
				depreciated: true,
			},
			"caret-right-alt": {
				name: "Caret Right",
				alt: true,
				depreciated: true,
			},
			"caret-left-alt": {
				name: "Caret Left",
				alt: true,
				depreciated: true,
			},
			"caret-up-alt": {
				name: "Caret Up",
				alt: true,
				depreciated: true,
			},
			"caret-down-alt": {
				name: "Caret Down",
				alt: true,
				depreciated: true,
			},
			"checkbox-checked-alt": {
				name: "Checkbox Checked",
				alt: true,
				depreciated: true,
			},
			"checkbox-indeterminate": {
				name: "Checkbox Indeterminate",
				depreciated: true,
			},
			"chart-alt": {
				name: "Chart",
				alt: true,
				depreciated: true,
			},
			tutorials: {
				name: "Tutorials",
				depreciated: true,
			},
			menu: {
				name: "Menu",
				depreciated: true,
			},
		},
	},
}

List.storyName = "Icons Pack"
List.args = {
	category: "all",
	search: "",
}
List.argTypes = {
	category: {
		name: "Category",
		options: [
			"all",
			"products",
			"general",
			"edit-toolbar",
			"files-folders",
			"arrows-directions",
			"spacings-alignments-layouts",
			"forms",
			"social",
			"charts",
			"depreciated",
		],
		control: {
			type: "select",
			labels: {
				all: "All Categories",
				products: "Products",
				general: "General",
				"edit-toolbar": "Edit & toolbar",
				"files-folders": "Files/Folders",
				"arrows-directions": "Arrows & directions",
				"spacings-alignments-layouts": "Spacings, alignments & layouts",
				forms: "Forms",
				social: "Social",
				charts: "Charts",
				depreciated: "Depreciated",
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

export { List }
