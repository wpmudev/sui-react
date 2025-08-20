import { useCallback, useEffect, useRef, useState } from "react"
import { useDetectRTL } from "./use-rtl-detect"

const getNormalizedScrollLeft = (el: HTMLElement, isRTL: boolean) => {
	if (!isRTL) return el.scrollLeft

	// RTL cases
	// Chrome/Safari: negative scrollLeft
	if (el.scrollLeft < 0) {
		return -el.scrollLeft
	}

	// Firefox: positive but reversed
	return el.scrollWidth - el.clientWidth - el.scrollLeft
}

const useScrollable = ({ scrollOffset = 0 }) => {
	const [isScrollableRight, setIsScrollableRight] = useState(false)
	const [isScrollableLeft, setIsScrollableLeft] = useState(false)
	const containerRef = useRef<HTMLDivElement | null>(null)
	const isRTL = useDetectRTL()

	const handleScroll = useCallback(() => {
		const current = containerRef.current
		if (!current) return

		const { scrollLeft, scrollWidth, clientWidth } = current
		const navLeft = Math.abs(scrollLeft ?? 0)

		setIsScrollableRight(
			isRTL ? navLeft >= 1 : navLeft < scrollWidth - clientWidth - 1,
		)
		setIsScrollableLeft(
			isRTL ? navLeft < scrollWidth - clientWidth - 1 : navLeft >= 1,
		)
	}, [isRTL])

	const scroll = (direction: "left" | "right") => {
		if (!containerRef.current) return
		const container = containerRef.current
		const children = Array.from(container.children) as HTMLElement[]
		const currentScroll = getNormalizedScrollLeft(container, isRTL)

		if (direction === "left") {
			// Find the last child fully/partially hidden on the left
			const hiddenChild = [...children]
				.reverse()
				.find((child) => child.offsetLeft < currentScroll)
			if (hiddenChild) {
				const target = hiddenChild.offsetLeft - scrollOffset
				container.scrollTo({
					left: isRTL ? -target : target,
					behavior: "smooth",
				})
			}
		} else {
			// Find the first child fully/partially hidden on the right
			const hiddenChild = children.find(
				(child) =>
					child.offsetLeft + child.offsetWidth >
					currentScroll + container.clientWidth,
			)
			if (hiddenChild) {
				const target =
					hiddenChild.offsetLeft +
					hiddenChild.offsetWidth -
					container.clientWidth +
					scrollOffset
				container.scrollTo({
					left: isRTL ? -target : target,
					behavior: "smooth",
				})
			}
		}
	}

	useEffect(() => {
		const current = containerRef.current
		if (!current) return

		handleScroll()
		current.addEventListener("scroll", handleScroll)

		return () => {
			current.removeEventListener("scroll", handleScroll)
		}
	}, [handleScroll])

	useEffect(() => {
		const handleResize = () => handleScroll()
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [handleScroll])

	// Observe the container.
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					handleScroll()
				}
			},
			{ threshold: 0.1 },
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => observer.disconnect()
	}, [handleScroll])

	return { containerRef, isScrollableLeft, isScrollableRight, scroll }
}

export { useScrollable }
