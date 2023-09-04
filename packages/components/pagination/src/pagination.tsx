import React, { useState, useEffect, useCallback } from "react"

// import required module(s)
import { PaginationProps } from "./pagination.types"
import { PaginationNav } from "./pagination-nav"
import page from "@wpmudev/storybook/lib/components/page/page"

const Pagination: React.FC<PaginationProps> = ({
	limit,
	skip,
	results,
	skipToFirstLabel,
	previousLabel,
	nextLabel,
	skipToLastLabel,
	numberOfItems,
	onChange,
}) => {
	// Calculate the number of pages
	const pages = Math.ceil(numberOfItems / limit)

	// State variables
	const [pagesArray, setPagesArray] = useState<number[]>([])
	const [selectedPage, setSelectedPage] = useState(1)
	const [startIndex, setStartIndex] = useState(0)
	const [endIndex, setEndIndex] = useState(Math.min(5, pages))
	const [pageClickCounter, setPageClickCounter] = useState(0)
	const [elementsStartIndex, setElementsStartIndex] = useState(0)
	const [elementsEndIndex, setElementsEndIndex] = useState(limit)

	// Decrement startIndex and endIndex upon page change
	const decrementIndexes = useCallback(() => {
		if (selectedPage - 1 <= startIndex + 1 && startIndex !== 0) {
			setStartIndex(startIndex - 1)
			setEndIndex(endIndex - 1)
		}
	}, [selectedPage, startIndex, endIndex])

	// Increment startIndex and endIndex upon page change
	const incrementIndexes = useCallback(() => {
		if (selectedPage + 1 >= endIndex && endIndex !== pages) {
			setStartIndex(startIndex + 1)
			setEndIndex(endIndex + 1)
		}
	}, [selectedPage, startIndex, endIndex, pages])

	// Update the list of page numbers based on available pages
	useEffect(() => {
		const pageNumbers: number[] = []
		for (let i = 1; i <= pages; ++i) pageNumbers.push(i)
		setPagesArray(pageNumbers)
	}, [pages])

	useEffect(() => {
		if (onChange) {
			onChange(selectedPage)
		}
	}, [onChange, selectedPage])

	// Change indexes when page changes
	useEffect(() => {
		if (selectedPage >= endIndex) incrementIndexes()
		if (selectedPage <= startIndex + 1) decrementIndexes()
	}, [
		pageClickCounter,
		incrementIndexes,
		decrementIndexes,
		endIndex,
		startIndex,
		selectedPage,
	])

	// Change elements start and end index upon page or limit change
	useEffect(() => {
		if (selectedPage !== 1) {
			setElementsStartIndex(selectedPage * limit - limit)
			setElementsEndIndex(selectedPage * limit)
		}
	}, [selectedPage, limit])

	// Handle navigation functions

	// Go to the first page
	const handleSkipToFirstPage = () => {
		setSelectedPage(1)
		setStartIndex(0)
		setEndIndex(Math.min(5, pages))
	}

	// Go to the last page
	const handleSkipToLastPage = () => {
		setSelectedPage(pages)
		setStartIndex(Math.max(0, pages - 5))
		setEndIndex(pages)
	}

	// Go to the previous page
	const handlePreviousPage = () => {
		if (selectedPage > 1) {
			setSelectedPage(selectedPage - 1)
		}
		decrementIndexes()
	}

	// Go to the next page
	const handleNextPage = () => {
		if (selectedPage < pages) {
			setSelectedPage(selectedPage + 1)
		}
		incrementIndexes()
	}

	// Go to the page before the ellipsis
	const handlePreviousEllipsis = () => {
		const newStartIndex = Math.max(0, startIndex - 5)
		setStartIndex(newStartIndex)
		setEndIndex(startIndex >= 5 ? endIndex - 5 : endIndex - startIndex)
		setSelectedPage(startIndex >= 5 ? startIndex - 4 : 1)
	}

	// Go to the page after the ellipsis
	const handleNextEllipsis = () => {
		const newStartIndex = Math.min(startIndex + 5, pages - 5)
		setStartIndex(newStartIndex)
		setEndIndex(
			startIndex >= 5 ? endIndex + 5 : endIndex + (newStartIndex - startIndex),
		)
		setSelectedPage(startIndex >= 5 ? startIndex + 6 : newStartIndex + 1)
	}

	// Handle clicking on a page number
	const handlePageClick = (page: number) => {
		setSelectedPage(page)
		setPageClickCounter(pageClickCounter + 1)
	}

	// Properties to pass to PaginationNav component
	const properties = {
		elementsStartIndex,
		elementsEndIndex,
		handlePageClick,
		handleNextEllipsis,
		handlePreviousEllipsis,
		handleNextPage,
		handlePreviousPage,
		handleSkipToLastPage,
		handleSkipToFirstPage,
		pagesArray,
		selectedPage,
		startIndex,
		endIndex,
		pages,
		skipToFirstLabel,
		previousLabel,
		nextLabel,
		skipToLastLabel,
		skip,
		results,
		numberOfItems,
	}

	return <PaginationNav {...properties} />
}

export { Pagination }
