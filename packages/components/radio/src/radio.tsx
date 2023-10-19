import React, { forwardRef, useCallback, useId } from "react"

import { Tag } from "@wpmudev/sui-tag"
import { useInteraction } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

import { RadioProps } from "./radio.types"
import { useRadio } from "./radio-context"

const Radio = forwardRef<HTMLInputElement, RadioProps>(
	(
		{ id, label, description = "", tag = "", value = "", isDisabled = false },
		ref,
	) => {
		// const [checked, setChecked] = useState(isChecked)
		const [isHovered, isFocused, methods] = useInteraction({})

		let uuid = `sui-radio-${useId()}`

		const {
			onChange,
			current,
			name,
			asBlock,
			isDisabled: isGroupDisabled,
		} = useRadio()

		// use ID from props list if exists
		if (!!id) {
			uuid = id
		}

		// handle on change
		const handleOnChange = useCallback(() => {
			onChange(value)
		}, [onChange, value])

		const checked = value === current

		const isRadioDisabled = isDisabled || isGroupDisabled

		// Define input props
		const inputProps = {
			ref,
			id: uuid,
			type: "radio",
			name,
			value,
			className: "sui-screen-reader-only",
			checked,
			disabled: isRadioDisabled,
			onChange: handleOnChange,
			"aria-labelledby": `${uuid}-label`,
			...(description && { "aria-describedby": `${uuid}-description` }),
		}

		// Define box props
		const boxProps = {
			className: "sui-radio__box",
			"aria-hidden": true,
		}

		// Define container props
		const containerProps = {
			className: generateCN("sui-radio", {
				// sm: isSmall,
				hover: isHovered && !checked,
				focus: isFocused && !checked,
				disabled: isRadioDisabled,
				block: asBlock,
				checked,
			}),
		}

		return (
			<label
				{...containerProps}
				htmlFor={uuid}
				data-testid="radio"
				{...methods}
			>
				<input {...inputProps} data-testid="radio-input" />
				<span {...boxProps} tabIndex={-1}>
					{checked && <span className="sui-radio__icon" />}
				</span>
				<span id={`${uuid}-label`} className="sui-radio__label">
					{label}
					{tag && (
						<Tag
							design="outlined"
							color="blue"
							isSmall={false}
							isDisabled={isRadioDisabled ?? false}
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
