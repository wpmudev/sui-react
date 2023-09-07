import React from "react"
import { Button } from "@wpmudev/sui-button"

type PaginationNavProps = {
	pagesArray: number[]
	results?: boolean
	elements: number
	selectedPage: number
	handlePreviousPage: () => void
	handleSkipToFirstPage: () => void
	handleSkipToLastPage: () => void
	handlePreviousEllipsis: () => void
	handlePageClick: (page: number) => void
	handleNextEllipsis: () => void
	handleNextPage: () => void
	previousLabel?: string
	nextLabel?: string
	startIndex: number
	endIndex: number
	pages: number
	skip?: boolean
}

export const PaginationNav: React.FC<PaginationNavProps> = ({
	pagesArray,
	results,
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
}) => {
	return (
		pagesArray.length > 1 && (
			<div className="sui-pagination">
				{results && (
					<span className="sui-pagination__results">{elements} results</span>
				)}
				<ul className="sui-pagination__nav">
					<li className="sui-pagination__item">
						<Button
							className="sui-pagination__button"
							color="black"
							appearance="tertiary"
							icon="chevron-left"
							iconOnly={true}
							isSmall={true}
							isDisabled={selectedPage <= 1}
							onClick={handlePreviousPage}
						>
							{previousLabel}
						</Button>
					</li>
					{startIndex > 1 && skip && (
						<li className="sui-pagination__item">
							<Button
								className="sui-pagination__button"
								color="black"
								appearance="tertiary"
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
								color="black"
								appearance="tertiary"
								icon="more"
								iconOnly={true}
								isSmall={true}
								className="sui-pagination__button"
								onClick={handlePreviousEllipsis}
							></Button>
						</li>
					)}
					{pagesArray
						?.slice(startIndex, endIndex)
						?.map((data: number, index: number) => {
							return (
								<li
									aria-selected={selectedPage === data}
									className="sui-pagination__item"
									key={index}
									role="tab"
								>
									<Button
										color="black"
										appearance="tertiary"
										isSmall={true}
										className={`sui-pagination__button${
											selectedPage === data
												? " sui-pagination__button--active"
												: ""
										}`}
										onClick={() => handlePageClick(Math.floor(data))}
									>
										{data}
									</Button>
								</li>
							)
						})}
					{endIndex < pages - 1 && (
						<li className="sui-pagination__item">
							<Button
								color="black"
								appearance="tertiary"
								icon="more"
								iconOnly={true}
								isSmall={true}
								className="sui-pagination__button"
								onClick={handleNextEllipsis}
							>
								<span
									className="suicons suicons--more suicons--sm"
									aria-hidden="true"
								></span>
							</Button>
						</li>
					)}
					{endIndex < pages && skip && (
						<li className="sui-pagination__item">
							<Button
								color="black"
								appearance="tertiary"
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
						<Button
							className="sui-pagination__button"
							color="black"
							appearance="tertiary"
							icon="chevron-right"
							iconOnly={true}
							isSmall={true}
							isDisabled={selectedPage >= pages}
							onClick={handleNextPage}
						>
							{nextLabel}
						</Button>
					</li>
				</ul>
			</div>
		)
	)
}
