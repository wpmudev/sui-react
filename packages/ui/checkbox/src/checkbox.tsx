import React, { useEffect, useId } from "react"

import { generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"
import { useInteraction, useStyles } from "@wpmudev/sui-hooks"

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
	isError = false,
	isIndeterminate = false,
	onChange: propOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {},
	validate,
	validateOnMount,
	resetValidation,
	_htmlProps = {},
	_style,
}: CheckboxProps) => {
	// Context for checkbox
	const ctx = useCheckbox()
	const [isHovered, isFocused, methods] = useInteraction({})
	const { suiInlineClassname } = useStyles(_style)

	// Generate a dynamic ID for the checkbox
	let uuid = `sui-checkbox-${useId()}`

	// use ID from props list if it exists
	if (!!id) {
		uuid = id
	}

	useEffect(() => {
		// Add the checkbox details to the context list on component mount
		ctx?.addToList(id as string, isChecked, groupId)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, groupId, isChecked])

	// Define input props
	const inputProps = {
		id: uuid,
		type: "checkbox",
		name,
		value,
		className: "sui-accessible-cta sui-checkbox__input",
		checked: isChecked,
		disabled: isDisabled,
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
			// Invoke context onChange method if available
			if (!!ctx?.onChange) {
				ctx.onChange(uuid, e.target.checked, groupId)

				// validation for a single checkbox
				validate?.(e.target.checked)
			}

			// Invoke prop onChange method
			if (!!propOnchange) {
				propOnchange(e)
			}
		},
		"aria-labelledby": `${uuid}-label`,
		..._htmlProps,
	}

	useEffect(() => {
		if (validateOnMount) {
			validate?.(isChecked)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Define container props
	const containerProps = {
		className: generateCN(
			"sui-checkbox",
			{
				"hidden-label": isLabelHidden,
				indeterminate: isIndeterminate,
				hover: isHovered,
				focus: isFocused,
				disabled: isDisabled,
				checked: isChecked,
				sm: isSmall,
				error: isError,
			},
			suiInlineClassname,
		),
		...methods,
	}

	// Props for the box element representing the checkbox
	const boxProps = {
		className: "sui-checkbox__box",
		"aria-hidden": true,
	}

	return (
		// Checkbox label container
		<label
			{...containerProps}
			id={`${uuid}-label`}
			htmlFor={uuid}
			tabIndex={-1}
			data-testid="checkbox"
		>
			{/* Checkbox input */}
			<input
				aria-label={(typeof label === "string" && label) || "checkbox"}
				{..._renderHTMLPropsSafely(inputProps)}
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
				<span className="sui-checkbox__label">{label}</span>
			)}
		</label>
	)
}

export { Checkbox }
