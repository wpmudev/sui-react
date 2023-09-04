import React, { useState, useEffect, HTMLProps } from "react"
import { Hint } from "react-autocomplete-hint"

interface InputWithAutoCompleteProps
	extends Omit<HTMLProps<HTMLInputElement>, "selected" | "onChange"> {
	id: string
	expanded?: boolean
	selected?: string
	dropdownItems?: Record<string, any>[]
	dropdownToggle?: () => {}
	onChange: (event) => {}
}

const InputWithAutoComplete: React.FC<InputWithAutoCompleteProps> = ({
	id,
	expanded = false,
	selected = "",
	dropdownItems,
	dropdownToggle = () => {},
	onChange = () => {},
	...props
}) => {
	const [option, setOption] = useState(selected)

	useEffect(() => {
		setOption(selected)
	}, [selected])

	const handleInputChange = (event) => {
		onChange(event)
	}

	return (
		<Hint options={dropdownItems} allowTabFill>
			<input
				id={id}
				type="text"
				value={option?.label}
				className="sui-select__input"
				onClick={dropdownToggle}
				onChange={handleInputChange}
				aria-haspopup="listbox"
				// aria-expanded={expanded}
				autoComplete="off"
				{...props}
			/>
		</Hint>
	)
}

export { InputWithAutoComplete }
