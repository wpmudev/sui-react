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

import { useDetectRTL, useStyles } from "@wpmudev/sui-hooks"
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
const TabNav: FC<TabNavProps> = ({ children, _style = {}, _htmlProps }) => {
	const [isScrollableRight, setIsScrollableRight] = useState<boolean>(false)
	const [isScrollableLeft, setIsScrollableLeft] = useState<boolean>(false)
	const [navRefCurrent, setNavRefCurrent] = useState<HTMLDivElement | null>(
		null,
	)

	const navRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		setNavRefCurrent(navRef?.current)
	}, [navRef])

	// use RTL detector
	const isRTL = useDetectRTL()

	// Function to handle scroll events and determine scrollability
	const handleScroll = useCallback(() => {
		if (!navRefCurrent) {
			return
		}

		// Scroll information from the navRef, if available
		const {
			scrollLeft = 0,
			scrollWidth = 0,
			clientWidth = 0,
		} = navRefCurrent ?? {}

		const navLeft = Math.abs(scrollLeft ?? 0)

		setIsScrollableRight(
			isRTL ? navLeft > 0 : navLeft < scrollWidth - clientWidth,
		)
		setIsScrollableLeft(
			isRTL ? navLeft < scrollWidth - clientWidth : navLeft > 0,
		)
	}, [isRTL, navRefCurrent])

	const ARROW_OVERLAY_WIDTH = 48 // px

	const scrollNav = (dir: TabNavScrollDirection) => {
		if (!navRefCurrent) return

		const container = navRefCurrent
		// eslint-disable-next-line @typescript-eslint/no-shadow
		const children = Array.from(container.children) as HTMLElement[]
		const { scrollLeft, clientWidth } = container

		if (children.length === 0) return

		if (dir === "right") {
			for (let i = 0; i < children.length; i++) {
				const item = children[i]
				const itemLeft = item.offsetLeft
				const itemRight = itemLeft + item.offsetWidth

				// Find the first partially hidden item on the right
				if (itemRight > scrollLeft + clientWidth - ARROW_OVERLAY_WIDTH) {
					container.scrollTo({
						left: itemRight - clientWidth + ARROW_OVERLAY_WIDTH, // leave arrow space
						behavior: "smooth",
					})
					break
				}
			}
		} else if (dir === "left") {
			for (let i = children.length - 1; i >= 0; i--) {
				const item = children[i]
				const itemLeft = item.offsetLeft

				// Find the first partially hidden item on the left
				if (itemLeft < scrollLeft + ARROW_OVERLAY_WIDTH) {
					container.scrollTo({
						left: itemLeft - ARROW_OVERLAY_WIDTH, // leave arrow space
						behavior: "smooth",
					})
					break
				}
			}
		}
	}

	// Check if content is scrollable on mount and add scroll event listener
	useEffect(() => {
		const currentNavRef = navRef?.current

		handleScroll()
		currentNavRef?.addEventListener("scroll", handleScroll)

		// Clean up the event listener when the component unmounts
		return () => {
			currentNavRef?.removeEventListener("scroll", handleScroll)
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

	const { suiInlineClassname } = useStyles(_style)

	return (
		<div
			className={generateCN("sui-tab__nav", {}, suiInlineClassname)}
			role="tablist"
			aria-orientation="horizontal"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
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
					return null
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
