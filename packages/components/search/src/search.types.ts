import React from "react"

type SearchOptionType = string

interface SearchBaseProps {
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
	 * Callback function to be invoked upon text change
	 */
	onChange?(value: string): void
	/**
	 * Disables the input
	 */
	isDisabled?: boolean
}

type SearchSmartType = {
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
	/**
	 * The available options for search
	 */
	allowClear?: boolean
} & SearchBaseProps

type SearchBasicType = {
	/**
	 * The variation of the search
	 */
	variation?: "" | "basic"
} & SearchBaseProps

type SearchProps = SearchSmartType | SearchBasicType

interface SearchOptionItemProps {
	children?: React.ReactNode
	option: SearchOptionType
	onClick(option: SearchOptionType): void
}

interface SearchOptionsProps {
	options: SearchOptionType[]
	value: string
	setValue(label: string): void
	setIsPopoverVisible(isVisible: boolean): void
}

export type { SearchProps, SearchOptionItemProps, SearchOptionsProps }
