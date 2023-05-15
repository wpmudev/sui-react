import React, { useState, useEffect } from 'react';

export const Pagination = ({
	limit,
	skip,
	results,
	skipToFirstLabel,
	previousLabel,
	nextLabel,
	skipToLastLabel,
	pagesToBottom,
	...args
}) => {
	const componentWrapper = args.children,
		componentChildren = componentWrapper?.props?.children
			? componentWrapper?.props?.children?.length > 1
				? [...componentWrapper.props.children]
				: [componentWrapper.props.children]
			: [],
		childElements = [...componentChildren],
		elements = childElements.length,
		pages =
			elements / limit > parseInt(elements / limit)
				? parseInt(elements / limit) + 1
				: elements / limit,
		[pagesArray, setPagesArray] = useState([]),
		[selectedPage, setSelectedPage] = useState('1'),
		[startIndex, setStartIndex] = useState(0),
		[endIndex, setEndIndex] = useState(pages >= 5 ? 5 : pages),
		[pageClickCounter, setPageClickCounter] = useState(0),
		[elementsStartIndex, setElementsStartIndex] = useState(0),
		[elementsEndIndex, setElementsEndIndex] = useState(limit);

	useEffect(() => {
		var pagesArray = [];
		for (let i = 1; i <= pages; ++i) pagesArray.push(i);
		setPagesArray(pagesArray);
	}, []);

	useEffect(() => {
		selectedPage >= endIndex && incrementIndexes();
		selectedPage <= startIndex + 1 && decrementIndexes();
	}, [pageClickCounter]);

	useEffect(() => {
		if (selectedPage !== '1') {
			setElementsStartIndex(selectedPage * limit - limit);
			setElementsEndIndex(selectedPage * limit);
		}
	}, [selectedPage]);

	const handleSkipToFirstPage = () => {
		setSelectedPage(1);
		setStartIndex(0);
		setEndIndex(pages >= 5 ? 5 : pages);
	};

	const handleSkipToLastPage = () => {
		setSelectedPage(pages);
		setStartIndex(pages >= 5 ? pages - 5 : 0);
		setEndIndex(pages);
	};

	const handlePreviousPage = () => {
		selectedPage > 1 && setSelectedPage(selectedPage - 1);
		decrementIndexes();
	};

	const handleNextPage = () => {
		selectedPage < pages && setSelectedPage(parseInt(selectedPage) + 1);
		incrementIndexes();
	};

	const decrementIndexes = () => {
		if (selectedPage - 1 <= startIndex + 1 && startIndex !== 0) {
			setStartIndex(startIndex - 1);
			setEndIndex(endIndex - 1);
		}
	};
	const incrementIndexes = () => {
		if (selectedPage + 1 >= endIndex && endIndex !== pages) {
			setStartIndex(startIndex + 1);
			setEndIndex(endIndex + 1);
		}
	};

	const handlePreviousEllipsis = () => {
		setSelectedPage(startIndex >= 5 ? endIndex - 6 : endIndex - startIndex - 1);
		setStartIndex(startIndex >= 5 ? startIndex - 5 : 0);
		setEndIndex(startIndex >= 5 ? endIndex - 5 : endIndex - startIndex);
	};
	const handleNextEllipsis = () => {
		setSelectedPage(pages - endIndex >= 5 ? startIndex + 7 : pages - endIndex + startIndex + 2);
		setStartIndex(pages - endIndex >= 5 ? startIndex + 5 : pages - endIndex + startIndex);
		setEndIndex(pages - endIndex >= 5 ? endIndex + 5 : pages);
	};

	const handlePageClick = async (page) => {
		setSelectedPage(page);
		setPageClickCounter(pageClickCounter + 1);
	};
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
	};
	if (args?.paginationContent) return <>{args?.paginationContent({ ...properties })}</>;
	else
		return (
			<>
				{pagesToBottom && PaginationResults({ ...properties })}
				{PaginationNav({ ...properties })}
				{!pagesToBottom && PaginationResults({ ...properties })}
			</>
		);
};

export const PaginationResults = ({ ...properties }) => {
	const items = React.Children.map(properties.childElements, (data) =>
		React.cloneElement(data)
	)?.slice(properties.elementsStartIndex, properties.elementsEndIndex);
	return React.Children.map(properties.componentWrapper, (data) =>
		React.cloneElement(data, '', items)
	);
};

export const PaginationNav = ({ ...properties }) => {
	return (
		properties.pagesArray.length > 1 && (
			<div className="sui-pagination">
				{properties.results && (
					<span className="sui-pagination__results">{properties.elements} results</span>
				)}
				<ul className="sui-pagination__nav">
					{properties.skip && (
						<li className="sui-pagination__item">
							<button className="sui-pagination__button" disabled={properties.selectedPage <= 1} onClick={properties.handleSkipToFirstPage}>
								<span aria-hidden="false" className="sui-screen-reader-only">
									{properties.skipToFirstLabel || 'Go to first page'}
								</span>
								<span
									aria-hidden="true"
									title={properties.skipToFirstLabel || 'Go to first page'}
									className="suicons suicons--arrow-skip-back suicons--sm"
								></span>
							</button>
						</li>
					)}
					<li className="sui-pagination__item">
						<button className="sui-pagination__button" disabled={properties.selectedPage <= 1} onClick={properties.handlePreviousPage}>
							<span aria-hidden="false" className="sui-screen-reader-only">
								{properties.previousLabel || 'Go to previous page'}
							</span>
							<span
								aria-hidden="true"
								title={properties.previousLabel || 'Go to previous page'}
								className="suicons suicons--chevron-left suicons--sm"
							></span>
						</button>
					</li>
					{properties.startIndex > 0 && (
						<li className="sui-pagination__item">
							<button className="sui-pagination__button" onClick={properties.handlePreviousEllipsis}>
								<span
									className="suicons suicons--more suicons--sm"
									aria-hidden="true"
								></span>
							</button>
						</li>
					)}
					{properties.pagesArray
						?.slice(properties.startIndex, properties.endIndex)
						?.map((data, index) => {
							return (
								<li className="sui-pagination__item" key={index}>
									<button
										aria-selected={properties.selectedPage === data}
										className={`sui-pagination__button${properties.selectedPage == data ? ' sui-pagination__button--active' : ''}`}
										onClick={() => properties.handlePageClick(parseInt(data))}
									>
										{data}
									</button>
								</li>
							);
						})}
					{properties.endIndex < properties.pages && (
						<li className="sui-pagination__item">
							<button className="sui-pagination__button" onClick={properties.handleNextEllipsis}>
								<span
									className="suicons suicons--more suicons--sm"
									aria-hidden="true"
								></span>
							</button>
						</li>
					)}
					<li className="sui-pagination__item">
						<button className="sui-pagination__button" disabled={properties.selectedPage >= properties.pages} onClick={properties.handleNextPage}>
							<span aria-hidden="false" className="sui-screen-reader-only">
								{properties.nextLabel || 'Go to next page.'}
							</span>
							<span
								aria-hidden="true"
								title={properties.nextLabel || 'Go to next page.'}
								className="suicons suicons--chevron-right suicons--sm"
							></span>
						</button>
					</li>
					{properties.skip && (
						<li className="sui-pagination__item">
							<button className="sui-pagination__button" disabled={properties.selectedPage >= properties.pages} onClick={properties.handleSkipToLastPage}>
								<span aria-hidden="false" className="sui-screen-reader-only">
									{properties.skipToLastLabel || 'Go to last page.'}
								</span>
								<span
									aria-hidden="true"
									title={properties.skipToLastLabel || 'Go to last page'}
									className="suicons suicons--arrow-skip-forward suicons--sm"
								></span>
							</button>
						</li>
					)}
				</ul>
			</div>
		)
	);
};
