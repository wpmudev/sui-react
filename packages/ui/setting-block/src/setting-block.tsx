import React from "react"

import { Tag } from "@wpmudev/sui-tag"

import { generateCN } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"

import { SettingBlockProps } from "./setting-block.types"

// Build "setting-block" component
const SettingBlock: React.FC<SettingBlockProps> = ({
	title = "title",
	description,
	className,
	isPro = false,
	isFluid = false,
	children,
	actions,
}) => {
	// Interaction methods
	const [isHovered, isFocused, methods] = useInteraction({})

	// Define class name based on various conditions
	const classNames = generateCN(
		"sui-setting-block",
		{
			focus: isFocused,
			hover: isHovered && !isFocused,
			pro: isPro,
			fluid: isFluid,
		},
		className,
	)

	return (
		<div className={classNames} {...methods} data-testid="setting-block">
			<div className="sui-setting-block__header">
				<div className="sui-setting-block__info">
					<div className="sui-setting-block__info-title sui-heading--h5">
						{title}
						{isPro && (
							<Tag design="outlined" color="black" isSmall={true}>
								Pro
							</Tag>
						)}
					</div>
					<div className="sui-setting-block__info-desc">{description}</div>
				</div>
				{actions && <div className="sui-setting-block__actions">{actions}</div>}
			</div>
			{children && <div className="sui-setting-block__body">{children}</div>}
		</div>
	)
}

// Publish required component.
export { SettingBlock }
