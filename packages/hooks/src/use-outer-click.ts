import { useCallback, useEffect, RefObject } from "react"

/**
 * Detect outer click
 *
 * @param {RefObject<any>} ref      Ref object to check outer click with
 * @param {Function}       callback Codes to execute when click outer
 */
const useOuterClick = (ref: RefObject<any>, callback: Function = () => {}) => {
	/**
	 * Detect if click is outside of the ref element, if so, execute callback
	 *
	 * @type {(event) => void}
	 */
	const onPageClick = useCallback(
		(event) => {
			if (ref?.current && !ref?.current.contains(event.target)) {
				callback()
			}
		},
		[callback, ref],
	)

	useEffect(() => {
		// Add event listener when the component mounts
		document.addEventListener("click", onPageClick)
		// Clean up the event listener when the component unmounts
		return () => {
			document.removeEventListener("click", onPageClick)
		}
	})
}

export { useOuterClick }
