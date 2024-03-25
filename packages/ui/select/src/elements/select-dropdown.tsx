import React, {
	Fragment,
	useCallback,
	KeyboardEvent,
	MouseEvent,
	useId,
	HTMLProps,
	ChangeEvent,
} from "react"

import { InteractionTypes, useInteraction, useStyles } from "@wpmudev/sui-hooks"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { Dropdown as SuiDropdown } from "@wpmudev/sui-dropdown"

import { SelectDropdownProps, SelectOptionType } from "../select.types"
import {
	MenuItemProps,
	MenuGroupProps,
} from "@wpmudev/sui-dropdown/src/dropdown.types"

const Dropdown: React.FC<SelectDropdownProps> = ({
	options,
	onEvent = () => {},
	selectAll = () => {},
	isSmall = false,
	isMultiSelect = false,
	selected = "",
	isSearchable = false,
	dropdownRef = null,
	onToggle = (isOpen: boolean) => {},
	onSearch = (value: string) => {},
	onChange,
	_htmlProps,
	_dropdownProps,
	...props
}) => {
	// generate unique name for checkbox
	const name = "select-" + useId()
	const { suiInlineClassname } = useStyles(props)

	const onSelect = useCallback(
		(e: any, option: SelectOptionType) => {
			if ((!e.key || (!!e.key && e.key === "Enter")) && onEvent) {
				onEvent(option)
				if (onChange) {
					onChange(option)
				}
			}
		},
		[onChange, onEvent],
	)

	const getOptProps = (option: SelectOptionType) => ({
		ref: undefined,
		onKeyDown: (e?: KeyboardEvent<HTMLElement>) => onSelect(e, option),
	})

	const wrapper = (content: Array<MenuItemProps | MenuGroupProps>) => (
		<SuiDropdown
			ref={dropdownRef}
			closeOnOuterClick={false}
			trigger={<Fragment />}
			onToggle={onToggle}
			isFluid={true}
			isFixedHeight={true}
			className={generateCN("sui-select__dropdown", {}, suiInlineClassname)}
			menu={content}
			onMenuClick={(option: SelectOptionType, e: MouseEvent<HTMLElement>) => {
				onSelect(e, option)
			}}
			{...(isMultiSelect && {
				type: "select-checkbox",
				onSearch,
				allowSearch: true,
			})}
			_htmlProps={{
				"aria-label": "dropdown-options",
				...getOptProps,
			}}
			{..._dropdownProps}
		/>
	)

	// Render options for the dropdown
	const renderOptions = () =>
		wrapper(
			options?.map((option) => {
				option = {
					...option,
					...(isSearchable && {
						label: (
							<span className="sui-select__dropdown--content">
								{option?.boldLabel && <strong>{option?.boldLabel}</strong>}
								{
									option?.[
										isSearchable && !!option?.boldLabel ? "newLabel" : "label"
									]
								}
							</span>
						),
					}),
					props: {
						...option.props,
						className: generateCN("", {
							"sui-select__dropdown--option": true,
							"sui-select__dropdown--selected": option?.isSelected,
						}),
					},
				}
				return option
			}) || [],
		)

	// Render options for the multiselect dropdown
	const renderMultiselectOptions = () => {
		const allSelected = options?.every((option) => option?.isSelected)
		const isIndeterminate = options?.find((option) => option?.isSelected)
		const newOptions = options
			? [
					{
						id: "select-all",
						label: "Select all",
						props: {
							_checkboxProps: {
								isChecked: allSelected,
								isIndeterminate: !allSelected && !!isIndeterminate,
								onChange: selectAll,
								isSmall,
							},
						},
					},
					...options.map((option) => {
						return {
							...option,
							props: {
								...option.props,
								_checkboxProps: {
									...option?.props?._checkboxProps,
									isChecked: option?.isSelected,
									isSmall,
								},
							},
						}
					}),
			  ]
			: []
		return wrapper(newOptions)
	}

	// Render the appropriate dropdown options based on isMultiSelect
	return (
		<Fragment>
			{isMultiSelect ? renderMultiselectOptions() : renderOptions()}
		</Fragment>
	)
}

export { Dropdown }
