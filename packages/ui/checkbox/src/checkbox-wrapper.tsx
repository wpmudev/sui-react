import React, { Children, cloneElement, ReactElement } from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { CheckboxProvider } from "./checkbox-context"
import { CheckboxGroupsProps } from "./checkbox.types"
import { useStyles } from "@wpmudev/sui-hooks"

const CheckBoxGroups: React.FC<CheckboxGroupsProps> = ({
	children,
	commonCheckboxProps = {},
	onChange = () => {},
	...styleProps
}) => {
	const { suiInlineClassname } = useStyles(styleProps)
	const className = generateCN("sui-checkbox-wrapper", {}, suiInlineClassname)

	return (
		<CheckboxProvider onChange={onChange}>
			<div className={className}>
				{Children.map(children, (child) => {
					return cloneElement(
						child as any,
						{
							commonCheckboxProps: {
								...commonCheckboxProps,
								// The common props from CheckboxGroup should override the common props from CheckBoxGroups
								...(child as ReactElement)?.props?.commonCheckboxProps,
							},
							_isMultiGroup: true,
						} as object,
					)
				})}
			</div>
		</CheckboxProvider>
	)
}

export { CheckBoxGroups }
