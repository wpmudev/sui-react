import { HTMLProps, useCallback, useState } from "react"
import { isFunction } from "@wpmudev/sui-utils"

interface InteractionTypes
	extends Pick<
		HTMLProps<HTMLInputElement>,
		| "onMouseEnter"
		| "onMouseLeave"
		| "onMouseDownCapture"
		| "onMouseUpCapture"
		| "onFocus"
		| "onBlur"
		| "onBlurCapture"
	> {}

/**
 * Interaction hooks for component.
 *
 * @param {InteractionTypes} methods Interaction methods
 */
const useInteraction = (methods: InteractionTypes | Object) => {
	const [isHovered, setIsHovered] = useState<boolean>(false)
	const [isFocused, setIsFocused] = useState<boolean>(false)

	const {
		onMouseEnter,
		onMouseLeave,
		onMouseDownCapture,
		onMouseUpCapture,
		onFocus,
		onBlur,
		onBlurCapture,
	} = methods as InteractionTypes

	/**
	 * Toggle hover state
	 */
	const toggleHover = useCallback(
		(state, event = null, callback = (e: any) => {}) => {
			setIsHovered(state)

			// execute callback
			if (isFunction(callback)) {
				callback(event)
			}
		},
		[],
	)

	/**
	 * Toggle focus state
	 */
	const toggleFocus = useCallback(
		(state, event = null, callback = (e: any) => {}) => {
			setIsFocused(state)

			// execute callback
			if (isFunction(callback)) {
				callback(event)
			}
		},
		[],
	)

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

export { useInteraction, InteractionTypes }
