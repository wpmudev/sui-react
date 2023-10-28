import React, { Children, ReactNode, isValidElement } from "react"

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
				{Children.map(children, (child) => {
					if (isValidElement(child) && child.type === CheckboxGroup) {
						// If the child is a CheckboxGroup, add an onChange prop
						return (
							<li className="sui-checkbox-group__item">
								{React.cloneElement(child, {
									onChange,
								})}
							</li>
						)
					}
					return <li className="sui-checkbox-group__item">{child}</li>
				})}
			</ul>
		</Provider>
	)
}

export { CheckboxGroup }
