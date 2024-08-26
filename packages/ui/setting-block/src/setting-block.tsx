import React from "react"

import { Tag } from "@wpmudev/sui-tag"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { useInteraction, useStyles } from "@wpmudev/sui-hooks"

import { SettingBlockProps } from "./setting-block.types"

// Build "setting-block" component
const SettingBlock: React.FC<SettingBlockProps> = ({
	title,
	description,
	className,
	isPro = false,
	isFluid = false,
	children,
	actions,
	_htmlProps,
	_style = {},
}) => {
	// Interaction methods
	const [isHovered, isFocused, methods] = useInteraction({})

	const { suiInlineClassname } = useStyles(_style, className)

	// Define class name based on various conditions
	const classNames = generateCN(
		"sui-setting-block",
		{
			focus: isFocused,
			hover: isHovered && !isFocused,
			pro: isPro,
			fluid: isFluid,
			"no-info": !title && !description,
		},
		suiInlineClassname,
	)

	return (
		<div
			className={classNames}
			{...methods}
			data-testid="setting-block"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div className="sui-setting-block__header">
				{(!!title || !!description) && (
					<div className="sui-setting-block__info">
						{!!title && (
							<div className="sui-setting-block__info-title sui-heading--h5">
								{title}
								{isPro && (
									<Tag design="outlined" colorScheme="black" isSmall={true}>
										Pro
									</Tag>
								)}
							</div>
						)}
						{!!description && (
							<div className="sui-setting-block__info-desc">{description}</div>
						)}
					</div>
				)}
				{actions && <div className="sui-setting-block__actions">{actions}</div>}
			</div>
			{children && <div className="sui-setting-block__body">{children}</div>}
		</div>
	)
}

// Publish required component.
export { SettingBlock }
