import React, { useEffect, useState } from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { Provider } from "./radio-context"
import { RadioGroupProps, RadioValueType } from "./radio.types"

const RadioGroup = ({
	isInline = true,
	children,
	name = "",
	defaultValue = "",
	asBlock = false,
	isSmall = false,
	isDisabled = false,
	onChange = () => {},
}: RadioGroupProps) => {
	const [current, setCurrent] = useState<RadioValueType>(defaultValue)

	// update state when default value get changed
	useEffect(() => {
		setCurrent(defaultValue)
	}, [defaultValue])

	const className = generateCN("sui-radio-group", {
		inline: isInline,
		sm: isSmall,
	})

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
			}}
		>
			<div className={className} role="radiogroup" data-testid="radio-group">
				{children}
			</div>
		</Provider>
	)
}

export { RadioGroup }