import React from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"

type UnknownObject = { [key: string]: unknown }

/**
 * Represents the common properties for pagination components
 */
interface PaginationCommonProps extends useStylesTypes {
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
	 * The screen reader text for the previous button
	 */
	previousLabel?: string
	/**
	 * The screen reader text for the previous button
	 */
	hideOnSinglePage?: boolean
	/**
	 * The screen reader text for the next button
	 */
	nextLabel?: string
	/**
	 * Whether to display skip buttons or not
	 */
	skip?: boolean
	/**
	 * Number of items per page
	 */
	limit?: number
	/**
	 * number of items in a page.
	 */
	numberOfItems?: number
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
	elements?: number
	/**
	 * Currently selected page
	 */
	selectedPage: number
	/**
	 * Callback for navigating to the previous page
	 */
	handlePreviousPage?: () => void
	/**
	 * Callback for skipping to the first page
	 */
	handleSkipToFirstPage?: () => void
	/**
	 * Callback for skipping to the last page
	 */
	handleSkipToLastPage?: () => void
	/**
	 * Callback for navigating to the previous ellipsis
	 */
	handlePreviousEllipsis?: () => void
	/**
	 * Callback for clicking on a specific page
	 *
	 * @param {number} page - The page number clicked
	 */
	handlePageClick: (page?: number) => void
	/**
	 * Callback for navigating to the next ellipsis
	 */
	handleNextEllipsis?: () => void
	/**
	 * Callback for navigating to the next page
	 */
	handleNextPage?: () => void
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
