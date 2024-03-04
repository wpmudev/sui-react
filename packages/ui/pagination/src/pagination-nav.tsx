import React from "react"

import { Button } from "@wpmudev/sui-button"
import { Tooltip } from "@wpmudev/sui-tooltip"
import { PaginationNavProps } from "./pagination.types"
import { useStyles } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

export const PaginationNav: React.FC<PaginationNavProps> = ({
	pagesArray,
	elements,
	selectedPage,
	handlePreviousPage,
	handleSkipToFirstPage,
	handleSkipToLastPage,
	handlePreviousEllipsis,
	handlePageClick,
	handleNextEllipsis,
	handleNextPage,
	previousLabel = "Go to previous page",
	nextLabel = "Go to next page",
	startIndex,
	endIndex,
	pages,
	skip,
	_style = {},
}) => {
	const { suiInlineClassname } = useStyles(_style)

	// Do not render if pagesArray is blank
	if (pagesArray.length < 1) {
		return null
	}

	return (
		<div
			className={generateCN("sui-pagination", {}, suiInlineClassname)}
			data-testid="pagination"
		>
			<ul className="sui-pagination__nav">
				<li className="sui-pagination__item">
					<Tooltip
						buttonProps={{
							type: "tertiary",
							colorScheme: "black",
							iconOnly: true,
							isSmall: true,
							isDisabled: selectedPage <= 1,
							_htmlProps: {
								"data-testid": "pagination-prev-page",
							},
						}}
						className="sui-pagination__button"
						icon="ChevronLeft"
						onClick={handlePreviousPage}
						aria-label={previousLabel}
					>
						{previousLabel}
					</Tooltip>
				</li>
				{startIndex > 1 && skip && (
					<li className="sui-pagination__item">
						<Button
							className="sui-pagination__button"
							colorScheme="black"
							type="tertiary"
							isSmall={true}
							isDisabled={selectedPage <= 1}
							onClick={handleSkipToFirstPage}
						>
							1
						</Button>
					</li>
				)}
				{startIndex > 0 && (
					<li className="sui-pagination__item">
						<Button
							colorScheme="black"
							type="tertiary"
							icon="More"
							iconOnly={true}
							isSmall={true}
							className="sui-pagination__button"
							onClick={handlePreviousEllipsis}
						>
							Skip pages
						</Button>
					</li>
				)}
				{pagesArray
					?.slice(startIndex, endIndex)
					?.map((data: number, index: number) => {
						return (
							<li className="sui-pagination__item" key={index}>
								<Button
									colorScheme="black"
									type="tertiary"
									isSmall={true}
									className={`sui-pagination__button${
										selectedPage === data
											? " sui-pagination__button--active"
											: ""
									}`}
									onClick={() => handlePageClick(Math.floor(data))}
									_htmlProps={{
										"data-testid": "pagination-item",
									}}
								>
									{data}
								</Button>
							</li>
						)
					})}
				{endIndex < pages - 1 && (
					<li className="sui-pagination__item">
						<Button
							colorScheme="black"
							type="tertiary"
							icon="More"
							iconOnly={true}
							isSmall={true}
							className="sui-pagination__button"
							onClick={handleNextEllipsis}
						>
							Skip pages
						</Button>
					</li>
				)}
				{endIndex < pages && skip && (
					<li className="sui-pagination__item">
						<Button
							colorScheme="black"
							type="tertiary"
							isSmall={true}
							className="sui-pagination__button"
							isDisabled={selectedPage >= pages}
							onClick={handleSkipToLastPage}
						>
							{pagesArray.length}
						</Button>
					</li>
				)}
				<li className="sui-pagination__item">
					<Tooltip
						buttonProps={{
							type: "tertiary",
							colorScheme: "black",
							iconOnly: true,
							isSmall: true,
							isDisabled: selectedPage >= pages,
							_htmlProps: {
								"data-testid": "pagination-next-page",
							},
						}}
						className="sui-pagination__button"
						icon="ChevronRight"
						onClick={handleNextPage}
						aria-label={nextLabel}
					>
						{nextLabel}
					</Tooltip>
				</li>
			</ul>
		</div>
	)
}
