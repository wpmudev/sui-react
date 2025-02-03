import React, { useId, useState } from "react"

import { useStyles } from "@wpmudev/sui-hooks"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"
import { generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"
import { IconProps } from "@wpmudev/sui-icon"
import { Tooltip } from "@wpmudev/sui-tooltip"

// Popover component
const TemplateCard: React.FC<> = ({
	id = "",
	title = "",
	description = "",
	tag,
	icon = "File",
	src,
	imgProps = {},
	className = "",
	actions = [],
	inputProps,
	selected = false,
	_htmlProps = {},
	_style = {},
}) => {
	const uniqueId = useId()

	const [isSelected, setIsSelected] = useState(selected || false)

	let uuid = `sui-card-template-${uniqueId}`
	const IconTag: React.ComponentType<IconProps> = Icons[icon as IconsNamesType]
	const { suiInlineClassname } = useStyles(_style, className ?? "")

	// class names
	const classNames = generateCN("sui-template-card", {}, suiInlineClassname)

	// use ID from props list if exists
	if (!!id) {
		uuid = id
	}

	const cardContent = (
		<>
			<div className="sui-template-card__hero">
				{tag && tag}
				<div className="sui-template-card__hero-media">
					{IconTag && (
						<div className="sui-template-card__hero-icon">
							<IconTag size={"md"} />
						</div>
					)}
					{src && <img src={src} alt="Card hero" {...imgProps} />}
				</div>
				{actions && <div className="sui-template-card__actions">{actions}</div>}
			</div>
			{(title || description) && (
				<div className="sui-template-card__content">
					{title && (
						<h3 className="sui-heading--h5 sui-template-card__heading">
							{title}
						</h3>
					)}
					{description && (
						<p className="sui-template-card__body">{description}</p>
					)}
				</div>
			)}
		</>
	)

	return inputProps ? (
		<label
			htmlFor={uuid}
			className={classNames}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<input
				id={uuid}
				className="sui-template-card__input sui-screen-reader-only"
				checked={isSelected}
				onChange={() => setIsSelected(!isSelected)}
				{...inputProps}
			/>
			{cardContent}
		</label>
	) : (
		<div
			id={uuid}
			className={classNames}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{cardContent}
		</div>
	)
}

// Publish required component.
export { TemplateCard }
