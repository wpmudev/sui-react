import { useCallback, useEffect, useRef, useState } from "react"
import { useDetectRTL } from "./use-rtl-detect"

const useScrollable = () => {
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
		if (containerRef.current) {
			const container = containerRef.current
			const containerRect = container.getBoundingClientRect()

			if (direction === "left") {
				// Find the first child that's partially or fully hidden on the left
				const hiddenChild = Array.from(container.children).find((child) => {
					const { left } = (child as HTMLElement).getBoundingClientRect()
					return left < containerRect.left
				})

				if (hiddenChild) {
					container.scrollLeft -= (hiddenChild as HTMLElement).offsetWidth
				}
			} else {
				// Find the first child that's partially or fully hidden on the right
				const hiddenChild = Array.from(container.children).find((child) => {
					const { right } = child.getBoundingClientRect()
					return right > containerRect.right
				})

				if (hiddenChild) {
					container.scrollLeft += (hiddenChild as HTMLElement).offsetWidth
				}
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
