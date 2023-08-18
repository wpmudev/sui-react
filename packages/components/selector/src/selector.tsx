import React, {
	forwardRef,
	useCallback,
	useEffect,
	useId,
	useState,
} from "react"
import { useInteraction } from "@wpmudev/sui-hooks"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { SelectorProps } from "./selector.types"
import { Option } from "./selector.option"

/**
 * Selector
 *
 * A React component used in forms when a user needs to select
 * multiple values from several options.
 *
 * @param {SelectorProps} props - Props for the Checkbox component.
 * @return {React.FC} The Checkbox component.
 */
const Selector: React.FC<SelectorProps> = forwardRef<HTMLInputElement, any>(
	(
		{
			label,
			defaultValue = false,
			isLabelHidden = false,
			alignment = "",
			variation = "",
			// icon = "",
			// iconImg = "",
			// title = "",
			// description = "",
			// imgUrl = "",
			isDisabled = false,
			onChange = () => {},
			...props
		}: SelectorProps,
		ref,
	) => {
		// State to manage the checked state of the checkbox
		const [isChecked, setIsChecked] = useState<boolean>(defaultValue ?? false)

		// Set the initial state based on the default value
		useEffect(() => {
			setIsChecked(defaultValue ?? false)
		}, [defaultValue])

		// Generate a dynamic ID for the checkbox
		const id = useId()

		// Interaction methods for handling hover and focus
		const [isHovered, isFocused, interactionMethods] = useInteraction({})

		// Callback function for handling checkbox state changes
		const handleOnChange = useCallback(
			(e) => {
				setIsChecked(!isChecked)

				if (!!onChange) {
					onChange(e)
				}
			},
			[isChecked, onChange],
		)

		// Props for the box element representing the checkbox
		const boxProps = {
			tabIndex: "-1",
			className: "sui-selector__box",
			"aria-hidden": true,
		}

		return (
			<label
				htmlFor={id}
				className={generateCN("sui-selector", {
					"hidden-label": isLabelHidden,
					disabled: isDisabled,
					hover: isHovered,
					focus: isFocused,
					checked: isChecked,
					[alignment]: !isEmpty(alignment ?? ""),
					[variation]: !isEmpty(variation ?? ""),
				})}
				{...interactionMethods}
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
				<Option
					{...props}
					isChecked={isChecked}
					alignment={alignment}
					variation={variation}
				/>
				{/* Render the label */}
				{/*{isLabelHidden ? (
					<span className="sui-screen-reader-only">{label}</span>
				) : (
					label
				)}*/}
			</label>
		)
	},
)

// Display name for the Checkbox component (used for debugging purposes)
Selector.displayName = "Checkbox"

export { Selector }
