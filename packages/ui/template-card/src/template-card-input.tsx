import React, { forwardRef, useId, useCallback } from "react"

import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import { generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"
import { TemplateCardContent } from "./elements/card-content"
import { useTemplateCard } from "./template-card-context"
import { CardInputProps } from "./template-card.types"
// Popover component
const TemplateCardInput = forwardRef<HTMLInputElement, CardInputProps>(
	(
		{
			id,
			title,
			description,
			className = "",
			value = "",
			_htmlProps = {},
			_style = {},
			...props
		},
		ref,
	) => {
		const [isHovered, isFocused, methods] = useInteraction({})

		const uniqueId = useId()

		let uuid = `sui-card-template-${uniqueId}`

		// If value not provided add a unique one
		if (!value) {
			value = `value-${uniqueId}`
		}

		const { suiInlineClassname } = useStyles(_style, className)

		const { onChange, current, name } = useTemplateCard()

		// use ID from props list if exists
		if (!!id) {
			uuid = id
		}

		// Handle on change
		const handleOnChange = useCallback(() => {
			onChange(value)
		}, [onChange, value])

		const checked = value === current

		// Define input props
		const inputProps = {
			ref,
			id: uuid,
			type: "radio",
			name,
			value,
			className: "sui-template-card__input sui-screen-reader-only",
			checked,
			"aria-label": title || "radio input",
			onChange: handleOnChange,
			"aria-labelledby": `${uuid}-label`,
			...(description && { "aria-describedby": `${uuid}-description` }),
			..._renderHTMLPropsSafely(_htmlProps),
		}

		// Define container props
		const containerProps = {
			className: generateCN(
				"sui-template-card",
				{
					hover: isHovered && !checked,
					focus: isFocused,
					checked,
				},
				suiInlineClassname,
			),
		}

		return (
			<label
				{...containerProps}
				htmlFor={uuid}
				data-testid="radio"
				tabIndex={-1}
				{...methods}
				{..._renderHTMLPropsSafely(_htmlProps)}
			>
				<input {...inputProps} data-testid="radio-input" />
				<TemplateCardContent
					id={uuid}
					title={title}
					description={description}
					{...props}
				/>
			</label>
		)
	},
)

TemplateCardInput.displayName = "TemplateCardInput"

// Publish required component.
export { TemplateCardInput }
