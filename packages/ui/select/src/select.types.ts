import React, { HTMLProps, LegacyRef, ReactNode, Ref, RefObject } from "react"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"
import {
	InteractionTypes,
	useStylesTypes,
	validationPropsType,
} from "@wpmudev/sui-hooks"
import { IconsNamesType } from "@wpmudev/sui-icons"
import { DropdownRefProps } from "@wpmudev/sui-dropdown"
import { MenuItemProps } from "@wpmudev/sui-dropdown/src/dropdown.types"

interface SelectOptionType extends MenuItemProps {
	id: string
	label: ReactNode | string
	icon?: IconsNamesType
	isSelected?: boolean
	// dynamic internal props
	searchLabel?: string
	boldLabel?: string
	newLabel?: string
	isHovered?: boolean
	isFocused?: boolean
}

/**
 * This interface defines the props for the SelectBase component.
 * It extends the Omit utility to remove 'onMouseLeave' and 'onMouseEnter' properties
 * from the HTMLProps<HTMLDivElement> type.
 */
interface SelectBaseProps
	extends Omit<
			HTMLProps<HTMLDivElement>,
			| "onMouseLeave"
			| "onMouseEnter"
			| "selected"
			| "height"
			| "content"
			| "translate"
			| "width"
			| "color"
			| "onChange"
		>,
		SuiStyleType,
		SuiHTMLAttributes,
		validationPropsType {
	/** Unique ID */
	id?: string
	/** An array of options for the select */
	options?: SelectOptionType[]
	/** Additional CSS class name for styling */
	className?: string
	/** Current selected option */
	selected?: Record<string, any> | string | SelectOptionType[]
	/** Label for the select component */
	label?: string
	/** Whether the select is disabled or not */
	isDisabled?: boolean
	/** Whether the select is displayed in a small size */
	isSmall?: boolean
	/** Whether the select has an error state */
	isError?: boolean
	/** Whether the select allows multiple selections */
	isMultiSelect?: boolean
	/** Whether the select has a search functionality */
	isSearchable?: boolean
	/** Whether the select has icon as button */
	isCustomVar?: boolean
	/** Add a custom width in pixels  */
	customWidth?: number
	/**
	 * Event handler for mouse enter event.
	 * It is of type Pick<InteractionTypes, "onMouseEnter">, which means it selects
	 * the "onMouseEnter" property from the "InteractionTypes" type.
	 */
	onMouseEnter?: Pick<InteractionTypes, "onMouseEnter">
	/**
	 * Event handler for mouse leave event.
	 * It is of type Pick<InteractionTypes, "onMouseLeave">, which means it selects
	 * the "onMouseLeave" property from the "InteractionTypes" type.
	 */
	onMouseLeave?: Pick<InteractionTypes, "onMouseLeave">
	/**
	 * Pass selected item to parent component
	 *
	 * @param {Record<string, any> | Record<string, any>[]} option option or options list
	 */
	onChange?(option: SelectOptionType | SelectOptionType[] | string): void
	/**
	 * Props passed down to Dropdown component
	 */
	_dropdownProps?: object
}

interface SelectSelectedProps
	extends Omit<HTMLProps<HTMLDivElement>, "selected"> {
	id: string
	controlRef: HTMLDivElement | HTMLInputElement | null
	expanded?: boolean
	arrow?: IconsNamesType
	selected?: Record<string, any> | string
	selectLabel?: string
	isSmall?: boolean
	isMultiSelect?: boolean
	isCustomVar?: boolean
	removeSelection?: (optionId: number | string) => void
	dropdownToggle: () => void
	clearSelection: () => void
	onCustomVarChange: () => void
	interactionMethods: object
}

interface SearchInputWithAutoCompleteProps extends useStylesTypes {
	id?: string
	expanded?: boolean
	controlRef: HTMLDivElement | HTMLInputElement | null
	isSmall?: boolean
	selected?: {
		label: string
	}
	dropdownItems?: Record<string, any>[]
	onChange?: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void
	onValueChange: (val: string) => void
	onClick?: () => void
	onEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void
	ref?: LegacyRef<HTMLInputElement>
	interactionMethods: object
	_htmlProps?: object
}

interface SelectSearchInputProps
	extends SuiHTMLAttributes<HTMLProps<HTMLInputElement>> {
	id?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	ref?: RefObject<HTMLInputElement>
	placeholder?: string
}

interface SelectDropdownProps extends useStylesTypes, SuiHTMLAttributes {
	options: SelectBaseProps["options"]
	onEvent?: (option: SelectOptionType) => void
	selectAll?: () => void
	onToggle: (isOpen: boolean) => void
	isSmall?: boolean
	isMultiSelect?: boolean
	isSearchable?: boolean
	isCustomVar?: boolean
	selected?: Record<string, any> | string
	ref?: RefObject<HTMLInputElement>
	onKeyDown?(e?: any): void
	onChange?: (option: SelectOptionType) => void
	onSearch?: (value: string) => void
	dropdownRef?: Ref<DropdownRefProps | null>
	_dropdownProps?: object
}

interface SelectDropdownOptionProps {
	option: SelectOptionType
	children: JSX.Element
	[props: string]: any
}

export type {
	SelectBaseProps,
	SelectOptionType,
	SelectSelectedProps,
	SearchInputWithAutoCompleteProps,
	SelectSearchInputProps,
	SelectDropdownProps,
	SelectDropdownOptionProps,
}
