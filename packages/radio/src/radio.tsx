import React, { forwardRef, useCallback, useId, useState } from "react"

import { useInteraction } from "@wpmudev/react-hooks"
import { generateCN } from "@wpmudev/react-utils"

import { RadioProps } from "./radio.types"

const Radio = forwardRef<HTMLInputElement, RadioProps>(
	(
		{
			id,
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
			name: `${id}-name`,
			value: defaultValue,
			className: "sui-screen-reader-only",
			checked,
			disabled: isDisabled,
			onChange: handleOnChange,
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
				checked,
				sm: isSmall,
				hover: isHovered,
				focus: isFocused,
				disabled: isDisabled,
			}),
			onMouseEnter: methods.onMouseEnter,
			onMouseDownCapture: methods.onMouseDownCapture,
			onMouseUpCapture: methods.onMouseUpCapture,
			onMouseLeave: methods.onMouseLeave,
			onBlurCapture: methods.onBlurCapture,
		}

		return (
			<label {...containerProps} htmlFor={id}>
				<input {...inputProps} />
				<span {...boxProps}>
					{checked && <span className="sui-radio__icon" />}
				</span>
				{label}
			</label>
		)
	},
)

Radio.displayName = "Radio"

export { Radio }
