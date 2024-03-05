import React, { useState, useRef, useEffect, useId, LegacyRef } from "react"
import { Input } from "@wpmudev/sui-input"
import { useStyles, useStylesTypes } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

interface InputWithAutoCompleteProps extends useStylesTypes {
	id?: string
	expanded?: boolean
	controlRef: HTMLDivElement | HTMLInputElement | null
	isSmall?: boolean
	selected?: {
		label: string
	}
	dropdownItems?: Record<string, any>[]
	onChange?: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void
	onValueChange: (val: string) => void
	onClick?: () => void
	onEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void
	ref?: LegacyRef<HTMLInputElement>
	interactionMethods: object
}

const InputWithAutoComplete: React.FC<InputWithAutoCompleteProps> = ({
	id,
	controlRef,
	expanded = false,
	selected = { label: "" },
	dropdownItems = [],
	onValueChange = () => {},
	onChange = () => {},
	onEvent = () => {},
	onClick = () => {},
	interactionMethods,
	...props
}) => {
	const { _htmlProps } = props

	const { suiInlineClassname } = useStyles(props)
	const generatedId = useId()

	// Random search ID
	const inputId = id || `sui-search-${generatedId}`

	const [value, setValue] = useState<string>(selected?.label || "")

	// Make options searchable if input value is above min chars required for search
	const isFiltered = value.length >= 1

	// Filter options list based on the searched value
	const filteredOptions = React.useMemo(() => {
		return isFiltered
			? dropdownItems?.filter(({ label }) => label.startsWith(value))
			: dropdownItems
	}, [dropdownItems, isFiltered, value])

	// Handle when input value changes
	const onInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
	) => {
		if (typeof e !== "string") {
			const val = e.target.value

			setValue(val)
			onValueChange(val)
			if (onChange) {
				onChange(e)
			}
		}
	}

	// Select first option when right arrow key is pressed.
	const onInputKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		if (e.code === "ArrowRight") {
			setValue(filteredOptions[0]?.label || "")
			if (onEvent) {
				onEvent(filteredOptions[0]?.id)
			}
		}
	}

	useEffect(() => {
		setValue(selected?.label || "")
	}, [selected])

	return (
		<Input
			ref={controlRef}
			className={generateCN("sui-select__input", {}, suiInlineClassname)}
			id={inputId}
			icon="Search"
			iconPosition="start"
			onChange={onInputChange}
			defaultValue={value}
			allowClear={false}
			hint={(isFiltered && filteredOptions[0]?.label) || ""}
			disableInteractions={true}
			_htmlProps={{
				onKeyDown: onInputKeyDown,
				onClick,
				..._htmlProps,
				...interactionMethods,
			}}
		/>
	)
}

export { InputWithAutoComplete }
