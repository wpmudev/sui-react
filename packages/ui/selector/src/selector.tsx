import React, { forwardRef, useCallback, useId } from "react"

import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import { _renderHTMLPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"

import { SelectorOption } from "./selector.option"
import { SelectorProps } from "./selector.types"

const Selector: React.FC<SelectorProps> = forwardRef<
	HTMLInputElement,
	SelectorProps
>(
	(
		{
			id,
			label,
			name = "",
			value = "",
			isChecked = false,
			isDisabled = false,
			isPro = false,
			alignment = "center",
			variation = "default",
			onChange = () => {},
			onRemove = () => {},
			allowRemove = false,
			tag,
			iconOrBrandUrl,
			imageUrl,
			title = "title",
			description,
			tagColor = "default",
			isFluid = false,
			_style = {},
			_htmlProps = {},
		}: SelectorProps,
		ref,
	) => {
		// Generate a dynamic ID for the checkbox
		const generatedId = useId()
		const uniqueId = id || generatedId

		// Interaction methods for handling hover and focus
		const [isHovered, isFocused, interactionMethods] = useInteraction({})

		// Callback function to handle onChange event of the radio input
		const handleOnChange = useCallback(
			(e: React.ChangeEvent<HTMLInputElement>) => {
				onChange(e.target.checked, value, name)
			},
			[name, onChange, value],
		)

		const { suiInlineClassname } = useStyles(_style)

		return (
			<label
				htmlFor={uniqueId}
				tabIndex={isDisabled ? -1 : 0}
				data-testid="selector"
				className={generateCN(
					"sui-selector",
					{
						disabled: isDisabled || isPro,
						hover: isHovered,
						focus: isFocused,
						checked: isChecked,
						fluid: isFluid,
						[alignment]: !isEmpty(alignment ?? ""),
						[variation]: !isEmpty(variation ?? ""),
					},
					suiInlineClassname,
				)}
				{...interactionMethods} // Spread interaction methods onto the label element
				{..._renderHTMLPropsSafely(_htmlProps)}
			>
				{/* Hidden radio input */}
				<input
					ref={ref}
					id={uniqueId}
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
				{label && (
					<span className="sui-screen-reader-only" id={`${uniqueId}-label`}>
						{label}
					</span>
				)}
			</label>
		)
	},
)

// Display name for the Selector component (used for debugging purposes)
Selector.displayName = "Selector"

export { Selector }
