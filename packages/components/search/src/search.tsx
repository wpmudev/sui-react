import React, { ReactElement, useCallback, useId, useState } from "react"
import { generateCN } from "@wpmudev/sui-utils"
import { Input } from "@wpmudev/sui-input"

import { SearchProps } from "./search.types"

// Build "search" component
const Search: React.FC<SearchProps> = ({
	id,
	className,
	defaultValue,
	children,
	...props
}) => {
	const [value, setValue] = useState(defaultValue ?? "")
	let inputId = useId()
	inputId = id ?? `sui-search-${inputId}`

	// Define class name
	const classNames = generateCN("sui-search", {})

	const onChange = useCallback((e) => {
		const val = e ? e.target.value : ""
		setValue(val)
	}, [])

	return (
		<div className={classNames} {...props}>
			<Input
				id={inputId}
				tabIndex={-1}
				icon="search"
				iconPosition="start"
				onChange={onChange}
				defaultValue={value}
				allowClear={true}
			/>
			{children &&
				React.cloneElement(children as ReactElement, { searchValue: value })}
		</div>
	)
}

// Publish required component.
export { Search }
