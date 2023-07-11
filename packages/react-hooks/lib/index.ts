import { useCallback, useState } from "react"

export interface InteractionTypes {
	onMouseEnter?: (e: MouseEvent) => void
	onMouseLeave?: (e: MouseEvent) => void
	onMouseDownCapture?: (e: MouseEvent) => void
	onMouseUpCapture?: (e: MouseEvent) => void
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
	const toggleHover = useCallback((state, callback, event) => {
		setIsHovered(state)

		// execute callback
		if (callback) {
			callback(event)
		}
	}, [])

	/**
	 * Toggle focus state
	 */
	const toggleFocus = useCallback((state, callback, event) => {
		setIsFocused(state)

		// execute callback
		if (callback) {
			callback(event)
		}
	}, [])

	/**
	 * When mouse enters
	 *
	 * @type {(e: Event) => void}
	 */
	const onMouseEnterCallback = useCallback(
		(e: MouseEvent) => toggleHover(true, onMouseEnter, e),
		[onMouseEnter, toggleHover],
	)

	/**
	 * When mouse leaves
	 *
	 * @type {(e: Event) => void}
	 */
	const onMouseLeaveCallback = useCallback(
		(e: MouseEvent) => toggleHover(false, onMouseLeave, e),
		[onMouseLeave, toggleHover],
	)

	/**
	 * When mouse down capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onMouseDownCaptureCallback = useCallback(
		(e: MouseEvent) => toggleFocus(false, onMouseDownCapture, e),
		[onMouseDownCapture, toggleFocus],
	)

	/**
	 * When mouse up capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onMouseUpCaptureCallback = useCallback(
		(e: MouseEvent) => toggleFocus(true, onMouseUpCapture, e),
		[onMouseUpCapture, toggleFocus],
	)

	/**
	 * When mouse up capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onBlurCaptureCallback = useCallback(
		(e: MouseEvent) => toggleHover(false, onBlurCapture, e),
		[onBlurCapture, toggleHover],
	)

	/**
	 * When mouse up capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onBlurCallback = useCallback(
		(e: MouseEvent) => toggleFocus(false, onBlur, e),
		[onBlur, toggleFocus],
	)

	/**
	 * When mouse up capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onFocusCallback = useCallback(
		(e: MouseEvent) => toggleFocus(true, onFocus, e),
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
	] as const
}

export { useInteraction }
