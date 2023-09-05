import React, { Fragment, HTMLProps, useCallback } from "react"
import { Checkbox } from "@wpmudev/sui-checkbox"
import { Icon } from "./select-icon"
import { Search } from "./multiselect-search"

interface SelectDropdownProps
	extends Omit<HTMLProps<HTMLOListElement>, "selected"> {
	options: Record<string, any>[]
	onEvent?: (id: string) => {}
	selectAll?: () => {}
	isSmartSearch?: boolean
	isSmall?: boolean
	isMultiSelect?: boolean
	selected?: string
}

const Dropdown: React.FC<SelectDropdownProps> = ({
	options,
	onEvent = () => {},
	selectAll = () => {},
	isSmartSearch = false,
	isSmall = false,
	isMultiSelect = false,
	selected = "",
	...props
}) => {
	const onSelect = useCallback(
		(e, id: string) => {
			if ((!e.key || (!!e.key && e.key === "Enter")) && onEvent) {
				onEvent(id)
			}
		},
		[onEvent],
	)

	// Render options for the dropdown
	const renderOptions = () => {
		if (isSmartSearch && selected?.length < 2) {
			// Render message when smart search is enabled but character count is insufficient
			return (
				<div className="sui-select__dropdown">
					<div className="sui-select__dropdown--empty">
						Please enter 2 or more characters
					</div>
				</div>
			)
		}

		// Render regular options
		return (
			<ul
				className="sui-select__dropdown"
				role="listbox"
				aria-label="dropdown-options"
			>
				{options.map(
					({
						icon,
						id,
						label,
						isSelected,
						newLabel = label,
						boldLabel = "",
					}) => (
						<li
							key={id}
							id={id}
							role="option"
							tabIndex="0"
							className={`sui-select__dropdown--option ${
								isSelected ? "sui-select__dropdown--selected" : ""
							}`}
							onClick={(e) => onSelect(e, id)}
							onKeyDown={(e) => onSelect(e, id)}
							{...props}
						>
							<Fragment>
								{icon && <Icon name={icon} size={isSmall ? "sm" : "md"} />}
								<span>
									{boldLabel && <strong>{boldLabel}</strong>}
									{newLabel}
								</span>
							</Fragment>
						</li>
					),
				)}
			</ul>
		)
	}

	// Render options for the multiselect dropdown
	const renderMultiselectOptions = () => {
		const allSelected = options.every((option) => option.isSelected)
		const isIndeterminate = options.find((option) => option.isSelected)

		return (
			<Fragment>
				<div className="sui-select__search">
					<Icon name="search" size="md" />
					<Search placeholder="Search" {...props} />
				</div>
				<ul
					className="sui-select__dropdown"
					role="listbox"
					aria-label="dropdown-options"
				>
					<li className="sui-select__dropdown--option" role="option">
						<Checkbox
							label="Select all"
							isChecked={allSelected}
							isIndeterminate={!allSelected && !!isIndeterminate}
							onChange={selectAll}
						/>
					</li>
					{options.map(({ id, label, isSelected }) => (
						<li
							key={id}
							id={id}
							role="option"
							className="sui-select__dropdown--option"
							// onClick={(e) => onSelect(e, id)}
							onKeyDown={(e) => onSelect(e, id)}
						>
							<Checkbox
								id={id}
								label={label}
								isChecked={isSelected}
								onChange={(e) => onSelect(e, id)}
							/>
						</li>
					))}
				</ul>
			</Fragment>
		)
	}

	// Render the appropriate dropdown options based on isMultiSelect
	return (
		<Fragment>
			{isMultiSelect ? renderMultiselectOptions() : renderOptions()}
		</Fragment>
	)
}

export { Dropdown }
