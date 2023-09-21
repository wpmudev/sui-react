import React, { forwardRef, useCallback, useId, useState } from "react"

import { useInteraction } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

import { RadioProps } from "./radio.types"

const Radio = forwardRef<HTMLInputElement, RadioProps>(
	(
		{
			id,
			name,
			label,
			defaultValue,
			isChecked = false,
			isSmall = false,
			isDisabled = false,
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
			}),
			onMouseEnter: methods.onMouseEnter,
			onMouseDownCapture: methods.onMouseDownCapture,
			onMouseUpCapture: methods.onMouseUpCapture,
			onMouseLeave: methods.onMouseLeave,
			onBlur: methods.onBlur,
		}

		return (
			<label {...containerProps} htmlFor={uuid}>
				<input {...inputProps} />
				<span {...boxProps}>
					{checked && <span className="sui-radio__icon" />}
				</span>
				<span id={`${uuid}-label`}>{label}</span>
			</label>
		)
	},
)

Radio.displayName = "Radio"

export { Radio }
