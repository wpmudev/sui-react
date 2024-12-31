import React, { Fragment } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"

import { SettingBlockOptionProps } from "../setting-block.types"

export const SettingBlockOption: React.FC<SettingBlockOptionProps> = ({
	title,
	description,
	className,
	children,
	actions,
	_htmlProps,
	_style = {},
}) => {
	const { suiInlineClassname } = useStyles(_style, className)

	// Define class name based on various conditions
	const classNames = generateCN(
		"sui-setting-block__option",
		{},
		suiInlineClassname,
	)

	return (
		<div className={classNames} {..._renderHTMLPropsSafely(_htmlProps)}>
			<div className="sui-setting-block__option-header">
				{!!title && (
					<div className="sui-setting-block__option-title-row">
						<h6 className="sui-setting-block__option-title">{title}</h6>
						<div className="sui-setting-block__option-actions">{actions}</div>
					</div>
				)}
				{!!description && (
					<p className="sui-setting-block__option-description">{description}</p>
				)}
			</div>
			{!!children && (
				<div className="sui-setting-block__option-body">{children}</div>
			)}
		</div>
	)
}
