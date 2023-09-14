import { HTMLProps } from "react"

/**
 * Represents the properties for an search component.
 */
interface SearchProps extends HTMLProps<HTMLSpanElement> {
	/**
	 * The CSS class name for the search.
	 */
	className?: string
	/**
	 * The CSS class name for the search.
	 */
	searchValue?: string
	/**
	 * To diable the search field.
	 */
	isDisabled?: boolean
	/**
	 * The items from which search operartion will be performed.
	 */
	items?: Record<string, any>
}

export type { SearchProps }
