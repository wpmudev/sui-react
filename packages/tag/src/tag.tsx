import React from "react"
import { generateCN, isEmpty, isUndefined } from "@wpmudev/react-utils"
import { TagProps } from "./tag.types"

const Tag: React.FC<TagProps> = ({
	design,
	color,
	style,
	className,
	isSmall = false,
	isUppercase = false,
	children,
	...props
}) => {
	const hasDesign = "outlined" === design
	const hasColor = !isUndefined(color) && !isEmpty(color)
	const hasStyle = ["multiline", "truncate"].includes(style)

	// Define tag design
	// Limited to: solid (default) and outlined
	const classNames = generateCN(
		"sui-tag",
		{
			[`${design}-${color}`]: hasDesign && hasColor,
			[design]: hasDesign && !hasColor,
			[color]: !hasDesign && hasColor,
			[style]: hasStyle,
			sm: isSmall,
			uppercase: isUppercase,
		},
		className,
	)

	return (
		<span className={classNames} {...props}>
			<span className="sui-tag__label">{children}</span>
		</span>
	)
}

// Publish required component.
export { Tag }
