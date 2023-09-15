import React, {
	ReactElement,
	useCallback,
	useId,
	useRef,
	useState,
} from "react"
import { generateCN } from "@wpmudev/sui-utils"
import { useOuterClick } from "@wpmudev/sui-hooks"
import { Input } from "@wpmudev/sui-input"

import { SearchProps } from "./search.types"

// Build "search" component
const Search: React.FC<SearchProps> = ({
	id,
	className,
	defaultValue,
	children,
	isDisabled = false,
	...props
}) => {
	const [value, setValue] = useState(defaultValue ?? "")
	const [isOpen, setIsOpen] = useState(false)

	// Create a ref to access the dropdown's outer container element.
	const dropdownRef = useRef<HTMLDivElement | null>(null)

	let inputId = useId()
	inputId = id ?? `sui-search-${inputId}`

	// Define class name
	const classNames = generateCN("sui-search", {
		dropdown: isOpen,
	})

	const onChange = useCallback((e) => {
		const val = e ? e.target.value : ""
		setValue(val)
	}, [])

	// Handle the closing of the dropdown when clicking outside the component.
	useOuterClick(dropdownRef, () => {
		setIsOpen(false)
	})

	return (
		<div ref={dropdownRef} className={classNames} {...props}>
			<Input
				id={inputId}
				tabIndex={-1}
				icon="search"
				iconPosition="start"
				onChange={onChange}
				defaultValue={value}
				allowClear={true}
				isDisabled={isDisabled}
				onClick={() => setIsOpen(true)}
			/>
			{children && isOpen && (
				<div className="sui-search__popover">
					{React.cloneElement(children as ReactElement, { searchValue: value })}
				</div>
			)}
		</div>
	)
}

// Publish required component.
export { Search }
