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

import { useDetectRTL } from "../../../../hooks/src/index"
import { TabNavProps, TabNavScrollDirection } from "../tabs.types"

/**
 * TabNav
 *
 * React component that represents the container for tab navigation
 * in a tabbed interface.
 *
 * @param {TabNavProps} props - Props for the TabNav component.
 * @return {JSX.Element} The TabNav component.
 */
const TabNav: FC<TabNavProps> = ({ children }) => {
	const [isScrollableRight, setIsScrollableRight] = useState<boolean>(false)
	const [isScrollableLeft, setIsScrollableLeft] = useState<boolean>(false)

	const navRef = useRef<HTMLDivElement | null>(null)

	// use RTL detector
	const isRTL = useDetectRTL()

	// Scroll information from the navRef, if available
	const {
		scrollLeft = 0,
		scrollWidth = 0,
		clientWidth = 0,
	} = navRef?.current ?? {}

	// Function to handle scroll events and determine scrollability
	const handleScroll = useCallback(() => {
		if (!navRef.current) {
			return
		}

		const navLeft = Math.abs(scrollLeft ?? 0)

		setIsScrollableRight(
			isRTL ? navLeft > 0 : navLeft < scrollWidth - clientWidth,
		)
		setIsScrollableLeft(
			isRTL ? navLeft < scrollWidth - clientWidth : navLeft > 0,
		)
	}, [clientWidth, isRTL, scrollLeft, scrollWidth])

	// Adjust the scroll distance as needed
	const scrollNav = (dir: TabNavScrollDirection) => {
		if (!!navRef.current && "scrollLeft" in navRef?.current) {
			// @ts-ignore
			navRef.current.scrollLeft =
				dir === "left" ? scrollLeft - 100 : scrollLeft + 100
		}
	}

	// Check if content is scrollable on mount and add scroll event listener
	useEffect(() => {
		handleScroll()
		navRef?.current?.addEventListener("scroll", handleScroll)

		// Clean up the event listener when the component unmounts
		return () => {
			if (!!navRef?.current) {
				navRef?.current?.removeEventListener("scroll", handleScroll)
			}
		}
	}, [handleScroll])

	// Recalculate scrollable states on window resize
	useEffect(() => {
		const handleResize = () => {
			handleScroll()
		}

		window.addEventListener("resize", handleResize)

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [handleScroll])

	return (
		<div className="sui-tab__nav" role="tablist" aria-orientation="horizontal">
			{isScrollableLeft && (
				<button
					className="sui-tab__arrow sui-tab__arrow--left"
					onClick={() => scrollNav("left")}
				>
					<ChevronLeft size="sm" />
				</button>
			)}
			<div className="sui-tab__navitems" ref={navRef}>
				{/* Map through the children to clone and update their props */}
				{Children.map(children, (child: ReactNode, index: number) => {
					if (isValidElement(child)) {
						// Clone the child element and add the "id" prop with the current index
						return cloneElement(child, { id: `${index}` } as object)
					}
				})}
			</div>
			{isScrollableRight && (
				<button
					className="sui-tab__arrow sui-tab__arrow--right"
					onClick={() => scrollNav("right")}
				>
					<ChevronRight size="sm" />
				</button>
			)}
		</div>
	)
}

// Export the TabNav component
export { TabNav }
