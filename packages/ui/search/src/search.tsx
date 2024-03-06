// @ts-nocheck
import React, { useCallback, useEffect, useId, useRef, useState } from "react"

import { Input } from "@wpmudev/sui-input"

import { _renderRestPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { useInteraction, useOuterClick, useStyles } from "@wpmudev/sui-hooks"

import { SearchProps } from "./search.types"
import { SearchOptions } from "./search-options"
import { Info } from "@wpmudev/sui-icons"

// Build "search" component
const Search: React.FC<SearchProps> = ({
	id,
	className,
	variation = "basic",
	placeholder,
	defaultValue,
	options = [],
	onChange = () => {},
	allowClear = true,
	searchMinChars = 2,
	searchHint = "Please enter #number# or more characters",
	isDisabled = false,
	customWidth,
	_style = {},
	...props
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

	const { suiInlineClassname } = useStyles(_style, className)

	// Define class name
	const classNames = generateCN(
		"sui-search",
		{
			focus: isFocused || isPopoverVisible,
			hover: isHovered && !isFocused,
			disabled: isDisabled,
		},
		suiInlineClassname,
	)

	// Handle when input value get changes
	const onInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const val = e ? e?.target?.value : ""
			setValue(val)
		},
		[],
	)

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
		(e: KeyboardEvent) => {
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
		<div
			ref={searchRef}
			className={classNames}
			data-testid="search"
			{...(customWidth && { style: { maxWidth: `${customWidth}px` } })}
			{...methods}
		>
			<Input
				ref={inputRef}
				tabIndex={isDisabled ? -1 : 0}
				className="sui-search__input-field"
				id={inputId}
				icon="Search"
				iconPosition="start"
				onChange={onInputChange}
				defaultValue={value}
				allowClear={allowClear}
				disableInteractions={true}
				isDisabled={isDisabled ?? false}
				placeholder={placeholder ?? ""}
				_htmlProps={{
					..._renderRestPropsSafely(inputProps),
				}}
			/>
			{isPopoverVisible && "smart" === variation && (
				<div className="sui-search__popover">
					{!isFiltered ? (
						<div className="sui-search__hint-wrapper">
							<div className="sui-search__hint">
								<Info size="sm" />
								<span>{searchHint.replace("#number#", searchMinChars)}</span>
							</div>
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
