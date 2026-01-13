import React, { useId } from "react"
import {
	_renderHTMLPropsSafely,
	generateCN,
	isEmpty,
	isUndefined,
} from "@wpmudev/sui-utils"
import { TagProps } from "./tag.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"
import { Close } from "@wpmudev/sui-icons"

const Tag: React.FC<TagProps> = ({
	id,
	design,
	colorScheme,
	contentWrap = "default",
	className,
	isSmall = false,
	isUppercase = false,
	isDisabled = false,
	isDismissable = false,
	children,
	onDismiss = () => {},
	_htmlProps = {},
	_style = {},
}) => {
	const generatedId = useId()
	const tagId = id || `sui_tag_${generatedId}`

	const hasDesign = "outlined" === design
	const hasColor = !isUndefined(colorScheme) && !isEmpty(colorScheme)
	const hasStyle = ["multiline", "truncated"].includes(contentWrap)

	const { suiInlineClassname } = useStyles(_style, className)

	// Define tag design
	// Limited to: solid (default) and outlined
	const classNames = generateCN(
		"sui-tag",
		{
			[`${design}-${colorScheme}`]: hasDesign && hasColor,
			[design as string]: hasDesign,
			[colorScheme as string]: !hasDesign && hasColor,
			[contentWrap as string]: hasStyle,
			sm: isSmall,
			uppercase: isUppercase,
			disabled: isDisabled,
		},
		suiInlineClassname,
	)

	// Default children content
	children = useDefaultChildren(children, "{tag content}")

	return (
		<span
			id={tagId}
			className={classNames}
			{..._renderHTMLPropsSafely(_htmlProps)}
			data-testid="tag"
		>
			<div className="sui-tag__wrapper">
				<span className="sui-tag__label">{children}</span>
				{isDismissable && (
					<button className="sui-tag__cta" onClick={onDismiss}>
						<span aria-hidden="true">
							<Close size="xs" />
						</span>
						<span className="sui-screen-reader-only" tabIndex={-1}>
							Dismiss
						</span>
					</button>
				)}
			</div>
		</span>
	)
}

// Publish required component.
export { Tag }
