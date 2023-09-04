import React, { Children, cloneElement, useCallback } from "react"

// Import required components
import { FieldListProps } from "./field-list.types"

// Build "field list" component
const FieldList: React.FC<FieldListProps> = ({
	label,
	helper,
	children,
	onToggle,
}) => {
	// Callback function to handle item toggling
	const onChangeItem = useCallback(
		(id: string, checked: boolean) => {
			onToggle(id, checked)
		},
		[onToggle],
	)

	return (
		// Render the FieldList component
		<div className="sui-field-list">
			{/* Render the label and helper elements if they are provided */}
			<div className="sui-field-list__row">
				{/* Render the label element if provided */}
				{label && (
					<h3 className="sui-heading sui-heading--h4 sui-field-list__title">
						{label}
					</h3>
				)}
				{/* Render the helper element if provided */}
				{helper && <p className="sui-field-list__helper">{helper}</p>}
			</div>
			{/* Render the list of FieldListItem components */}
			<div className="sui-field-list__items">
				{/* Map over and clone each child component with the onChangeItem callback */}
				{Children.map(children, (child: React.ReactNode) =>
					cloneElement(child, { onToggle: onChangeItem }),
				)}
			</div>
		</div>
	)
}

// Publish component(s)
export { FieldList }
