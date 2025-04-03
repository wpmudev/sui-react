import React, {
	Children,
	cloneElement,
	FC,
	isValidElement,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react"
import { ChevronLeft, ChevronRight } from "@wpmudev/sui-icons"
import { useDetectRTL, useScrollable, useStyles } from "@wpmudev/sui-hooks"
import { TabNavProps, TabNavScrollDirection } from "../tabs.types"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

/**
 * TabNav
 *
 * React component that represents the container for tab navigation
 * in a tabbed interface.
 *
 * @param {TabNavProps} props - Props for the TabNav component.
 * @return {JSX.Element} The TabNav component.
 */
const TabNav: FC<TabNavProps> = ({
	children,
	_style = {},
	_htmlProps,
	isNarrow = false,
}) => {
	const { containerRef, isScrollableLeft, isScrollableRight, scroll } =
		useScrollable()
	const { suiInlineClassname } = useStyles(_style)

	const classes = generateCN(
		"sui-tab__nav",
		{
			narrow: isNarrow,
		},
		suiInlineClassname,
	)

	return (
		<div
			className={classes}
			role="tablist"
			aria-orientation="horizontal"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{isScrollableLeft && (
				<button
					className="sui-tab__arrow sui-tab__arrow--left"
					onClick={() => scroll("left")}
				>
					<ChevronLeft size="sm" />
				</button>
			)}
			<div className="sui-tab__navitems" ref={containerRef}>
				{/* Map through the children to clone and update their props */}
				{Children.map(children, (child: ReactNode, index: number) => {
					if (isValidElement(child)) {
						// Clone the child element and add the "id" prop with the current index
						return cloneElement(child, { id: `${index}` } as object)
					}
					return null
				})}
			</div>
			{isScrollableRight && (
				<button
					className="sui-tab__arrow sui-tab__arrow--right"
					onClick={() => scroll("right")}
				>
					<ChevronRight size="sm" />
				</button>
			)}
		</div>
	)
}

// Export the TabNav component
export { TabNav }
