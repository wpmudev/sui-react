import React, { HTMLProps, RefObject, useCallback } from "react"

interface SelectSearchInputProps
	extends Omit<HTMLProps<HTMLInputElement>, "onChange" | "ref" | "onKeyDown"> {
	id?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	ref?: RefObject<HTMLInputElement>
}

const Search: React.FC<SelectSearchInputProps> = ({
	id,
	onChange,
	...props
}) => {
	// handle on change input
	const handleInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
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
