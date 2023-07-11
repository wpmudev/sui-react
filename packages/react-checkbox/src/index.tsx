import React, {
	forwardRef,
	HTMLProps,
	useCallback,
	useId,
	useState,
} from "react"
import { useInteraction } from "@wpmudev/react-hooks"
import { generateCN } from "@wpmudev/react-utils"

import { Tick } from "./elements/tick"

interface CheckboxPropsTypes
	extends Omit<HTMLProps<HTMLInputElement>, "defaultValue"> {
	label?: string
	isLabelHidden?: boolean
	isSmall?: boolean
	isDisabled?: boolean
	defaultValue?: boolean
}

/**
 * Checkbox
 *
 * React component used in forms when a user needs to select
 * multiple values from several options.
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxPropsTypes>(
	(
		{
			label,
			defaultValue = false,
			isLabelHidden = false,
			isSmall = false,
			isDisabled = false,
			...props
		}: CheckboxPropsTypes,
		ref,
	) => {
		const [isChecked, setIsChecked] = useState<boolean>(defaultValue ?? false)

		// dynamic ID
		const id = useId()
		// interaction method
		const [isHovered, isFocused, interactionMethods] = useInteraction({})

		const handleOnChange = useCallback(() => {
			setIsChecked(!isChecked)
		}, [isChecked])

		// Define box props
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
				<input
					ref={ref}
					id={id}
					type="checkbox"
					className="sui-screen-reader-only"
					disabled={isDisabled}
					onChange={handleOnChange}
				/>
				<Tick {...boxProps} />
				{isLabelHidden ? (
					<span className="sui-screen-reader-only">{label}</span>
				) : (
					label
				)}
			</label>
		)
	},
)

Checkbox.displayName = "Checkbox"

export { Checkbox }
