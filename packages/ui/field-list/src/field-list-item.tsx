import React, { useCallback, useId } from "react"
import { generateCN } from "@wpmudev/sui-utils"

// Import required components
import { Toggle } from "@wpmudev/sui-toggle"
import { FieldListItemProps } from "./field-list.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

const FieldListItem: React.FC<FieldListItemProps> = ({
	id,
	isChecked = false,
	children,
	hasToggle = true,
	actions,
	onToggle,
	style,
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

	const { suiInlineClassname } = useStyles(props)

	return (
		<div
			className={generateCN(
				"sui-field-list__item",
				{
					disabled: props?.isDisabled,
				},
				suiInlineClassname,
			)}
			style={style}
			data-testid="field-list-item"
		>
			{/* Display the item's content */}
			<div className="sui-field-list__item-label">{children}</div>
			{hasToggle && (
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
			)}
			{!!actions && (
				<div className="sui-field-list__item-actions">
					{/* Render the actions here */}
					{actions}
				</div>
			)}
		</div>
	)
}

// Publish component(s)
export { FieldListItem }
