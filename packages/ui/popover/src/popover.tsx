import React, {
	useId,
	useCallback,
	useState,
	useRef,
	LegacyRef,
	CSSProperties,
	useEffect,
	isValidElement,
	cloneElement,
	ReactElement,
} from "react"
import {
	_renderHTMLPropsSafely,
	generateCN,
	handleOnKeyDown,
	isEmpty,
	isUndefined,
} from "@wpmudev/sui-utils"
import {
	useOuterClick,
	useDetectRTL,
	useDefaultChildren,
	useStyles,
} from "@wpmudev/sui-hooks"
import { Button } from "@wpmudev/sui-button"

import { PopoverProps } from "./popover.types"

// Popover component
const Popover: React.FC<PopoverProps> = ({
	id,
	isOpen = false,
	image,
	trigger = "Open Popup",
	className,
	header,
	children,
	placement = "top",
	footer,
	displayOnHover = false,
	popupWidth,
	popupProps,
	_htmlProps = {},
	_style = {},
}) => {
	const generatedId = useId()
	const popoverId = id || `sui-popover-${generatedId}`
	const [isPopupOpen, setIsPopupOpen] = useState<boolean>(isOpen ?? false)
	const [popupPositions, setPopupPositions] = useState<Record<string, any>>({
		top: 0,
		right: "auto",
	})
	const [adjustedPlacement, setAdjustedPlacement] = useState<string>(placement)

	// default children content
	children = useDefaultChildren(children)

	// detect RTL
	const isRTL = useDetectRTL()

	const ref = useRef<HTMLDivElement | null>(null)
	const triggerRef = useRef<HTMLDivElement | null>(null)
	const popupRef = useRef<HTMLDivElement | null>(null)
	const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

	const { suiInlineClassname } = useStyles(_style, className ?? "")

	// class names
	const classNames = generateCN(
		"sui-popover",
		{
			open: isPopupOpen,
			image: !isUndefined(image) && !isEmpty(image),
			[`${adjustedPlacement}`]: true,
		},
		suiInlineClassname,
	)

	useOuterClick(ref, () => {
		setIsPopupOpen(false)
	})

	/**
	 * Display popup when click on it
	 */
	const onTriggerClick = useCallback(() => {
		// Do nothing, when popup supposed to be displayed on hover
		if (displayOnHover) {
			return
		}

		setIsPopupOpen(!isPopupOpen)
	}, [displayOnHover, isPopupOpen])

	const onMouseEnter = useCallback(() => {
		// Do not do anything in case of displayOnHover is false
		if (!displayOnHover) {
			return
		}

		// Clear any pending close timeout
		if (closeTimeoutRef.current) {
			clearTimeout(closeTimeoutRef.current)
			closeTimeoutRef.current = null
		}

		setIsPopupOpen(true)
	}, [displayOnHover])

	const onMouseLeave = useCallback(() => {
		// Do not do anything in case of displayOnHover is false
		if (!displayOnHover) {
			return
		}

		// Delay closing to allow mouse to reach the popup
		closeTimeoutRef.current = setTimeout(() => {
			setIsPopupOpen(false)
			closeTimeoutRef.current = null
		}, 500)
	}, [displayOnHover])

	// Cleanup timeout on unmount
	useEffect(() => {
		return () => {
			if (closeTimeoutRef.current) {
				clearTimeout(closeTimeoutRef.current)
			}
		}
	}, [])

	/**
	 * Check if popover fits in viewport and adjust placement if needed
	 */
	const getAdjustedPlacement = useCallback(
		(
			triggerRect: DOMRect,
			popupW: number,
			popupH: number,
			currentPlacement: string,
		): string => {
			const viewportWidth = window.innerWidth
			const viewportHeight = window.innerHeight
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop
			const scrollLeft =
				window.pageXOffset || document.documentElement.scrollLeft

			// Calculate absolute positions for the trigger element
			const triggerTop = triggerRect.top + scrollTop
			const triggerLeft = triggerRect.left + scrollLeft
			const triggerBottom = triggerTop + triggerRect.height
			const triggerRight = triggerLeft + triggerRect.width

			// Helper to check if a position fits
			const checkFit = (positionToCheck: string): boolean => {
				let popupTop = 0
				let popupLeft = 0

				switch (positionToCheck) {
					case "top":
					case "top-left":
					case "top-right":
						popupTop = triggerTop - popupH - 16
						break
					case "bottom":
					case "bottom-left":
					case "bottom-right":
						popupTop = triggerBottom + 16
						break
					case "left":
					case "left-top":
					case "left-bottom":
						popupTop = triggerTop + triggerRect.height / 2 - popupH / 2
						break
					case "right":
					case "right-top":
					case "right-bottom":
						popupTop = triggerTop + triggerRect.height / 2 - popupH / 2
						break
				}

				switch (positionToCheck) {
					case "top":
					case "bottom":
						popupLeft = triggerLeft + triggerRect.width / 2 - popupW / 2
						break
					case "top-left":
					case "bottom-left":
						popupLeft = triggerLeft - popupW + triggerRect.width / 2 + 26
						break
					case "top-right":
					case "bottom-right":
						popupLeft = triggerLeft + triggerRect.width / 2 - 26
						break
					case "left":
					case "left-top":
					case "left-bottom":
						popupLeft = triggerLeft - popupW - 16
						break
					case "right":
					case "right-top":
					case "right-bottom":
						popupLeft = triggerRight + 16
						break
				}

				// Check if popup fits in viewport
				const fitsVertically =
					popupTop >= scrollTop &&
					popupTop + popupH <= scrollTop + viewportHeight
				const fitsHorizontally =
					popupLeft >= scrollLeft &&
					popupLeft + popupW <= scrollLeft + viewportWidth

				return fitsVertically && fitsHorizontally
			}

			// First, check if current placement fits
			if (checkFit(currentPlacement)) {
				return currentPlacement
			}

			// Define fallback order based on current placement
			const fallbackOrder: Record<string, string[]> = {
				top: ["bottom", "right", "left", "top-right", "top-left"],
				"top-left": [
					"bottom-left",
					"top-right",
					"bottom-right",
					"right",
					"left",
				],
				"top-right": [
					"bottom-right",
					"top-left",
					"bottom-left",
					"left",
					"right",
				],
				bottom: ["top", "right", "left", "bottom-right", "bottom-left"],
				"bottom-left": [
					"top-left",
					"bottom-right",
					"top-right",
					"right",
					"left",
				],
				"bottom-right": [
					"top-right",
					"bottom-left",
					"top-left",
					"left",
					"right",
				],
				left: ["right", "top", "bottom", "left-top", "left-bottom"],
				"left-top": [
					"right-top",
					"left-bottom",
					"right-bottom",
					"top",
					"bottom",
				],
				"left-bottom": [
					"right-bottom",
					"left-top",
					"right-top",
					"bottom",
					"top",
				],
				right: ["left", "top", "bottom", "right-top", "right-bottom"],
				"right-top": [
					"left-top",
					"right-bottom",
					"left-bottom",
					"top",
					"bottom",
				],
				"right-bottom": [
					"left-bottom",
					"right-top",
					"left-top",
					"bottom",
					"top",
				],
			}

			// Try fallback positions
			const fallbacks = fallbackOrder[currentPlacement] || []
			for (const fallbackPlacement of fallbacks) {
				if (checkFit(fallbackPlacement)) {
					return fallbackPlacement
				}
			}

			// If nothing fits, return the original placement
			return currentPlacement
		},
		[],
	)

	useEffect(() => {
		const el = triggerRef?.current
		const { clientWidth, clientHeight } = el as HTMLDivElement
		const { clientWidth: popupW, clientHeight: popupH } =
			popupRef?.current as HTMLDivElement

		if (!isPopupOpen) {
			return
		}

		// Get trigger element's position and check for best placement
		const triggerRect = el?.getBoundingClientRect() as DOMRect
		const bestPlacement = getAdjustedPlacement(
			triggerRect,
			popupW,
			popupH,
			placement,
		)
		setAdjustedPlacement(bestPlacement)

		let pos = {}

		switch (bestPlacement) {
			case "top":
				pos = {
					[isRTL ? "right" : "left"]: 0 - popupW / 2 + clientWidth / 2,
					top: -(16 + popupH),
				}
				break
			case "top-left":
				pos = {
					[isRTL ? "right" : "left"]: -(popupW - clientWidth / 2 - 26),
					top: -(16 + popupH),
				}
				break
			case "top-right":
				pos = {
					[isRTL ? "right" : "left"]: clientWidth / 2 - 26,
					top: -(16 + popupH),
				}
				break
			case "left":
				pos = {
					[isRTL ? "right" : "left"]: 0 - (popupW + 16),
					top: clientHeight / 2 - popupH / 2,
				}
				break
			case "left-top":
				pos = {
					[isRTL ? "right" : "left"]: 0 - (popupW + 16),
					top: -(popupH - clientHeight / 2 - 26),
				}
				break
			case "left-bottom":
				pos = {
					[isRTL ? "right" : "left"]: 0 - (popupW + 16),
					top: clientHeight / 2 - 26,
				}
				break
			case "right":
				pos = {
					[isRTL ? "right" : "left"]: clientWidth + 16,
					top: clientHeight / 2 - popupH / 2,
				}
				break
			case "right-top":
				pos = {
					[isRTL ? "right" : "left"]: clientWidth + 16,
					top: -(popupH - clientHeight / 2 - 26),
				}
				break
			case "right-bottom":
				pos = {
					[isRTL ? "right" : "left"]: clientWidth + 16,
					top: clientHeight / 2 - 26,
				}
				break
			case "bottom":
				pos = {
					[isRTL ? "right" : "left"]: clientWidth / 2 - popupW / 2,
					top: clientHeight + 16,
				}
				break
			case "bottom-left":
				pos = {
					[isRTL ? "right" : "left"]: -(popupW - clientWidth / 2 - 26),
					top: clientHeight + 16,
				}
				break
			case "bottom-right":
				pos = {
					[isRTL ? "right" : "left"]: clientWidth / 2 - 26,
					top: clientHeight + 16,
				}
				break
		}

		setPopupPositions({
			...popupPositions,
			...pos,
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [trigger, popupRef, isPopupOpen, placement, getAdjustedPlacement])

	return (
		<div
			id={popoverId}
			ref={ref as LegacyRef<HTMLDivElement>}
			className={!!classNames ? classNames : undefined}
			data-testid="popover"
			onMouseLeave={onMouseLeave}
		>
			<div
				ref={triggerRef as LegacyRef<HTMLDivElement>}
				className="sui-popover__trigger"
				{...(!isValidElement(trigger) && {
					role: "button",
					tabIndex: 0,
					onKeyDown: (e) => handleOnKeyDown(e, onTriggerClick),
					onClick: onTriggerClick,
					onMouseEnter,
				})}
			>
				{isValidElement(trigger)
					? cloneElement(trigger as ReactElement, {
							onKeyDown: (e: React.KeyboardEvent<HTMLElement>) =>
								handleOnKeyDown(e, onTriggerClick),
							onClick: onTriggerClick,
							onMouseEnter,
					  })
					: trigger}
			</div>

			<div
				ref={popupRef as LegacyRef<HTMLDivElement>}
				className="sui-popover__popup"
				style={{ ...popupPositions, width: popupWidth } as CSSProperties}
				onMouseEnter={onMouseEnter}
				{...popupProps}
				{..._renderHTMLPropsSafely(_htmlProps)}
			>
				<div className="sui-popover__popup-arrow"></div>
				<div className="sui-popover__popup-wrapper">
					{!displayOnHover && (
						<div className="sui-popover__popup-close">
							<Button
								icon="Close"
								iconOnly={true}
								colorScheme="black"
								isSmall={true}
								type="tertiary"
								onClick={onTriggerClick}
							>
								{"Close"}
							</Button>
						</div>
					)}
					{image && (
						<div
							className="sui-popover__popup-image"
							style={{
								backgroundImage: `url("${image}")`,
							}}
						/>
					)}
					<div className="sui-popover__popup-inner">
						{header && (
							<div className="sui-heading--h5 sui-popover__popup-header">
								{header}
							</div>
						)}
						<div className="sui-popover__popup-content">{children}</div>
						{!!footer && (
							<div className="sui-popover__popup-footer">{footer}</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

// Publish required component.
export { Popover }
