import React from "react"

type UnknownObject = { [key: string]: unknown }

/**
 * Represents the common properties for pagination components
 */
interface PaginationCommonProps {
	/**
	 * Show or hide skip buttons on pagination
	 */
	skip?: boolean
	/**
	 * "previous" button label
	 */
	previousLabel?: string
	/**
	 * "next" button label
	 */
	nextLabel?: string
}

/**
 * Represents the properties for pagination component
 */
interface PaginationProps extends PaginationCommonProps {
	/**
	 * Number of items per page
	 */
	limit: number
	/**
	 * show the pagination at the bottom of the list
	 */
	pagesToBottom?: boolean
	/**
	 * "skip to first" button label
	 */
	skipToFirstLabel?: string
	/**
	 * number of items in a page.
	 */
	numberOfItems?: number
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

/**
 * Represents the properties for pagination navigation component
 */
interface PaginationNavProps extends PaginationCommonProps {
	/**
	 * Array of page numbers
	 */
	pagesArray: number[]
	/**
	 * Total number of elements
	 */
	elements: number
	/**
	 * Currently selected page
	 */
	selectedPage: number
	/**
	 * Callback for navigating to the previous page
	 */
	handlePreviousPage: () => void
	/**
	 * Callback for skipping to the first page
	 */
	handleSkipToFirstPage: () => void
	/**
	 * Callback for skipping to the last page
	 */
	handleSkipToLastPage: () => void
	/**
	 * Callback for navigating to the previous ellipsis
	 */
	handlePreviousEllipsis: () => void
	/**
	 * Callback for clicking on a specific page
	 *
	 * @param {number} page - The page number clicked
	 */
	handlePageClick: (page: number) => void
	/**
	 * Callback for navigating to the next ellipsis
	 */
	handleNextEllipsis: () => void
	/**
	 * Callback for navigating to the next page
	 */
	handleNextPage: () => void
	/**
	 * Start index of the displayed items
	 */
	startIndex: number
	/**
	 * End index of the displayed items
	 */
	endIndex: number
	/**
	 * Total number of pages
	 */
	pages: number
}

export type { PaginationProps, PaginationNavProps }
