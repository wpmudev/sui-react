import React from "react"
import {
	_renderRestPropsSafely,
	generateCN,
	isEmpty,
	isUndefined,
} from "@wpmudev/sui-utils"
import { TagProps } from "./tag.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

const Tag: React.FC<TagProps> = ({
	design,
	colorScheme,
	contentWrap = "default",
	className,
	isSmall = false,
	isUppercase = false,
	isDisabled = false,
	children,
	htmlProps = {},
	...props
}) => {
	const hasDesign = "outlined" === design
	const hasColor = !isUndefined(colorScheme) && !isEmpty(colorScheme)
	const hasStyle = ["multiline", "truncated"].includes(contentWrap)

	const { suiInlineClassname } = useStyles(props, className)

	// Define tag design
	// Limited to: solid (default) and outlined
	const classNames = generateCN(
		"sui-tag",
		{
			[`${design}-${colorScheme}`]: hasDesign && hasColor,
			[design as string]: hasDesign && !hasColor,
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
			className={classNames}
			{..._renderRestPropsSafely(htmlProps)}
			data-testid="tag"
		>
			<span className="sui-tag__label">{children}</span>
		</span>
	)
}

// Publish required component.
export { Tag }
