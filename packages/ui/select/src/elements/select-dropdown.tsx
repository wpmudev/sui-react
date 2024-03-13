import React, {
	Fragment,
	useCallback,
	KeyboardEvent,
	MouseEvent,
	useId,
	HTMLProps,
	ChangeEvent,
} from "react"

import { Checkbox } from "@wpmudev/sui-checkbox"
import { InteractionTypes, useInteraction, useStyles } from "@wpmudev/sui-hooks"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { Dropdown as SuiDropdown } from "@wpmudev/sui-dropdown"

import { Icon } from "./select-icon"
import { Search } from "./multiselect-search"
import { options } from "../../../search/stories/options"
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
				"sui-select__dropdown--selected": option?.props.isSelected,
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
		onClick: (e: MouseEvent<HTMLElement>) => onSelect(e, id),
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

	// // Render options for the dropdown
	// const renderOptions = () =>
	// 	wrapper(
	// 		<ul>
	// 			{options?.map((option) => (
	// 				<DropdownOption
	// 					key={option.id}
	// 					optionAppreance={optionAppreance}
	// 					option={option}
	// 					tabIndex={0}
	// 					{...(getOptProps(option?.id) as HTMLProps<HTMLLIElement>)}
	// 				>
	// 					<Fragment>
	// 						{option?.icon && (
	// 							<Icon name={option?.icon} size={isSmall ? "xs" : "sm"} />
	// 						)}
	// 						<span className="sui-select__dropdown--content">
	// 							{option?.boldLabel && <strong>{option?.boldLabel}</strong>}
	// 							{
	// 								option?.[
	// 									isSearchable && !!option?.boldLabel ? "newLabel" : "label"
	// 								]
	// 							}
	// 						</span>
	// 					</Fragment>
	// 				</DropdownOption>
	// 			))}
	// 		</ul>,
	// 	)

	// // Render options for the multiselect dropdown
	// const renderMultiselectOptions = () => {
	// 	const allSelected = options?.every((option) => option.isSelected)
	// 	const isIndeterminate = options?.find((option) => option.isSelected)

	// 	return wrapper(
	// 		<Fragment>
	// 			<ul aria-label="dropdown-options">
	// 				<li className="sui-select__dropdown--option">
	// 					<Checkbox
	// 						name={name}
	// 						label="Select all"
	// 						isChecked={allSelected}
	// 						isIndeterminate={!allSelected && !!isIndeterminate}
	// 						onChange={selectAll}
	// 					/>
	// 				</li>
	// 				{options?.map((option) => (
	// 					<DropdownOption
	// 						key={option.id}
	// 						optionAppreance={optionAppreance}
	// 						option={option}
	// 					>
	// 						<Checkbox
	// 							id={option?.id}
	// 							name={name}
	// 							label={option?.label}
	// 							isChecked={option?.isSelected}
	// 							_htmlProps={{
	// 								onClick: (e) => onSelect(e, option?.id),
	// 								onKeyDown: (e) => onSelect(e, option?.id),
	// 							}}
	// 						/>
	// 					</DropdownOption>
	// 				))}
	// 			</ul>
	// 		</Fragment>,
	// 	)
	// }

	// Render options for the dropdown
	const renderOptions = () =>
		wrapper(
			options.map((option) => {
				if (isSearchable) {
					option.label = (
						<span className="sui-select__dropdown--content">
							{option?.props?.boldLabel && (
								<strong>{option?.props?.boldLabel}</strong>
							)}
							{
								option?.[
									isSearchable && !!option?.props?.boldLabel
										? "newLabel"
										: "label"
								]
							}
						</span>
					)
				}
				return option
			}),
		)

	// Render options for the multiselect dropdown
	const renderMultiselectOptions = () => {
		const allSelected = options?.every((option) => option?.props?.isSelected)
		const isIndeterminate = options?.find((option) => option?.props?.isSelected)
		const newOptions = [
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
						isChecked: option?.props.isSelected,
						_checkboxProps: {
							...option.props._checkboxProps,
						},
					},
				}
			}),
		]
		return wrapper(newOptions)
	}

	// Render the appropriate dropdown options based on isMultiSelect
	return (
		<Fragment>
			{isMultiSelect ? (
				<Fragment>
					{/* <div className="sui-select__search">
						<Icon name="Search" size="sm" />
						<Search
							_htmlProps={{
								placeholder: "Search",
								..._renderHTMLPropsSafely(_htmlProps),
							}}
						/>
					</div> */}
					{renderMultiselectOptions()}
				</Fragment>
			) : (
				renderOptions()
			)}
		</Fragment>
	)
}

export { Dropdown }
