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

import {
	SelectDropdownOptionProps,
	SelectDropdownProps,
	SelectOptionType,
} from "../select.types"
import {
	MenuItemProps,
	MenuGroupProps,
} from "@wpmudev/sui-dropdown/src/dropdown.types"

const DropdownOption = ({
	children,
	option,
	optionAppreance,
	...props
}: SelectDropdownOptionProps) => {
	// Define states.
	const [isHovered, isFocused, methods] = useInteraction({} as InteractionTypes)

	const renderDropdownOption = (
		optionJSX: JSX.Element,
		rawOption: SelectOptionType,
	) => (!!optionAppreance ? optionAppreance(optionJSX, rawOption) : optionJSX)

	return (
		<li
			className={generateCN("", {
				"sui-select__dropdown--option": true,
				"sui-select__dropdown--selected": option?.props?.isSelected,
			})}
			{...props}
			{...methods}
		>
			{renderDropdownOption(children, { ...option, isHovered, isFocused })}
		</li>
	)
}

const Dropdown: React.FC<SelectDropdownProps> = ({
	options,
	onEvent = () => {},
	selectAll = () => {},
	isSmall = false,
	isMultiSelect = false,
	selected = "",
	isSearchable = false,
	optionAppreance,
	dropdownRef = null,
	onToggle = (isOpen: boolean) => {},
	onChange = (value: string) => {},
	_htmlProps,
	...props
}) => {
	// generate unique name for checkbox
	const name = "select-" + useId()
	const { suiInlineClassname } = useStyles(props)

	const onSelect = useCallback(
		(e: any, id: SelectOptionType["id"]) => {
			if ((!e.key || (!!e.key && e.key === "Enter")) && onEvent) {
				onEvent(id)
			}
		},
		[onEvent],
	)

	const getOptProps = (id: SelectOptionType["id"]) => ({
		ref: undefined,
		onKeyDown: (e?: KeyboardEvent<HTMLElement>) => onSelect(e, id),
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
			_htmlProps={{
				"aria-label": "dropdown-options",
				...getOptProps,
			}}
			menu={content}
			onMenuClick={(id: SelectOptionType["id"], e: MouseEvent<HTMLElement>) =>
				onSelect(e, id)
			}
			{...(isMultiSelect && {
				type: "select-checkbox",
				onSearch: onChange,
				allowSearch: true,
			})}
		></SuiDropdown>
	)

	// Render options for the dropdown
	const renderOptions = () =>
		wrapper(
			options?.map((option) => {
				if (isSearchable) {
					option.label = (
						<span className="sui-select__dropdown--content">
							{option?.boldLabel && <strong>{option?.boldLabel}</strong>}
							{
								option?.[
									isSearchable && !!option?.boldLabel ? "newLabel" : "label"
								]
							}
						</span>
					)
				}
				return option
			}) || [],
		)

	// Render options for the multiselect dropdown
	const renderMultiselectOptions = () => {
		const allSelected = options?.every((option) => option?.props?.isSelected)
		const isIndeterminate = options?.find((option) => option?.props?.isSelected)
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
								isSmall: false,
							},
						},
					},
					...options.map((option) => {
						return {
							...option,
							props: {
								...option.props,
								isChecked: option?.props?.isSelected,
								_checkboxProps: {
									...option?.props?._checkboxProps,
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
