import { useCallback, useEffect, useRef, useState } from "react"
import { useDetectRTL } from "./use-rtl-detect"

const useScrollable = ({ amount = 100 }: { amount?: number } = {}) => {
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
			isRTL ? navLeft > 0 : navLeft < scrollWidth - clientWidth,
		)
		setIsScrollableLeft(
			isRTL ? navLeft < scrollWidth - clientWidth : navLeft > 0,
		)
	}, [isRTL])

	const scroll = (direction: "left" | "right") => {
		if (containerRef.current) {
			containerRef.current.scrollLeft += direction === "left" ? -amount : amount
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
