import React, { useLayoutEffect, RefObject, useState } from "react"

/**
 * Detects if the text height exceeds the maximum allowed lines.
 *
 * @param {RefObject<HTMLElement>} ref        - The reference to the target element.
 * @param {number}                 maxLines   - The maximum number of lines allowed before overflow.
 * @param {any}                    dependency - The dependency that triggers recalculation (e.g., text).
 * @return {boolean} - Returns `true` if the text overflows the allowed lines, otherwise `false`.
 */

const useIsOverflowing = (
	ref: RefObject<HTMLElement>,
	maxLines: number,
	dependency: any,
) => {
	const [isOverflowing, setIsOverflowing] = useState(false)

	useLayoutEffect(() => {
		if (ref.current) {
			const lineHeight = parseFloat(
				window.getComputedStyle(ref.current).lineHeight,
			)
			const maxHeight = lineHeight * maxLines
			setIsOverflowing(ref.current.scrollHeight > maxHeight)
		}
	}, [dependency, maxLines, ref])

	return isOverflowing
}

export { useIsOverflowing }
