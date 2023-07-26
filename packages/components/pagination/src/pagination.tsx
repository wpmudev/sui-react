import React, { useState, useEffect, useCallback } from "react"

import { PaginationProps } from "./pagination.types"
import { PaginationNav } from "./pagination-nav"
import { PaginationResults } from "./pagination-results"

export const Pagination: React.FC<PaginationProps> = ({
	limit,
	skip,
	results,
	skipToFirstLabel,
	previousLabel,
	nextLabel,
	skipToLastLabel,
	pagesToBottom,
	children,
	paginationContent,
}) => {
	const componentWrapper = children
	let componentChildren: React.ReactElement[] = []

	if (componentWrapper?.props?.children) {
		const { children: wrapperChildren } = componentWrapper.props
		if (Array.isArray(wrapperChildren)) {
			componentChildren = [...wrapperChildren]
		} else {
			componentChildren = [wrapperChildren]
		}
	}

	const childElements = [...componentChildren],
		elements = childElements.length,
		pages =
			elements / limit > Math.floor(elements / limit)
				? Math.floor(elements / limit) + 1
				: elements / limit,
		[pagesArray, setPagesArray] = useState<(number | void)[]>([]),
		[selectedPage, setSelectedPage] = useState(1),
		[startIndex, setStartIndex] = useState(0),
		[endIndex, setEndIndex] = useState(pages >= 5 ? 5 : pages),
		[pageClickCounter, setPageClickCounter] = useState(0),
		[elementsStartIndex, setElementsStartIndex] = useState(0),
		[elementsEndIndex, setElementsEndIndex] = useState(limit)

	const decrementIndexes = useCallback(() => {
		if (selectedPage - 1 <= startIndex + 1 && startIndex !== 0) {
			setStartIndex(startIndex - 1)
			setEndIndex(endIndex - 1)
		}
	}, [selectedPage, startIndex, endIndex])

	const incrementIndexes = useCallback(() => {
		if (selectedPage + 1 >= endIndex && endIndex !== pages) {
			setStartIndex(startIndex + 1)
			setEndIndex(endIndex + 1)
		}
	}, [selectedPage, startIndex, endIndex, pages])

	useEffect(() => {
		const pageNumbers: number[] = []
		for (let i = 1; i <= pages; ++i) pageNumbers.push(i)
		setPagesArray(pageNumbers)
	}, [pages])

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

	useEffect(() => {
		if (selectedPage !== 1) {
			setElementsStartIndex(selectedPage * limit - limit)
			setElementsEndIndex(selectedPage * limit)
		}
	}, [selectedPage, limit])

	const handleSkipToFirstPage = () => {
		setSelectedPage(1)
		setStartIndex(0)
		setEndIndex(pages >= 5 ? 5 : pages)
	}

	const handleSkipToLastPage = () => {
		setSelectedPage(pages)
		setStartIndex(pages >= 5 ? pages - 5 : 0)
		setEndIndex(pages)
	}

	const handlePreviousPage = () => {
		if (selectedPage > 1) {
			setSelectedPage(selectedPage - 1)
		}
		decrementIndexes()
	}

	const handleNextPage = () => {
		if (selectedPage < pages) {
			setSelectedPage(Math.floor(selectedPage) + 1)
		}

		incrementIndexes()
	}

	const handlePreviousEllipsis = () => {
		setSelectedPage(startIndex >= 5 ? endIndex - 6 : endIndex - startIndex - 1)
		setStartIndex(startIndex >= 5 ? startIndex - 5 : 0)
		setEndIndex(startIndex >= 5 ? endIndex - 5 : endIndex - startIndex)
	}

	const handleNextEllipsis = () => {
		setSelectedPage(
			pages - endIndex >= 5
				? startIndex + 7
				: pages - endIndex + startIndex + 2,
		)
		setStartIndex(
			pages - endIndex >= 5 ? startIndex + 5 : pages - endIndex + startIndex,
		)
		setEndIndex(pages - endIndex >= 5 ? endIndex + 5 : pages)
	}

	const handlePageClick = async (page: number) => {
		setSelectedPage(page)
		setPageClickCounter(pageClickCounter + 1)
	}
	const properties = {
		componentWrapper,
		childElements,
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
		elements,
	}

	if (paginationContent) return <>{paginationContent({ ...properties })}</>

	return (
		<>
			{pagesToBottom && PaginationResults({ ...properties })}
			{PaginationNav({ ...properties })}
			{!pagesToBottom && PaginationResults({ ...properties })}
		</>
	)
}
