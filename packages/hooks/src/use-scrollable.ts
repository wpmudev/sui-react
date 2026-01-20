import { useCallback, useEffect, useRef, useState } from "react"
import { useDetectRTL } from "./use-rtl-detect"

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

	const findPartiallyVisibleItem = (direction: "left" | "right") => {
		if (!containerRef.current) return null

		const container = containerRef.current
		const children = Array.from(container.children) as HTMLElement[]
		const containerRect = container.getBoundingClientRect()
		const currentScroll = container.scrollLeft

		for (let i = 0; i < children.length; i++) {
			const child = children[i]
			const childRect = child.getBoundingClientRect()

			// Calculate relative positions within the container
			const childLeft = childRect.left - containerRect.left + currentScroll
			const childRight = childLeft + childRect.width
			const containerLeft = currentScroll
			const containerRight = currentScroll + container.clientWidth

			// Check if item is partially visible
			const isPartiallyLeft =
				childLeft < containerLeft && childRight > containerLeft
			const isPartiallyRight =
				childLeft < containerRight && childRight > containerRight

			if (direction === "left" && isPartiallyLeft) {
				// For left scroll, we want to show the hidden part on the left
				const hiddenWidth = containerLeft - childLeft
				return {
					element: child,
					hiddenWidth,
					targetScroll: childLeft - scrollOffset,
				}
			}

			if (direction === "right" && isPartiallyRight) {
				// For right scroll, we want to show the hidden part on the right
				const hiddenWidth = childRight - containerRight
				return {
					element: child,
					hiddenWidth,
					targetScroll: childRight - container.clientWidth + scrollOffset,
				}
			}
		}

		// If no partially visible item found, find the next completely hidden item
		for (let i = 0; i < children.length; i++) {
			const child = children[i]
			const childRect = child.getBoundingClientRect()

			const childLeft = childRect.left - containerRect.left + currentScroll
			const childRight = childLeft + childRect.width
			const containerLeft = currentScroll
			const containerRight = currentScroll + container.clientWidth

			if (direction === "left" && childRight <= containerLeft) {
				// Find the rightmost hidden item on the left
				let targetItem = child
				let targetIndex = i

				for (let j = i + 1; j < children.length; j++) {
					const nextChild = children[j]
					const nextChildRect = nextChild.getBoundingClientRect()
					const nextChildRight =
						nextChildRect.left -
						containerRect.left +
						currentScroll +
						nextChildRect.width

					if (nextChildRight <= containerLeft) {
						targetItem = nextChild
						targetIndex = j
					} else {
						break
					}
				}

				return {
					element: targetItem,
					hiddenWidth: targetItem.offsetWidth,
					targetScroll: childLeft - scrollOffset,
				}
			}

			if (direction === "right" && childLeft >= containerRight) {
				// First completely hidden item on the right
				return {
					element: child,
					hiddenWidth: child.offsetWidth,
					targetScroll: childLeft - scrollOffset,
				}
			}
		}

		return null
	}

	const scroll = (direction: "left" | "right") => {
		if (!containerRef.current) return
		const container = containerRef.current
		const targetItem = findPartiallyVisibleItem(direction)

		container.scrollTo({
			left: targetItem?.targetScroll ?? 0,
			behavior: "smooth",
		})
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
