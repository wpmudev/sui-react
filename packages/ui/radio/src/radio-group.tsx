import React, { useEffect, useState } from "react"

import { _renderRestPropsSafely, generateCN } from "@wpmudev/sui-utils"

import { Provider } from "./radio-context"
import { RadioGroupProps, RadioValueType } from "./radio.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

const RadioGroup = ({
	isInline = true,
	children,
	name = "",
	defaultValue = "",
	asBlock = false,
	isSmall = false,
	isDisabled = false,
	onChange = () => {},
	className = "",
	htmlProps = {},
	_style,
	...props
}: RadioGroupProps) => {
	const [current, setCurrent] = useState<RadioValueType>(defaultValue)

	// update state when default value get changed
	useEffect(() => {
		setCurrent(defaultValue)
	}, [defaultValue])

	// Default children content
	children = useDefaultChildren(children, "{Radio Group Children Content}")

	const { suiInlineClassname } = useStyles(_style, className)

	// radio group classname
	const radioClassNames = generateCN(
		"sui-radio-group",
		{
			inline: isInline,
			sm: isSmall,
		},
		suiInlineClassname,
	)

	return (
		<Provider
			value={{
				name,
				current,
				setCurrent,
				defaultValue,
				asBlock,
				isDisabled,
				onChange,
				isSmall,
			}}
		>
			<div
				className={radioClassNames}
				role="radiogroup"
				data-testid="radio-group"
				{..._renderRestPropsSafely(htmlProps)}
			>
				{children}
			</div>
		</Provider>
	)
}

export { RadioGroup }
