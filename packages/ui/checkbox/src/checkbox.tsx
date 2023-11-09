import React, {
	forwardRef,
	useCallback,
	useId,
	useEffect,
	useState,
} from "react"
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
			isSmall: propIsSmall = false,
			value = "",
			isIndeterminate = false,
			isChecked: propIsChecked = false,
			onChange: propOnchange = () => {},
		},
		ref,
	) => {
		// State to manage the checked state of the checkbox
		const [isChecked, setIsChecked] = useState<boolean>(propIsChecked ?? false)

		const { onChange, name, isSmall } = useCheckbox()

		// Set the initial state based on the default value
		useEffect(() => {
			setIsChecked((propIsChecked || isIndeterminate) ?? false)
		}, [propIsChecked, isIndeterminate, value])

		// Interaction methods for handling hover and focus
		const [isHovered, isFocused, methods] = useInteraction({})

		// Generate a dynamic ID for the checkbox
		let uuid = `sui-checkbox-${useId()}`

		// use ID from props list if exists
		if (!!id) {
			uuid = id
		}

		// handle on change
		const handleOnChange = useCallback(
			(e: React.ChangeEvent<HTMLInputElement>) => {
				setIsChecked(e.target.checked)

				if (!!onChange) {
					onChange(value)
					propOnchange(e)
				}
			},
			[onChange, propOnchange, value],
		)

		// Define input props
		const inputProps = {
			ref,
			id: uuid,
			type: "checkbox",
			name,
			value,
			className: "sui-screen-reader-only",
			checked: isChecked,
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
				checked: isChecked,
				sm: isSmall || propIsSmall,
			}),
		}

		return (
			<label
				{...containerProps}
				htmlFor={uuid}
				data-testid="checkbox"
				{...methods}
			>
				<input
					{...inputProps}
					aria-label={label || "checkbox"}
					data-testid="checkbox-input"
				/>
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
