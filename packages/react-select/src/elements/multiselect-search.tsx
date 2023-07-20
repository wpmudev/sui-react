import React, { HTMLProps, useCallback } from "react"

interface SelectSearchInputProps extends HTMLProps<HTMLInputElement> {
	id: string
	onChange?: (event) => {}
}

const Search: React.FC<SelectSearchInputProps> = ({
	id,
	onChange,
	...props
}) => {
	// handle on change input
	const handleInputChange = useCallback(
		(event) => {
			if (onChange) {
				onChange(event)
			}
		},
		[onChange],
	)

	return (
		<input
			id={id}
			type="text"
			className="sui-select__search--input"
			onChange={handleInputChange}
			autoComplete="off"
			{...props}
		/>
	)
}

export { Search }
