import React, { useCallback, useId } from "react"

// Import required components
import { Toggle } from "@wpmudev/sui-toggle"
import { FieldListItemProps } from "./field-list.types"

const FieldListItem: React.FC<FieldListItemProps> = ({
	id,
	isChecked = false,
	children,
	onToggle,
	...props
}) => {
	// Generate a unique ID for the Toggle component
	let tempId = useId()
	tempId = `sui-field-list-${tempId}-${id}`

	// Handle the checkbox change event
	const onChange = useCallback(
		({ target }) => {
			// Call the provided onToggle callback with the item's ID and the new checked state
			if (onToggle) {
				onToggle(id, target?.checked)
			}
		},
		[id, onToggle],
	)

	return (
		<div className="sui-field-list__item">
			{/* Display the item's content */}
			<div className="sui-field-list__item-label">{children}</div>
			<div className="sui-field-list__item-checkbox">
				{/* Render the Toggle component with appropriate props */}
				<Toggle
					id={tempId}
					label={children}
					isLabelHidden={true}
					defaultValue={isChecked}
					onClick={onChange}
					{...props}
				/>
			</div>
		</div>
	)
}

// Publish component(s)
export { FieldListItem }
