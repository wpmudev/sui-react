import React, { useCallback, useId } from "react"
import { generateCN } from "@wpmudev/sui-utils"

// Import required components
import { Toggle } from "@wpmudev/sui-toggle"
import { FieldListItemProps } from "./field-list.types"
import { useDefaultChildren } from "@wpmudev/sui-hooks"

const FieldListItem: React.FC<FieldListItemProps> = ({
	id,
	isChecked = false,
	children,
	onToggle,
	...props
}) => {
	// Generate a unique ID for the Toggle component
	const uniqueId = useId()

	if (!id) {
		id = `sui-field-list-${uniqueId}`
	}

	// Default children content
	children = useDefaultChildren(children, "{field list item content}")

	// Handle the checkbox change event
	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			// Call the provided onToggle callback with the item's ID and the new checked state
			if (onToggle) {
				onToggle(id as string, e?.target?.checked)
			}
		},
		[id, onToggle],
	)

	return (
		<div
			className={generateCN("sui-field-list__item", {
				disabled: props?.isDisabled,
			})}
			data-testid="field-list-item"
		>
			{/* Display the item's content */}
			<div className="sui-field-list__item-label">{children}</div>
			<div className="sui-field-list__item-checkbox">
				{/* Render the Toggle component with appropriate props */}
				<Toggle
					id={id}
					label={children}
					isLabelHidden={true}
					defaultValue={isChecked ?? false}
					onClick={onChange}
					{...props}
				/>
			</div>
		</div>
	)
}

// Publish component(s)
export { FieldListItem }
