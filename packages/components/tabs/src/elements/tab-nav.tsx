import React, {
	Children,
	cloneElement,
	FC,
	isValidElement,
	ReactNode,
	useEffect,
	useState,
	useRef,
} from "react"
import { ChevronLeft, ChevronRight } from "@wpmudev/sui-icons"

import { TabNavProps } from "../tabs.types"

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
	const navRef = useRef<HTMLDivElement | null>(null)
	const [isScrollableRight, setIsScrollableRight] = useState(false)
	const [isScrollableLeft, setIsScrollableLeft] = useState(false)

	const handleScroll = () => {
		if (navRef.current) {
			const navElement = navRef.current
			setIsScrollableRight(
				navElement.scrollLeft < navElement.scrollWidth - navElement.clientWidth,
			)
			setIsScrollableLeft(navElement.scrollLeft > 0)
		}
	}

	const handleScrollRight = () => {
		if (navRef.current) {
			navRef.current.scrollLeft += 100 // Adjust the scroll distance as needed
		}
	}

	const handleScrollLeft = () => {
		if (navRef.current) {
			navRef.current.scrollLeft -= 100 // Adjust the scroll distance as needed
		}
	}

	useEffect(() => {
		// Check if content is scrollable on mount
		handleScroll()

		// Add event listener to check if content is scrollable on scroll
		if (navRef.current) {
			navRef.current.addEventListener("scroll", handleScroll)
		}

		// Clean up the event listener when the component unmounts
		return () => {
			if (navRef.current) {
				navRef.current.removeEventListener("scroll", handleScroll)
			}
		}
	}, [])

	useEffect(() => {
		const handleResize = () => {
			// Recalculate scrollable states on window resize
			handleScroll()
		}

		window.addEventListener("resize", handleResize)

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<div className="sui-tab__nav" role="tablist" aria-orientation="horizontal">
			{isScrollableLeft && (
				<button
					className="sui-tab__arrow sui-tab__arrow--left"
					onClick={handleScrollLeft}
				>
					<ChevronLeft size="sm" />
				</button>
			)}
			<div className="sui-tab__navitems" ref={navRef}>
				{/* Map through the children to clone and update their props */}
				{Children.map(children, (child: ReactNode, index: number) => {
					if (isValidElement(child)) {
						// Clone the child element and add the "id" prop with the current index
						return cloneElement(child, { id: `${index}` })
					}
				})}
			</div>
			{isScrollableRight && (
				<button
					className="sui-tab__arrow sui-tab__arrow--right"
					onClick={handleScrollRight}
				>
					<ChevronRight size="sm" />
				</button>
			)}
		</div>
	)
}

// Export the TabNav component
export { TabNav }
