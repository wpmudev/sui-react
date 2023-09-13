import { HTMLProps } from "react"

/**
 * Represents the properties for an search component.
 */
interface SearchProps extends HTMLProps<HTMLSpanElement> {
	/**
	 * The CSS class name for the search.
	 */
	className?: string
}

export type { SearchProps }
