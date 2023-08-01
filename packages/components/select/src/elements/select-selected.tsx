import React, { HTMLProps, useCallback } from "react"
import { isArray } from "@wpmudev/sui-utils"
import { Icon } from "./select-icon"
import { InputWithAutoComplete } from "./select-input"

interface SelectSelectedProps extends HTMLProps<HTMLDivElement> {
	id: string
	expanded?: boolean
	arrow?: string
	selected?: boolean
	selectLabel?: string
	isSmall?: boolean
	isMultiSelect?: boolean
	removeSelection: (selectedId: any) => {}
	dropdownToggle: () => {}
	clearSelection: () => {}
}

// Build "Select Selected" component.
const Selected: React.FC<SelectSelectedProps> = ({
	id,
	expanded = false,
	arrow,
	selected,
	selectLabel = "",
	isMultiSelect = false,
	isSmall = false,
	removeSelection = () => {},
	dropdownToggle = () => {},
	clearSelection = () => {},
	...props
}) => {
	// Prepare the selected content
	const selectedContent = isArray(selected) ? (
		selected.map(({ label, id }) => (
			<span
				key={id}
				className="sui-select__selected-options"
				onClick={(event) => event.stopPropagation()}
			>
				{label}
				<Icon
					name="close"
					size="sm"
					onClick={() => removeSelection(id)}
				/>
			</span>
		))
	) : (
		<span className="sui-select__selected">{selected}</span>
	)

	const onClearSelection = useCallback(
		(event) => {
			event.stopPropagation()
			clearSelection()
		},
		[clearSelection],
	)

	return (
		<div
			id={id}
			className="sui-select__control"
			onClick={dropdownToggle}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					dropdownToggle()
				}
			}}
			tabIndex="0"
			aria-haspopup="listbox"
			aria-expanded={expanded}
			{...props}
		>
			{selectedContent}
			{isMultiSelect && selectLabel !== selected && (
				<Icon
					name="close-alt"
					size={isSmall ? "md" : "lg"}
					onClick={onClearSelection}
				/>
			)}
			<Icon name={arrow ?? ""} size="md" />
		</div>
	)
}

interface SelectSelectedSearchProps extends HTMLProps<HTMLInputElement> {
	arrow?: string
	isSmall?: boolean
	isSmartSearch?: boolean
	selectLabel?: string
	clearSelection: () => {}
}

const SelectedSearch: React.FC<SelectSelectedSearchProps> = ({
	arrow,
	isSmartSearch = false,
	isSmall = false,
	selectLabel = "",
	clearSelection,
	...props
}) => {
	const { selected } = props

	return (
		<div className="sui-select__control">
			<InputWithAutoComplete placeholder="Search" {...props} />
			{isSmartSearch && <Icon name="search" size={isSmall ? "md" : "lg"} />}
			{!isSmartSearch && <Icon name={arrow ?? ""} size="md" />}
			{isSmartSearch && selected.length > 0 && (
				<Icon
					name="close-alt"
					size={isSmall ? "md" : "lg"}
					onClick={clearSelection}
				/>
			)}
		</div>
	)
}

export { Selected, SelectedSearch }
