import React, { useEffect, useState } from "react"

import { generateCN } from "@wpmudev/sui-utils"

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
	...props
}: RadioGroupProps) => {
	const [current, setCurrent] = useState<RadioValueType>(defaultValue)

	// update state when default value get changed
	useEffect(() => {
		setCurrent(defaultValue)
	}, [defaultValue])

	// Default children content
	children = useDefaultChildren(children, "{Radio Group Children Content}")

	const { suiInlineClassname } = useStyles(props, className)

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
			>
				{children}
			</div>
		</Provider>
	)
}

export { RadioGroup }
