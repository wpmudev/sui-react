import React, { useCallback, useEffect, RefObject, Ref } from "react"

/**
 * Detect bottom end
 *
 * @param {Function} onBottomReach actions to be executed when scroll hit bottom
 */
const useBottomEnd = (onBottomReach = () => {}) => {
	const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
		// @ts-ignore
		const { scrollHeight, scrollTop, clientHeight } = e?.target ?? {}

		if (scrollHeight - scrollTop === clientHeight) {
			onBottomReach()
		}
	}

	return { handleScroll }
}

export { useBottomEnd }
