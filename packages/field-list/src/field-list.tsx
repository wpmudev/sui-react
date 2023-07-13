import React, { Children } from "react"
import { isUndefined, isEmpty } from "@wpmudev/react-utils"

// Import required components
import { Toggle } from "@wpmudev/react-toggle"
import { FieldListProps } from "./field-list.types"

// Build "field list" component
const FieldList: React.FC<FieldListProps> = ({ label, helper, children }) => {
	// Props validation
	const hasLabel: boolean = !isUndefined(label) && !isEmpty(label)
	const hasHelper: boolean = !isUndefined(helper) && !isEmpty(helper)

	return (
		<div className="sui-field-list">
			{(hasLabel || hasHelper) && (
				<div className="sui-field-list__row">
					{hasLabel && (
						<h3 className="sui-heading sui-heading--h4 sui-field-list__title">
							{label}
						</h3>
					)}
					{hasHelper && <p className="sui-field-list__helper">{helper}</p>}
				</div>
			)}
			{Children.map(
				children,
				({ props, ...child }: Record<string, any>[], index: number) => (
					<div
						id={`${props?.id}--${index}`}
						key={index}
						className="sui-field-list__row sui-field-list__row-inline"
						{...props}
					>
						{props?.label}
						<Toggle id={props.id} label={props.label} isLabelHidden={true} />
					</div>
				),
			)}
		</div>
	)
}

// Publish component(s)
export { FieldList }
