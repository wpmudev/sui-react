import React from "react"

// build navigation markup
export const PaginationNav = ({ ...properties }) => {
	return (
		properties.pagesArray.length > 1 && (
			<div className="sui-pagination">
				{properties.results && (
					<span className="sui-pagination__results">
						{properties.elements} results
					</span>
				)}
				<ul className="sui-pagination__nav">
					{properties.skip && (
						<li className="sui-pagination__item">
							<button
								className="sui-pagination__button"
								disabled={properties.selectedPage <= 1}
								onClick={properties.handleSkipToFirstPage}
							>
								<span aria-hidden="false" className="sui-screen-reader-only">
									{properties.skipToFirstLabel || "Go to first page"}
								</span>
								<span
									aria-hidden="true"
									title={properties.skipToFirstLabel || "Go to first page"}
									className="suicons suicons--arrow-skip-back suicons--sm"
								></span>
							</button>
						</li>
					)}
					<li className="sui-pagination__item">
						<button
							className="sui-pagination__button"
							disabled={properties.selectedPage <= 1}
							onClick={properties.handlePreviousPage}
						>
							<span aria-hidden="false" className="sui-screen-reader-only">
								{properties.previousLabel || "Go to previous page"}
							</span>
							<span
								aria-hidden="true"
								title={properties.previousLabel || "Go to previous page"}
								className="suicons suicons--chevron-left suicons--sm"
							></span>
						</button>
					</li>
					{properties.startIndex > 0 && (
						<li className="sui-pagination__item">
							<button
								className="sui-pagination__button"
								onClick={properties.handlePreviousEllipsis}
							>
								<span
									className="suicons suicons--more suicons--sm"
									aria-hidden="true"
								></span>
							</button>
						</li>
					)}
					{properties.pagesArray
						?.slice(properties.startIndex, properties.endIndex)
						?.map((data: number, index: number) => {
							return (
								<li
									aria-selected={properties.selectedPage === data}
									className="sui-pagination__item"
									key={index}
									role="tab"
								>
									<button
										className={`sui-pagination__button${
											properties.selectedPage === data
												? " sui-pagination__button--active"
												: ""
										}`}
										onClick={() => properties.handlePageClick(Math.floor(data))}
									>
										{data}
									</button>
								</li>
							)
						})}
					{properties.endIndex < properties.pages && (
						<li className="sui-pagination__item">
							<button
								className="sui-pagination__button"
								onClick={properties.handleNextEllipsis}
							>
								<span
									className="suicons suicons--more suicons--sm"
									aria-hidden="true"
								></span>
							</button>
						</li>
					)}
					<li className="sui-pagination__item">
						<button
							className="sui-pagination__button"
							disabled={properties.selectedPage >= properties.pages}
							onClick={properties.handleNextPage}
						>
							<span aria-hidden="false" className="sui-screen-reader-only">
								{properties.nextLabel || "Go to next page."}
							</span>
							<span
								aria-hidden="true"
								title={properties.nextLabel || "Go to next page."}
								className="suicons suicons--chevron-right suicons--sm"
							></span>
						</button>
					</li>
					{properties.skip && (
						<li className="sui-pagination__item">
							<button
								className="sui-pagination__button"
								disabled={properties.selectedPage >= properties.pages}
								onClick={properties.handleSkipToLastPage}
							>
								<span aria-hidden="false" className="sui-screen-reader-only">
									{properties.skipToLastLabel || "Go to last page."}
								</span>
								<span
									aria-hidden="true"
									title={properties.skipToLastLabel || "Go to last page"}
									className="suicons suicons--arrow-skip-forward suicons--sm"
								></span>
							</button>
						</li>
					)}
				</ul>
			</div>
		)
	)
}
