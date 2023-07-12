import { useCallback, useState } from "react"

export interface InteractionTypes {
	onMouseEnter?: (e: MouseEvent | unknown) => void
	onMouseLeave?: (e: MouseEvent | unknown) => void
	onMouseDownCapture?: (e: MouseEvent | unknown) => void
	onMouseUpCapture?: (e: MouseEvent | unknown) => void
	onFocus?: (e: FocusEvent) => void
	onBlur?: (e: FocusEvent) => void
	onBlurCapture?: (e: FocusEvent) => void
}

/**
 * Use state detection
 *
 * @param {any} onMouseEnter
 * @param {any} onMouseLeave
 * @param {any} onMouseDownCapture
 * @param {any} onMouseUpCapture
 * @param {any} onFocus
 * @param {any} onBlur
 * @param onBlurCapture
 *
 * @return {{isHovered: boolean, methods: {onMouseEnter: (e: Event) => void, onMouseLeave: (e: Event) => void}, isFocused: boolean}}
 */
const useInteraction = ({
	onMouseEnter = () => {},
	onMouseLeave = () => {},
	onMouseDownCapture = () => {},
	onMouseUpCapture = () => {},
	onFocus = () => {},
	onBlur = () => {},
	onBlurCapture = () => {},
}: InteractionTypes) => {
	const [isHovered, setIsHovered] = useState<boolean>(false)
	const [isFocused, setIsFocused] = useState<boolean>(false)

	/**
	 * Toggle hover state
	 */
	const toggleHover = useCallback(
		(state, event = null, callback = false) => {
			setIsHovered(state)

			// execute callback
			if ("function" === typeof callback) {
				callback(event)
			}
		},
		[isHovered],
	)

	/**
	 * Toggle focus state
	 */
	const toggleFocus = useCallback((state, event = null, callback = false) => {
		setIsFocused(state)

		// execute callback
		if ("function" === typeof callback) {
			callback(event)
		}
	}, [])

	/**
	 * When mouse enters
	 *
	 * @type {(e: Event) => void}
	 */
	const onMouseEnterCallback = useCallback(
		(e: MouseEvent | unknown) => toggleHover(true, e, onMouseEnter),
		[onMouseEnter, toggleHover],
	)

	/**
	 * When mouse leaves
	 *
	 * @type {(e: Event) => void}
	 */
	const onMouseLeaveCallback = useCallback(
		(e: MouseEvent | unknown) => toggleHover(false, e, onMouseLeave),
		[onMouseLeave, toggleHover],
	)

	/**
	 * When mouse down capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onMouseDownCaptureCallback = useCallback(
		(e: MouseEvent | unknown) => toggleFocus(false, e, onMouseDownCapture),
		[onMouseDownCapture, toggleFocus],
	)

	/**
	 * When mouse up capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onMouseUpCaptureCallback = useCallback(
		(e: MouseEvent | unknown) => toggleFocus(true, e, onMouseUpCapture),
		[onMouseUpCapture, toggleFocus],
	)

	/**
	 * When mouse up capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onBlurCaptureCallback = useCallback(
		(e: MouseEvent | unknown) => toggleHover(false, e, onBlurCapture),
		[onBlurCapture, toggleHover],
	)

	/**
	 * When mouse up capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onBlurCallback = useCallback(
		(e: MouseEvent | unknown) => toggleFocus(false, e, onBlur),
		[onBlur, toggleFocus],
	)

	/**
	 * When mouse up capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onFocusCallback = useCallback(
		(e: MouseEvent | unknown) => toggleFocus(true, e, onFocus),
		[onFocus, toggleFocus],
	)

	return [
		isHovered,
		isFocused,
		{
			onMouseEnter: onMouseEnterCallback,
			onMouseLeave: onMouseLeaveCallback,
			onMouseDownCapture: onMouseDownCaptureCallback,
			onMouseUpCapture: onMouseUpCaptureCallback,
			onFocus: onFocusCallback,
			onBlur: onBlurCallback,
			onBlurCapture: onBlurCaptureCallback,
		},
		toggleHover,
		toggleFocus,
	] as const
}

export { useInteraction }
