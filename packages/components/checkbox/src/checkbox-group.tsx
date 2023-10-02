import React, { Children, ReactNode } from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { Provider } from "./checkbox-context"
import { CheckboxGroupProps } from "./checkbox.types"

const CheckboxGroup = ({
	isInline = true,
	children,
	name = "",
	isSmall = false,
	isDisabled = false,
	onChange = () => {},
}: CheckboxGroupProps) => {
	const className = generateCN("sui-checkbox-group", {
		inline: isInline,
		sm: isSmall,
	})

	return (
		<Provider
			value={{
				name,
				isDisabled,
				onChange,
				isSmall,
			}}
		>
			<ul className={className}>
				{Children.map(children, (child: ReactNode) => (
					<li className="sui-checkbox-group__item">{child}</li>
				))}
			</ul>
		</Provider>
	)
}

export { CheckboxGroup }
