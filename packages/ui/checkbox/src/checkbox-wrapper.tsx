import React, { Children, cloneElement } from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { CheckboxProvider } from "./checkbox-context"

const CheckBoxGroups = ({
	isDisabled = false,
	children,
	commonCheckboxProps = {},
	onChange = () => {},
}) => {
	const className = generateCN("sui-checkbox-wrapper", {})

	return (
		<CheckboxProvider onChange={onChange}>
			<div className={className}>
				{Children.map(children, (child) => {
					return cloneElement(
						child as any,
						{
							commonCheckboxProps,
							_isMultiGroup: true,
							isDisabled,
						} as object,
					)
				})}
			</div>
		</CheckboxProvider>
	)
}

export { CheckBoxGroups }
