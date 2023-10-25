import React, { forwardRef, useCallback, useId } from "react"

import { useInteraction } from "@wpmudev/sui-hooks"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"

import { SelectorOption } from "./selector.option"
import { SelectorProps } from "./selector.types"

const Selector: React.FC<SelectorProps> = forwardRef<
	HTMLInputElement,
	SelectorProps
>(
	(
		{
			label,
			name,
			value = "",
			isChecked = false,
			isDisabled = false,
			isPro = false,
			defaultValue = "",
			alignment = "center",
			variation = "default",
			onChange = () => {},
			onRemove = () => {},
			allowRemove = false,
			tag,
			iconOrBrandUrl,
			imageUrl,
			title,
			description,
			tagColor = "default",
			...props
		}: SelectorProps,
		ref,
	) => {
		// Generate a dynamic ID for the checkbox
		const id = useId()

		// Interaction methods for handling hover and focus
		const [isHovered, isFocused, interactionMethods] = useInteraction({})

		// Callback function to handle onChange event of the radio input
		const handleOnChange = useCallback(
			(e: React.ChangeEvent<HTMLInputElement>) => {
				onChange(e.target.checked, value, name)
			},
			[name, onChange, value],
		)

		return (
			<label
				htmlFor={id}
				tabIndex={isDisabled ? -1 : 0}
				data-testid="selector"
				className={generateCN("sui-selector", {
					disabled: isDisabled || isPro,
					hover: isHovered,
					focus: isFocused,
					checked: isChecked,
					[alignment]: !isEmpty(alignment ?? ""),
					[variation]: !isEmpty(variation ?? ""),
				})}
				{...interactionMethods} // Spread interaction methods onto the label element
			>
				{/* Hidden radio input */}
				<input
					ref={ref}
					id={id}
					name={name}
					type="radio"
					tabIndex={isDisabled ? -1 : 0}
					checked={isChecked}
					aria-checked={isChecked}
					className="sui-screen-reader-only" // Hide the input element from the screen
					disabled={isDisabled}
					onChange={handleOnChange}
					data-testid="selector-input"
				/>
				<SelectorOption
					{...props}
					tagColor={tagColor}
					allowRemove={allowRemove}
					onRemove={onRemove}
					tag={tag}
					iconOrBrandUrl={iconOrBrandUrl}
					imageUrl={imageUrl}
					isChecked={isChecked}
					title={title}
					description={description}
					alignment={alignment ?? "left"}
					variation={variation ?? "default"}
					isPro={isPro}
				/>
				{label && <span className="sui-screen-reader-only">{label}</span>}
			</label>
		)
	},
)

// Display name for the Selector component (used for debugging purposes)
Selector.displayName = "Selector"

export { Selector }
