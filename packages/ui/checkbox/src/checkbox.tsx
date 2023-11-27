import React, { useEffect, useId } from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"

import { Indeterminate } from "./elements/indeterminate"
import { Tick } from "./elements/tick"
import { useCheckbox } from "./checkbox-context"
import { CheckboxProps } from "./checkbox.types"

const Checkbox = ({
	id,
	groupId = "",
	name,
	value = "",
	label,
	isLabelHidden = false,
	isChecked = false,
	isDisabled = false,
	isSmall = false,
	isIndeterminate = false,
	onChange: propOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {},
}: CheckboxProps) => {
	// Context for checkbox
	const ctx = useCheckbox()
	const [isHovered, isFocused, methods] = useInteraction({})

	// Generate a dynamic ID for the checkbox
	let uuid = `sui-checkbox-${useId()}`

	// use ID from props list if it exists
	if (!!id) {
		uuid = id
	}

	useEffect(() => {
		// Add the checkbox details to the context list on component mount
		ctx?.addToList(id, groupId, isChecked)
	}, [])

	// Define input props
	const inputProps = {
		id: uuid,
		type: "checkbox",
		name,
		value,
		className: "sui-screen-reader-only",
		checked: isChecked,
		disabled: isDisabled,
		onChange: (e) => {
			// Invoke context onChange method if available
			if (!!ctx?.onChange) {
				ctx.onChange(uuid, e.target.checked, groupId)
			}

			// Invoke prop onChange method
			if (!!propOnchange) {
				propOnchange(e)
			}
		},
		"aria-labelledby": `${uuid}-label`,
	}

	// Define container props
	const containerProps = {
		className: generateCN("sui-checkbox", {
			"hidden-label": isLabelHidden,
			indeterminate: isIndeterminate,
			hover: isHovered,
			focus: isFocused,
			disabled: isDisabled,
			checked: isChecked,
			sm: isSmall,
		}),
		...methods,
	}

	// Props for the box element representing the checkbox
	const boxProps = {
		className: "sui-checkbox__box",
		"aria-hidden": true,
	}

	return (
		// Checkbox label container
		<label {...containerProps} htmlFor={uuid} data-testid="checkbox">
			{/* Checkbox input */}
			<input
				{...inputProps}
				aria-label={label || "checkbox"}
				data-testid="checkbox-input"
			/>
			{/* Render Indeterminate or Tick component based on isIndeterminate */}
			{isIndeterminate ? (
				<Indeterminate {...boxProps} />
			) : (
				<Tick {...boxProps} tabIndex={-1} />
			)}
			{/* Render label or hidden span based on isLabelHidden */}
			{isLabelHidden ? (
				<span className="sui-screen-reader-only">{label}</span>
			) : (
				label
			)}
		</label>
	)
}

export { Checkbox }
