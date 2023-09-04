import React from "react"

type UnknownObject = { [key: string]: unknown }

/**
 * Represents the properties for pagination component
 */
interface PaginationProps {
	/**
	 * Number of items per page
	 */
	limit: number
	/**
	 * Show or hide skip buttons on pagination
	 */
	skip?: boolean
	/**
	 * When enabled, it shows the total number of results."
	 */
	results?: boolean
	/**
	 * show the pagination at the bottom of the list
	 */
	pagesToBottom?: boolean
	/**
	 * "previous" button label
	 */
	previousLabel?: string
	/**
	 * "next" button label
	 */
	nextLabel?: string
	/**
	 * "skip to first" button label
	 */
	skipToFirstLabel?: string
	/**
	 * "skip to last" button label
	 */
	skipToLastLabel?: string
	/**
	 * children element as wrapper for other children
	 */
	children?: React.ReactElement
	/**
	 * Overrides pagination return value
	 */
	paginationContent?: (obj: UnknownObject) => React.ReactElement
	/**
	 * Callback function when page number get changed
	 *
	 * @param {number} page
	 */
	onChange?(page: number): void
}

export type { PaginationProps }
