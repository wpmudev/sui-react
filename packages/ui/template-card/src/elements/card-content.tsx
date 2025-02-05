import React, { useRef } from "react"

import { useStyles, useIsOverflowing } from "@wpmudev/sui-hooks"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"
import { generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"
import { IconProps } from "@wpmudev/sui-icon"
import { Tooltip } from "@wpmudev/sui-tooltip"
import { Tag } from "@wpmudev/sui-tag"
import { CardContentProps } from "../template-card.types"

// Popover component
const TemplateCardContent: React.FC<CardContentProps> = ({
	id,
	title = "",
	description = "",
	tag,
	icon = "File",
	image = {},
	actions = [],
}) => {
	// Unique id
	const titleId = `${id}-label`
	const descriptionId = `${id}-description`

	const titleRef = useRef<HTMLDivElement | null>(null)
	const descriptionRef = useRef<HTMLDivElement | null>(null)
	const isTitleOverflow = useIsOverflowing(titleRef, 1, title)
	const isDescriptionOverflow = useIsOverflowing(descriptionRef, 2, description)

	const IconTag: React.ComponentType<IconProps> = Icons[icon]

	return (
		<>
			<div className="sui-template-card__hero">
				{tag && <Tag isSmall={true} isUppercase={true} {...tag} />}
				<div className="sui-template-card__hero-media">
					{IconTag && !image?.src && (
						<div className="sui-template-card__hero-icon">
							<IconTag size={"md"} />
						</div>
					)}
					{image?.src && <img src={image?.src} alt={image?.alt} />}
				</div>
				{actions && <div className="sui-template-card__actions">{actions}</div>}
			</div>
			{(title || description) && (
				<div className="sui-template-card__content">
					{title && isTitleOverflow ? (
						<Tooltip
							id={titleId}
							type="default"
							label={title}
							customWidth={216}
							className="sui-heading--h5 sui-template-card__heading"
						>
							{title}
						</Tooltip>
					) : (
						<h5
							id={titleId}
							ref={titleRef}
							className="sui-heading--h5 sui-template-card__heading"
						>
							{title}
						</h5>
					)}
					{description && isDescriptionOverflow ? (
						<Tooltip
							id={descriptionId}
							type="default"
							label={description}
							customWidth={216}
							className="sui-template-card__body"
						>
							{description}
						</Tooltip>
					) : (
						<p
							id={descriptionId}
							ref={descriptionRef}
							className="sui-template-card__body"
						>
							{description}
						</p>
					)}
				</div>
			)}
		</>
	)
}

// Publish required component.
export { TemplateCardContent }
