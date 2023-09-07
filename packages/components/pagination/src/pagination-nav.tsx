import React from "react"

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
						<button
							className="sui-pagination__button"
							disabled={selectedPage <= 1}
							onClick={handlePreviousPage}
						>
							<span aria-hidden="false" className="sui-screen-reader-only">
								{previousLabel}
							</span>
							<span
								aria-hidden="true"
								title={previousLabel}
								className="suicons suicons--chevron-left suicons--sm"
							></span>
						</button>
					</li>
					{startIndex > 1 && skip && (
						<li className="sui-pagination__item">
							<button
								className="sui-pagination__button"
								disabled={selectedPage <= 1}
								onClick={handleSkipToFirstPage}
							>
								1
							</button>
						</li>
					)}
					{startIndex > 0 && (
						<li className="sui-pagination__item">
							<button
								className="sui-pagination__button"
								onClick={handlePreviousEllipsis}
							>
								<span
									className="suicons suicons--more suicons--sm"
									aria-hidden="true"
								></span>
							</button>
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
									<button
										className={`sui-pagination__button${
											selectedPage === data
												? " sui-pagination__button--active"
												: ""
										}`}
										onClick={() => handlePageClick(Math.floor(data))}
									>
										{data}
									</button>
								</li>
							)
						})}
					{endIndex < pages - 1 && (
						<li className="sui-pagination__item">
							<button
								className="sui-pagination__button"
								onClick={handleNextEllipsis}
							>
								<span
									className="suicons suicons--more suicons--sm"
									aria-hidden="true"
								></span>
							</button>
						</li>
					)}
					{endIndex < pages && skip && (
						<li className="sui-pagination__item">
							<button
								className="sui-pagination__button"
								disabled={selectedPage >= pages}
								onClick={handleSkipToLastPage}
							>
								{pagesArray.length}
							</button>
						</li>
					)}
					<li className="sui-pagination__item">
						<button
							className="sui-pagination__button"
							disabled={selectedPage >= pages}
							onClick={handleNextPage}
						>
							<span aria-hidden="false" className="sui-screen-reader-only">
								{nextLabel}
							</span>
							<span
								aria-hidden="true"
								title={nextLabel}
								className="suicons suicons--chevron-right suicons--sm"
							></span>
						</button>
					</li>
				</ul>
			</div>
		)
	)
}
