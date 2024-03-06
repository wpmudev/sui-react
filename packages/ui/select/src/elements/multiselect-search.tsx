import React, { HTMLProps, RefObject, useCallback } from "react"
import { _renderHTMLPropsSafely, SuiHTMLAttributes } from "@wpmudev/sui-utils"
import { SelectSearchInputProps } from "../select.types"

const Search: React.FC<SelectSearchInputProps> = ({
	id,
	onChange,
	_htmlProps,
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
			{..._htmlProps}
		/>
	)
}

export { Search }
