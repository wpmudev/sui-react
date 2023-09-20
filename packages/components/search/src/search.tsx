import React, { useCallback, useEffect, useId, useRef, useState } from "react"

import { Input } from "@wpmudev/sui-input"

import { generateCN } from "@wpmudev/sui-utils"
import { useInteraction, useOuterClick } from "@wpmudev/sui-hooks"

import { SearchProps } from "./search.types"
import { SearchOptions } from "./search-options"

// Build "search" component
const Search: React.FC<SearchProps> = ({
	id,
	className,
	variation = "",
	defaultValue,
	options = [],
	onChange = () => {},
	allowClear = true,
	searchMinChars = 2,
	searchHint = "Please enter #number# or more characters",
	isDisabled = false,
}) => {
	const [value, setValue] = useState<string>((defaultValue as string) ?? "")
	const [isPopoverVisible, setIsPopoverVisible] = useState(false)

	// Random search ID
	let inputId = useId()
	inputId = id ?? `sui-search-${inputId}`

	// Search wrapper ref
	const searchRef = useRef<HTMLDivElement | null>(null)
	// Search input ref
	const inputRef = useRef<HTMLInputElement | null>(null)
	// Interaction methods
	const [isHovered, isFocused, methods] = useInteraction({})
	// Make options searchable if input value is above min chars required for search
	const isFiltered = value?.length >= searchMinChars

	// Define class name
	const classNames = generateCN(
		"sui-search",
		{
			focus: isFocused || isPopoverVisible,
			hover: isHovered && !isFocused,
			disabled: isDisabled,
		},
		className,
	)

	// Handle when input value get changes
	const onInputChange = useCallback((e) => {
		const val = e ? e?.target?.value : ""
		setValue(val)
	}, [])

	// Handle on focus in
	const onInputFocus = useCallback(() => {
		setIsPopoverVisible(true)
	}, [])

	// Handle the closing of the dropdown when clicking outside the component.
	useOuterClick(searchRef, () => {
		setIsPopoverVisible(false)
	})

	// Update value when
	useEffect(() => {
		setValue(defaultValue as string)
	}, [defaultValue])

	useEffect(() => {
		if (onChange) {
			onChange(value ?? "")
		}
	}, [onChange, value])

	// Filter options list based on the searched value
	const filteredOptions = !isFiltered
		? options
		: options.filter((option) => option.startsWith(value))

	// Select first option when right arrow key is pressed.
	const onInputKeyDown = useCallback(
		(e) => {
			if ("ArrowRight" === e.code) {
				setValue(filteredOptions?.[0])
			}
		},
		[filteredOptions],
	)

	const inputProps: Record<string, any> = {}

	// Add additional props for smart search
	if ("smart" === variation) {
		inputProps.hint = (isFiltered && filteredOptions?.[0]) ?? ""
		inputProps.onFocus = onInputFocus
		inputProps.onKeyDown = onInputKeyDown
	}

	return (
		<div ref={searchRef} className={classNames} {...methods}>
			<Input
				ref={inputRef}
				tabIndex={-1}
				className="sui-search__input-field"
				id={inputId}
				icon="search"
				iconPosition="start"
				onChange={onInputChange}
				defaultValue={value}
				allowClear={allowClear}
				disableInteractions={true}
				isDisabled={isDisabled}
				{...inputProps}
			/>
			{isPopoverVisible && "smart" === variation && (
				<div className="sui-search__popover">
					{!isFiltered ? (
						<div className="sui-search__hint">
							<span>{searchHint.replace("#number#", searchMinChars)}</span>
						</div>
					) : (
						<SearchOptions
							options={filteredOptions}
							value={value}
							setValue={setValue}
							setIsPopoverVisible={setIsPopoverVisible}
						/>
					)}
				</div>
			)}
		</div>
	)
}

// Publish required component.
export { Search }
