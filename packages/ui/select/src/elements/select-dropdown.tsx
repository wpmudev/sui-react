import React, {
	Fragment,
	RefObject,
	useCallback,
	KeyboardEvent,
	MouseEvent,
	useId,
	HTMLProps,
} from "react"
import { Checkbox } from "@wpmudev/sui-checkbox"
import { Icon } from "./select-icon"
import { Search } from "./multiselect-search"
import { useStyles, useStylesTypes } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

interface SelectDropdownProps extends useStylesTypes {
	options: Record<string, any>[]
	onEvent?: (id: string | number) => void
	selectAll?: () => void
	isSmall?: boolean
	isMultiSelect?: boolean
	selected?: Record<string, any> | string
	ref?: RefObject<HTMLInputElement>
	onKeyDown?(e?: any): void
}

const Dropdown: React.FC<SelectDropdownProps> = ({
	options,
	onEvent = () => {},
	selectAll = () => {},
	isSmall = false,
	isMultiSelect = false,
	selected = "",
	...props
}) => {
	// generate unique name for checkbox
	const name = "select-" + useId()
	const { suiInlineClassname } = useStyles(props)

	const onSelect = useCallback(
		(e: any, id: string) => {
			if ((!e.key || (!!e.key && e.key === "Enter")) && onEvent) {
				onEvent(id)
			}
		},
		[onEvent],
	)

	const getOptProps = (id: string) => ({
		...props,
		ref: undefined,
		onClick: (e: MouseEvent<HTMLElement>) => onSelect(e, id),
		onKeyDown: (e?: KeyboardEvent<HTMLElement>) => onSelect(e, id),
	})

	// Render options for the dropdown
	const renderOptions = () => {
		// Render regular options
		return (
			<ul
				className={generateCN("sui-select__dropdown", {}, suiInlineClassname)}
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
							tabIndex={0}
							className={`sui-select__dropdown--option ${
								isSelected ? "sui-select__dropdown--selected" : ""
							}`}
							{...(getOptProps(id) as HTMLProps<HTMLLIElement>)}
						>
							<Fragment>
								{icon && <Icon name={icon} size={isSmall ? "xs" : "sm"} />}
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
					<Icon name="Search" size="sm" />
					<Search
						placeholder="Search"
						{
							// @ts-ignore
							...props
						}
					/>
				</div>
				<ul
					className={generateCN("sui-select__dropdown", {}, suiInlineClassname)}
					aria-label="dropdown-options"
				>
					<li className="sui-select__dropdown--option">
						<Checkbox
							name={name}
							label="Select all"
							isChecked={allSelected}
							isIndeterminate={!allSelected && !!isIndeterminate}
							onChange={selectAll}
						/>
					</li>
					{options.map(({ id, label, isSelected }) => (
						<li key={id} id={id} className="sui-select__dropdown--option">
							<Checkbox
								id={id}
								name={name}
								label={label}
								isChecked={isSelected}
								_htmlProps={{
									onClick: (e) => onSelect(e, id),
									onKeyDown: (e) => onSelect(e, id),
								}}
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
