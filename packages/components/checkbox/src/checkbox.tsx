import React, { forwardRef, useCallback, useId } from "react"
import { useInteraction } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"
import { Tick } from "./elements/tick"
import { Indeterminate } from "./elements/indeterminate"

import { CheckboxProps } from "./checkbox.types"
import { useCheckbox } from "./checkbox-context"

/**
 * Checkbox
 *
 * A React component used in forms when a user needs to select
 * multiple values from several options.
 *
 * @param {CheckboxProps} props - Props for the Checkbox component.
 * @return {React.FC} The Checkbox component.
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{
			id,
			label,
			isLabelHidden = false,
			isDisabled = false,
			value = "",
			isIndeterminate = false,
		},
		ref,
	) => {
		// Interaction methods for handling hover and focus
		const [isHovered, isFocused, methods] = useInteraction({})

		// Generate a dynamic ID for the checkbox
		let uuid = `sui-checkbox-${useId()}`

		const { onChange, current, name, setCurrent } = useCheckbox()

		// use ID from props list if exists
		if (!!id) {
			uuid = id
		}

		// handle on change
		// Handle checkbox change
		const handleOnChange = useCallback(
			(e: React.ChangeEvent<HTMLInputElement>) => {
				const checked = e.target.checked

				setCurrent((prevCurrent) => {
					const updatedCurrent = [...prevCurrent]
					const index = updatedCurrent.indexOf(value)

					if (checked && index === -1) {
						updatedCurrent.push(value)
					} else if (!checked && index !== -1) {
						updatedCurrent.splice(index, 1)
					}

					onChange(updatedCurrent)
					return updatedCurrent
				})
			},
			[value, onChange, setCurrent],
		)

		const checked = current?.includes(value)

		// Define input props
		const inputProps = {
			ref,
			id: uuid,
			type: "checkbox",
			name,
			value,
			className: "sui-screen-reader-only",
			checked: checked || isIndeterminate,
			disabled: isDisabled,
			onChange: handleOnChange,
			"aria-labelledby": `${uuid}-label`,
		}

		// Props for the box element representing the checkbox
		const boxProps = {
			className: "sui-checkbox__box",
			"aria-hidden": true,
		}

		// Define container props
		const containerProps = {
			className: generateCN("sui-checkbox", {
				"hidden-label": isLabelHidden,
				indeterminate: isIndeterminate,
				hover: isHovered,
				focus: isFocused,
				disabled: isDisabled,
				checked: checked || isIndeterminate,
			}),
		}

		return (
			<label
				{...containerProps}
				htmlFor={uuid}
				data-testid="checkbox"
				{...methods}
			>
				<input {...inputProps} data-testid="checkbox-input" />
				{isIndeterminate ? (
					<Indeterminate {...boxProps} />
				) : (
					<Tick {...boxProps} tabIndex={-1} />
				)}
				{isLabelHidden ? (
					<span className="sui-screen-reader-only">{label}</span>
				) : (
					label
				)}
			</label>
		)
	},
)

// Display name for the Checkbox component (used for debugging purposes)
Checkbox.displayName = "Checkbox"

export { Checkbox }
