import React, { HTMLProps } from "react"
import { generateCN, isEmpty, isUndefined } from "@wpmudev/react-utils"

interface TagPropTypes extends HTMLProps<HTMLSpanElement> {
	design: string
	color: string
	style: string
	className: string
	isSmall: boolean
	isUppercase: boolean
	children?: React.ReactNode
}

const Tag = ({
	design,
	color,
	style,
	className,
	isSmall = false,
	isUppercase = false,
	children,
	...props
}: TagPropTypes) => {
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
export { Tag, TagPropTypes }
