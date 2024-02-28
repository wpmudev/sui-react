import React, { HTMLProps, RefObject, useCallback } from "react"
import { _renderHTMLPropsSafely, SuiHTMLAttributes } from "@wpmudev/sui-utils"

interface SelectSearchInputProps
	extends SuiHTMLAttributes<HTMLProps<HTMLInputElement>> {
	id?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	ref?: RefObject<HTMLInputElement>
	placeholder?: string
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
			{..._renderHTMLPropsSafely(props)}
		/>
	)
}

export { Search }
