import React, { forwardRef, useCallback, useId, useState } from "react"
import { Tag } from "@wpmudev/sui-tag"
import { useInteraction } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

import { RadioProps } from "./radio.types"

const Radio = forwardRef<HTMLInputElement, RadioProps>(
	(
		{
			id,
			name,
			label,
			description = "",
			defaultValue,
			isChecked = false,
			isSmall = false,
			isDisabled = false,
			isBg = false,
		},
		ref,
	) => {
		const [checked, setChecked] = useState(isChecked)
		const [isHovered, isFocused, methods] = useInteraction({})

		let uuid = `sui-radio-${useId()}`

		// use ID from props list if exists
		if (!!id) {
			uuid = id
		}

		const handleOnChange = useCallback(() => {
			setChecked(!checked)
		}, [checked])

		// Define input props
		const inputProps = {
			ref,
			id: uuid,
			type: "radio",
			name: `${name}-name`,
			value: defaultValue,
			className: "sui-screen-reader-only",
			checked,
			disabled: isDisabled,
			onChange: handleOnChange,
			"aria-labelledby": `${uuid}-label`,
			...(description && { "aria-describedby": `${uuid}-description` }),
		}

		// Define box props
		const boxProps = {
			tabIndex: "-1",
			className: "sui-radio__box",
			"aria-hidden": true,
		}

		// Define container props
		const containerProps = {
			className: generateCN("sui-radio", {
				sm: isSmall,
				hover: isHovered,
				focus: isFocused,
				disabled: isDisabled,
				bg: isBg,
				checked,
			}),
			onMouseEnter: methods.onMouseEnter,
			onMouseDownCapture: methods.onMouseDownCapture,
			onMouseUpCapture: methods.onMouseUpCapture,
			onMouseLeave: methods.onMouseLeave,
			onBlurCapture: methods.onBlurCapture,
		}

		return (
			<label {...containerProps} htmlFor={uuid}>
				<input {...inputProps} />
				<span {...boxProps}>
					{checked && <span className="sui-radio__icon" />}
				</span>
				<span id={`${uuid}-label`} className="sui-radio__label">
					{label}
					<Tag design="outlined" color={checked ? "blue" : "black"}>
						Recommended
					</Tag>
				</span>
				{description && (
					<span id={`${uuid}-description`} className="sui-radio__description">
						{description}
					</span>
				)}
			</label>
		)
	},
)

Radio.displayName = "Radio"

export { Radio }
