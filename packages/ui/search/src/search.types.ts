import React from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"

type SearchOptionType = string

interface SearchBaseProps extends useStylesTypes {
	/**
	 * The search input id
	 */
	id?: string
	/**
	 * Custom css className(s)
	 */
	className?: string
	/**
	 * Custom default value
	 */
	defaultValue?: string
	/**
	 * Placeholder for search
	 */
	placeholder?: string
	/**
	 * Callback function to be invoked upon text change
	 */
	onChange?(value: string): void
	/**
	 * Disables the input
	 */
	isDisabled?: boolean
	/**
	 * Options availabe to search
	 */
	options?: SearchOptionType[]
	/**
	 * Whether to dsiplay the clear button or not
	 */
	allowClear?: boolean
	/**
	 * Custom Width in pixels
	 */
	customWidth?: number
}

type SearchSmartType = SearchBaseProps & {
	/**
	 * Smart search variation
	 */
	variation: "smart"
	/**
	 * The available options for search
	 */
	options: SearchOptionType[]
	/**
	 * The minimum amount of characters to start searching
	 */
	searchMinChars?: number
	/**
	 * Provides a descriptive hint for search
	 */
	searchHint?: string
} & SearchBaseProps

type SearchBasicType = {
	/**
	 * The variation of the search
	 */
	variation?: "basic"
} & SearchBaseProps

type SearchProps = SearchSmartType | SearchBasicType

interface SearchOptionItemProps extends useStylesTypes {
	children?: React.ReactNode
	option: SearchOptionType
	onClick(option: SearchOptionType): void
}

interface SearchOptionsProps extends useStylesTypes {
	options: SearchOptionType[]
	value: string
	setValue(label: string): void
	setIsPopoverVisible(isVisible: boolean): void
}

export type {
	SearchProps,
	SearchOptionItemProps,
	SearchOptionsProps,
	SearchBaseProps,
}
