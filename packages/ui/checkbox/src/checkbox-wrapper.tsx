import React, { Children, cloneElement, ReactElement, useId } from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { CheckboxProvider } from "./checkbox-context"
import { CheckboxGroupsProps } from "./checkbox.types"
import { useStyles } from "@wpmudev/sui-hooks"

const CheckBoxGroups: React.FC<CheckboxGroupsProps> = ({
	id,
	children,
	commonCheckboxProps = {},
	onChange = () => {},
	_style,
}) => {
	const generatedId = useId()
	const checkboxGroupsId = id || `sui_checkbox_groups_${generatedId}`
	const { suiInlineClassname } = useStyles(_style)
	const className = generateCN("sui-checkbox-wrapper", {}, suiInlineClassname)

	return (
		<CheckboxProvider onChange={onChange}>
			<div id={checkboxGroupsId} className={className}>
				{Children.map(children, (child, index) => {
					return cloneElement(
						child as any,
						{
							commonCheckboxProps: {
								...commonCheckboxProps,
								// The common props from CheckboxGroup should override the common props from CheckBoxGroups
								...(child as ReactElement)?.props?.commonCheckboxProps,
							},
							_isMultiGroup: true,
							key: `checkbox-wrapper-child-${index}`,
						} as object,
					)
				})}
			</div>
		</CheckboxProvider>
	)
}

export { CheckBoxGroups }
