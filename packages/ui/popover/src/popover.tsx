import React, {
	useCallback,
	useState,
	useRef,
	LegacyRef,
	CSSProperties,
	useEffect,
} from "react"
import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"
import { useOuterClick } from "@wpmudev/sui-hooks"

import { PopoverProps } from "./popover.types"
import { Close } from "@wpmudev/sui-icons"

// Build "Tooltip" component.
const Popover: React.FC<PopoverProps> = ({
	image,
	trigger,
	className,
	header,
	children,
	footer,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(true)
	const [direction, setDirection] = useState("")
	const [position, setPopupPosition] = useState<Record<CSSProperties, any>>({
		top: 0,
		right: "auto",
	})

	const ref = useRef<HTMLDivElement | null>(null)
	const targetRef = useRef<HTMLDivElement | null>(null)
	const popupRef = useRef<HTMLDivElement | null>(null)
	// const targetRef = document.getElementsByTagName("body")[0]

	const classNames = generateCN(
		"sui-popover",
		{
			open: isOpen,
			[`${direction}`]: true,
		},
		className ?? "",
	)

	useOuterClick(ref, () => {
		setIsOpen(false)
	})

	const onTriggerClick = useCallback(() => {
		setIsOpen(!isOpen)
	}, [isOpen])

	const positions = [
		"top-left",
		"top-center",
		"top-right",
		"right-top",
		"right-center",
		"right-bottom",
		"bottom-left",
		"bottom-center",
		"bottom-right",
		"left-top",
		"left-center",
		"left-bottom",
	]

	useEffect(() => {
		if (targetRef.current && popupRef.current) {
			const target = targetRef.current.getBoundingClientRect()
			const popup = popupRef.current.getBoundingClientRect()
			const parent = targetRef.current.parentElement.getBoundingClientRect() // Get parent's bounding rect

			let selectedPosition = null

			const poses = {
				"top-left": {
					top: target.top - popup.height - parent.top,
					left: target.left - parent.left,
				},
				"top-center": {
					top: target.top - popup.height - parent.top,
					left: target.left + (target.width - popup.width) / 2 - parent.left,
				},
				"top-right": {
					top: target.top - popup.height - parent.top,
					left: target.right - popup.width - parent.left,
				},
				"right-top": {
					top: target.top - parent.top,
					left: target.right - parent.left,
				},
				"right-center": {
					top: target.top + (target.height - popup.height) / 2 - parent.top,
					left: target.right - parent.left,
				},
				"right-bottom": {
					top: target.bottom - popup.height - parent.top,
					left: target.right - parent.left,
				},
				"bottom-left": {
					top: target.bottom - parent.top,
					left: target.left - parent.left,
				},
				"bottom-center": {
					top: target.bottom - parent.top,
					left: target.left + (target.width - popup.width) / 2 - parent.left,
				},
				"bottom-right": {
					top: target.bottom - parent.top,
					left: target.right - popup.width - parent.left,
				},
				"left-top": {
					top: target.top - parent.top,
					left: target.left - popup.width - parent.left,
				},
				"left-center": {
					top: target.top + (target.height - popup.height) / 2 - parent.top,
					left: target.left - popup.width - parent.left,
				},
				"left-bottom": {
					top: target.bottom - popup.height - parent.top,
					left: target.left - popup.width - parent.left,
				},
				default: {
					top: target.top - popup.height - parent.top,
					left: target.left - parent.left,
				},
			}

			const availablePositions = Object.keys(poses).filter((pos, index) => {
				const data = poses[pos]

				console.log("pos", window.innerWidth, target.left, popup.left)

				return (
					window.innerWidth - (target.left + data.left) >= popup.width &&
					window.innerHeight - (target.top + data.top) >= popup.height
				)
			})

			if (!!availablePositions[0]) {
				console.log(
					"availablePositions[0]",
					availablePositions[0],
					availablePositions,
				)
				setDirection(availablePositions[0])
				setPopupPosition(poses[availablePositions[0]])
			}

			// positions.some((pos) => {
			// 	let top = 0,
			// 		left = 0
			//
			// 	if (
			// 		top >= 0 &&
			// 		left >= 0 &&
			// 		top + popup.height <= window.innerHeight &&
			// 		left + popup.width <= window.innerWidth
			// 	) {
			// 		selectedPosition = position
			// 		console.log("position", position)
			// 		setPopupPosition({ top, left })
			// 		return true
			// 	}
			// 	return false
			// })

			// If no suitable position found, default to 'top-left'
			// if (!selectedPosition) {
			// 	selectedPosition = "top-left"
			// 	setPopupPosition({
			// 		top: target.top - popup.height - parent.top,
			// 		left: target.left - parentRect.left,
			// 	})
			// }
		}
	}, [isOpen, targetRef, popupRef])

	return (
		<div
			ref={ref as LegacyRef<HTMLDivElement>}
			className={classNames}
			data-testid="popover"
		>
			<div
				ref={targetRef as LegacyRef<HTMLDivElement>}
				className="sui-popover__trigger"
				role="button"
				tabIndex={0}
				onKeyDown={(e) => handleOnKeyDown(e, onTriggerClick)}
				onClick={onTriggerClick}
			>
				{trigger}
			</div>
			<div
				ref={popupRef as LegacyRef<HTMLDivElement>}
				className="sui-popover__popup"
				// style={{ ...popupPositions }}
				style={{
					position: "absolute",
					top: `${position.top}px`,
					left: `${position.left}px`,
					// Additional styling for the popup
					// ...
				}}
			>
				<Close
					className="sui-popover__popup-close"
					size="sm"
					onClick={onTriggerClick}
				/>
				{image && (
					<div
						className="sui-popover__popup-image"
						style={{
							backgroundImage: `url("${image}")`,
						}}
					/>
				)}
				<div className="sui-popover__popup-inner">
					{header && <div className="sui-popover__popup-header">{header}</div>}
					<div className="sui-popover__popup-content">{children}</div>
					{!!footer && (
						<div className="sui-popover__popup-footer">{footer}</div>
					)}
				</div>
			</div>
		</div>
	)
}

// Publish required component.
export { Popover }
