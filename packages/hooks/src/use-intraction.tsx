import { HTMLProps, useCallback, useState } from "react"
import { isFunction } from "@wpmudev/sui-utils"

interface InteractionTypes
	extends Pick<
		HTMLProps<HTMLButtonElement | HTMLAnchorElement>,
		| "onMouseEnter"
		| "onMouseLeave"
		| "onMouseDownCapture"
		| "onMouseUp"
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
		onMouseUp,
		onMouseUpCapture,
		onFocus,
		onBlur,
		onBlurCapture,
	} = methods as InteractionTypes

	// @todo: need type fix
	type EventType = any

	/**
	 * Toggle hover state
	 */
	const toggleHover = useCallback(
		(state: boolean, event?: EventType, callback = (e: EventType) => {}) => {
			setIsHovered(state)

			// execute callback
			if (isFunction(callback) && !!callback) {
				callback(event)
			}
		},
		[],
	)

	/**
	 * Toggle focus state
	 */
	const toggleFocus = useCallback(
		(state: boolean, event?: EventType, callback = (e: EventType) => {}) => {
			setIsFocused(state)

			// execute callback
			if (isFunction(callback) && !!callback) {
				callback(event)
			}
		},
		[],
	)

	/**
	 * In Safari, an element doesn't receive focus on click, which means onBlur doesn't fire.
	 * Consequently, it needs to be manually focused.
	 *
	 * @type {(e: Event) => void}
	 */
	const onMouseUpCallback = useCallback(
		(e: EventType) => {
			const target = e?.currentTarget

			if (!!target) {
				// manually focus
				target?.focus()
				// toggle focus
				toggleFocus(true, e, (event) => {
					if (onMouseUp) {
						// @ts-ignore
						onMouseUp(event)
					}
				})
			}
		},
		[onMouseUp, toggleFocus],
	)

	/**
	 * When mouse enters
	 *
	 * @type {(e: Event) => void}
	 */
	const onMouseEnterCallback = useCallback(
		(e: EventType) =>
			toggleHover(true, e, (event) => {
				if (onMouseEnter) {
					// @ts-ignore
					onMouseEnter(event)
				}
			}),
		[onMouseEnter, toggleHover],
	)

	/**
	 * When mouse leaves
	 *
	 * @type {(e: Event) => void}
	 */
	const onMouseLeaveCallback = useCallback(
		(e: EventType) =>
			toggleHover(false, e, () => {
				if (onMouseLeave) {
					// @ts-ignore
					onMouseLeave(event)
				}
			}),
		[onMouseLeave, toggleHover],
	)

	/**
	 * When mouse down capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onMouseDownCaptureCallback = useCallback(
		(e: EventType) =>
			toggleFocus(false, e, (event) => {
				if (onMouseDownCapture) {
					// @ts-ignore
					onMouseDownCapture(event)
				}
			}),
		[onMouseDownCapture, toggleFocus],
	)

	/**
	 * When mouse up capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onMouseUpCaptureCallback = useCallback(
		(e: EventType) =>
			toggleFocus(true, e, (event) => {
				if (onMouseUpCapture) {
					// @ts-ignore
					onMouseUpCapture(event)
				}
			}),
		[onMouseUpCapture, toggleFocus],
	)

	/**
	 * When mouse up capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onBlurCaptureCallback = useCallback(
		(e: EventType) =>
			toggleHover(false, e, (event) => {
				if (onBlurCapture) {
					// @ts-ignore
					onBlurCapture(event)
				}
			}),
		[onBlurCapture, toggleHover],
	)

	/**
	 * When mouse up capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onBlurCallback = useCallback(
		(e: EventType) =>
			toggleFocus(false, e, (event) => {
				if (onBlur) {
					// @ts-ignore
					onBlur(event)
				}
			}),
		[onBlur, toggleFocus],
	)

	/**
	 * When mouse up capture
	 *
	 * @type {(e: Event) => void}
	 */
	const onFocusCallback = useCallback(
		(e: EventType) =>
			toggleFocus(true, e, (event) => {
				if (onFocus) {
					// @ts-ignore
					onFocus(event)
				}
			}),
		[onFocus, toggleFocus],
	)

	return [
		isHovered,
		isFocused,
		{
			onMouseUp: onMouseUpCallback,
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
export type { InteractionTypes }
