import React, { Children, cloneElement, ReactElement, useCallback } from "react"

// Import required components
import { FieldListItemProps, FieldListProps } from "./field-list.types"

// Build "field list" component
const FieldList: React.FC<FieldListProps> = ({
	label,
	helper,
	children,
	onToggle = () => null,
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
		<div className="sui-field-list" data-testid="field-list">
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
				{Children.map(
					children as ReactElement,
					(child: ReactElement<FieldListItemProps>) =>
						cloneElement(child, {
							onToggle: onChangeItem,
						} as object),
				)}
			</div>
		</div>
	)
}

// Publish component(s)
export { FieldList }