import React from "react"
import { generateCN, isEmpty, isUndefined } from "@wpmudev/sui-utils"
import { TagProps } from "./tag.types"

const Tag: React.FC<TagProps> = ({
	design,
	color,
	style,
	className,
	isSmall = false,
	isUppercase = false,
	isDisabled = false,
	children,
	...props
}) => {
	const hasDesign = "outlined" === design
	const hasColor = !isUndefined(color) && !isEmpty(color)
	const hasStyle = ["multiline", "truncated"].includes(style ?? "")

	// Define tag design
	// Limited to: solid (default) and outlined
	const classNames = generateCN(
		"sui-tag",
		{
			[`${design}-${color}`]: hasDesign && hasColor,
			[design as string]: hasDesign && !hasColor,
			[color as string]: !hasDesign && hasColor,
			[style as string]: hasStyle,
			sm: isSmall,
			uppercase: isUppercase,
			disabled: isDisabled,
		},
		className,
	)

	return (
		<span className={classNames} {...props} data-testid="tag">
			<span className="sui-tag__label">{children}</span>
		</span>
	)
}

// Publish required component.
export { Tag }
