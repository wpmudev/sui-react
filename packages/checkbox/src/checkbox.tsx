import React, {
	forwardRef,
	useCallback,
	useEffect,
	useId,
	useState,
} from "react"
import { useInteraction } from "@wpmudev/react-hooks"
import { generateCN } from "@wpmudev/react-utils"
import { Tick } from "./elements/tick"
import { CheckboxProps } from "./checkbox.types"

/**
 * Checkbox
 *
 * A React component used in forms when a user needs to select
 * multiple values from several options.
 *
 * @param {CheckboxProps} props - Props for the Checkbox component.
 * @return {React.FC} The Checkbox component.
 */
const Checkbox: React.FC<CheckboxProps> = forwardRef<
	HTMLInputElement,
	CheckboxProps
>(
	(
		{
			label,
			defaultValue = false,
			isLabelHidden = false,
			isSmall = false,
			isDisabled = false,
			...props
		}: CheckboxProps,
		ref,
	) => {
		// State to manage the checked state of the checkbox
		const [isChecked, setIsChecked] = useState<boolean>(defaultValue ?? false)

		// Set the initial state based on the default value
		useEffect(() => {
			setIsChecked(defaultValue)
		}, [defaultValue])

		// Generate a dynamic ID for the checkbox
		const id = useId()

		// Interaction methods for handling hover and focus
		const [isHovered, isFocused, interactionMethods] = useInteraction({})

		// Callback function for handling checkbox state changes
		const handleOnChange = useCallback(() => {
			setIsChecked(!isChecked)
		}, [isChecked])

		// Props for the box element representing the checkbox
		const boxProps = {
			tabIndex: "-1",
			className: "sui-checkbox__box",
			"aria-hidden": true,
		}

		return (
			<label
				htmlFor={id}
				className={generateCN("sui-checkbox", {
					"hidden-label": isLabelHidden,
					disabled: isDisabled,
					sm: isSmall,
					hover: isHovered,
					focus: isFocused,
					checked: isChecked,
				})}
				onMouseEnter={interactionMethods.onMouseEnter}
			>
				{/* Hidden input element to track the checkbox state */}
				<input
					ref={ref}
					id={id}
					type="checkbox"
					className="sui-screen-reader-only"
					disabled={isDisabled}
					onChange={handleOnChange}
				/>
				{/* Custom tick element for the checkbox */}
				<Tick {...boxProps} />
				{/* Render the label */}
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
