import React, { forwardRef, useCallback, useId } from "react"

import { Tag } from "@wpmudev/sui-tag"
import { useInteraction } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

import { RadioProps } from "./radio.types"
import { useRadio } from "./radio-context"

const Radio = forwardRef<HTMLInputElement, RadioProps>(
	(
		{
			id,
			name = "",
			label,
			description = "",
			tag = "",
			defaultValue,
			value = "",
			isSmall = false,
			isDisabled = false,
		},
		ref,
	) => {
		// const [checked, setChecked] = useState(isChecked)
		const [isHovered, isFocused, methods] = useInteraction({})

		let uuid = `sui-radio-${useId()}`

		const { onChange, current, name, asBlock } = useRadio()

		// use ID from props list if exists
		if (!!id) {
			uuid = id
		}

		// handle on change
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
				// sm: isSmall,
				hover: isHovered,
				focus: isFocused,
				disabled: isDisabled,
				block: asBlock,
				checked,
			}),
		}

		return (
			<label {...containerProps} htmlFor={uuid} {...methods}>
				<input {...inputProps} />
				<span {...boxProps}>
					{checked && <span className="sui-radio__icon" />}
				</span>
				<span id={`${uuid}-label`} className="sui-radio__label">
					{label}
					{tag && (
						<Tag
							design="outlined"
							color="blue"
							isSmall={isSmall}
							isDisabled={isDisabled}
						>
							{tag}
						</Tag>
					)}
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
