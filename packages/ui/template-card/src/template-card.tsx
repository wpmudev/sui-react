import React from "react"

import { PopoverProps } from "./template-card.types"
import { useStyles } from "@wpmudev/sui-hooks"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"
import { generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"
import { IconProps } from "@wpmudev/sui-icon"

// Popover component
const TemplateCard: React.FC<PopoverProps> = ({
	title = "",
	description = "",
	tag,
	icon = "File",
	src,
	imgProps = {},
	className = "",
	actions = [],
	_htmlProps = {},
	_style = {},
}) => {
	const IconTag: React.ComponentType<IconProps> = Icons[icon as IconsNamesType]
	const { suiInlineClassname } = useStyles(_style, className ?? "")

	// class names
	const classNames = generateCN("sui-template-card", {}, suiInlineClassname)

	return (
		<div className={classNames} {..._renderHTMLPropsSafely(_htmlProps)}>
			<div className="sui-template-card__hero">
				{tag && tag}
				<div className="sui-template-card__hero-media">
					<img src={src} alt="Card hero" {...imgProps} />
					{IconTag && <IconTag size={"md"} />}
				</div>
				{actions && <div className="sui-template-card__actions">{actions}</div>}
			</div>
			{(title || description) && (
				<div className="sui-template-card__content">
					{title && <h3 className="sui-template-card__heading">{title}</h3>}
					{description && (
						<p className="sui-template-card__body">{description}</p>
					)}
				</div>
			)}
		</div>
	)
}

// Publish required component.
export { TemplateCard }
