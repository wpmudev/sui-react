import React, { useId } from "react"
import { Button } from "@wpmudev/sui-button"
import {
	_renderHTMLPropsSafely,
	CustomIcons,
	CustomIconsSlug,
	generateCN,
	PluginIconTypes,
} from "@wpmudev/sui-utils"
import { WPMUDEVHelpProps } from "../navigation-wpmudev.types"
import { useStyles } from "@wpmudev/sui-hooks"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"
import { IconProps } from "@wpmudev/sui-icon"
import { Tag } from "@wpmudev/sui-tag"
import { Link } from "@wpmudev/sui-link"
import ChatAvatar from "../images/chat-avatar.png"

const HelpWPMUDEVContent: React.FC<WPMUDEVHelpProps> = ({
	id,
	title = "Recommended Readings",
	titleLink,
	isPro = false,
	content = [],
	resources = {
		title: "More resources",
		content: [
			{
				icon: "documentation",
				title: "Documentation",
				description: "Get started with out detailed documentation.",
				link: "https://wpmudev.com",
			},
			{
				icon: "feedback",
				title: "Give feedback",
				description: "Help us improve by sharing your experience.",
				link: "https://wpmudev.com",
			},
		],
	},
	support = {
		icon: "contact",
		title: "Contact support",
		description: "Get expert and in-depth help from WPMU DEV staff.",
		image: ChatAvatar,
		message: "Reply usual time 2 mins",
	},
	className = "",
	_style = {},
	_htmlProps = {},
}) => {
	const generatedId = useId()
	const wpmudevHelpId = id || `sui_wpmudev_help_${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)
	const classNames = generateCN(
		"sui-wpmudev__help-content",
		{},
		suiInlineClassname,
	)

	const resourcesSection = resources.content.map((item, index) => {
		// Icon for the specified plugin or use a default "Plugin" icon.
		const PluginIcon: PluginIconTypes = item.icon
			? CustomIcons?.[item.icon as CustomIconsSlug]
			: { icon: "Documentation" }

		// Dynamically determine the IconTag based on the provided icon prop.
		let IconTag: React.ComponentType<IconProps> | null = null
		if (!!PluginIcon) {
			IconTag = Icons?.[PluginIcon.icon as IconsNamesType]
		}
		return (
			<li key={item.title} className="sui-wpmudev__help-item">
				<a
					href={item.link}
					className="sui-wpmudev__help-list--item sui-wpmudev__help-list--link"
					target="_blank"
					rel="noreferrer"
				>
					<div
						className="sui-wpmudev__list-icon"
						style={{ backgroundColor: PluginIcon?.bg }}
					>
						{!!IconTag && <IconTag fill={PluginIcon?.color} />}
					</div>
					<div className="sui-wpmudev__list-content">
						<div className="sui-wpmudev__list-title sui-heading--h5">
							{item.title}
						</div>
						<p className="sui-wpmudev__list-desc">{item.description}</p>
					</div>
				</a>
			</li>
		)
	})

	const supportSection = () => {
		// Icon for the specified plugin or use a default "Plugin" icon.
		const PluginIcon: PluginIconTypes = support.icon
			? CustomIcons?.[support.icon as CustomIconsSlug]
			: { icon: "Documentation" }

		// Dynamically determine the IconTag based on the provided icon prop.
		let IconTag: React.ComponentType<IconProps> | null = null
		if (!!PluginIcon) {
			IconTag = Icons?.[PluginIcon.icon as IconsNamesType]
		}
		return (
			<li className="sui-wpmudev__support">
				<div className="sui-wpmudev__help-list--item">
					<div
						className="sui-wpmudev__list-icon"
						style={{ backgroundColor: PluginIcon?.bg }}
					>
						{!!IconTag && <IconTag fill={PluginIcon?.color} />}
					</div>
					<div className="sui-wpmudev__list-content">
						<div className="sui-wpmudev__list-title sui-heading--h5">
							{support.title}
							{!isPro && (
								<Tag
									isSmall={true}
									isUppercase={true}
									colorScheme="black"
									design="outlined"
								>
									Pro
								</Tag>
							)}
						</div>
						<p className="sui-wpmudev__list-desc">{support.description}</p>
					</div>
					<div className="sui-wpmudev__list-chat-message">
						<img
							src={ChatAvatar}
							alt="Support team member avatar"
							loading="lazy"
						/>
						<p className="sui-wpmudev__list-text-small">
							<small>{support.message}</small>
						</p>
					</div>
				</div>
				{!isPro && (
					<div className="sui-wpmudev__list-actions">
						<Button colorScheme="black" type="primary">
							Upgrade to pro
						</Button>
					</div>
				)}
			</li>
		)
	}

	return (
		<div
			id={wpmudevHelpId}
			className={classNames}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div id={`${wpmudevHelpId}_title`} className="sui-wpmudev__help-title">
				{title}
				{titleLink && (
					<Link
						isExternal={true}
						hasExternalIcon={true}
						className="sui-wpmudev__help-title-link"
						{...titleLink}
					>
						{titleLink?.children}
					</Link>
				)}
			</div>
			{content && (
				<div
					id={`${wpmudevHelpId}_readings`}
					className="sui-wpmudev__help-readings"
				>
					{content.map((item, index) => (
						<a
							key={index}
							href={item.link}
							target="_blank"
							rel="noreferrer"
							className="sui-wpmudev__help-link"
						>
							{item.label}
						</a>
					))}
				</div>
			)}
			<div
				id={`${wpmudevHelpId}_resources_title`}
				className="sui-wpmudev__help-title"
			>
				{resources.title}
				{resources.titleLink && (
					<Link
						isExternal={true}
						hasExternalIcon={true}
						className="sui-wpmudev__help-title-link"
						{...resources.titleLink}
					>
						{resources.titleLink.children}
					</Link>
				)}
			</div>
			<ul id={`${wpmudevHelpId}_list`} className="sui-wpmudev__help-list">
				{resourcesSection}
				{supportSection()}
			</ul>
		</div>
	)
}

// Export the MoreFromWPMUDEV component
export { HelpWPMUDEVContent }
