import React, { useState, useRef, useEffect, useCallback, useId } from "react"
import { Input } from "@wpmudev/sui-input"

interface InputWithAutoCompleteProps {
	id: string
	expanded?: boolean
	selected?: {
		label: string
	}
	dropdownItems?: Record<string, any>[]
	dropdownToggle?: () => void
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	onEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputWithAutoComplete: React.FC<InputWithAutoCompleteProps> = ({
	id,
	expanded = false,
	selected = { label: "" },
	dropdownItems = [],
	dropdownToggle,
	onChange = () => {},
	onEvent = () => {},
	...props
}) => {
	// Random search ID
	const inputId = id || `sui-search-${useId()}`

	const [value, setValue] = useState<string>(selected.label || "")

	// Search input ref
	const inputRef = useRef<HTMLInputElement | null>(null)

	// Make options searchable if input value is above min chars required for search
	const isFiltered = value.length >= 1

	// Filter options list based on the searched value
	const filteredOptions = React.useMemo(() => {
		return isFiltered
			? dropdownItems.filter(({ label }) => label.startsWith(value))
			: dropdownItems
	}, [dropdownItems, isFiltered, value])

	// Handle when input value changes
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value
		setValue(val)
		if (onChange) {
			onChange(e)
		}
	}

	// Select first option when right arrow key is pressed.
	const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === "ArrowRight") {
			setValue(filteredOptions[0]?.label || "")
			onEvent(filteredOptions[0]?.id)
		}
	}

	useEffect(() => {
		setValue(selected.label || "")
	}, [selected])

	return (
		<Input
			ref={inputRef}
			className="sui-select__input"
			id={inputId}
			icon="search"
			iconPosition="start"
			onClick={dropdownToggle}
			onChange={onInputChange}
			defaultValue={value}
			allowClear={false}
			hint={(isFiltered && filteredOptions[0]?.label) || ""}
			disableInteractions={true}
			onKeyDown={onInputKeyDown}
			{...props}
		/>
	)
}

export { InputWithAutoComplete }
