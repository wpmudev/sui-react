import React, {
	useCallback,
	useState,
	useRef,
	LegacyRef,
	CSSProperties,
	useEffect,
} from "react"
import {
	generateCN,
	handleOnKeyDown,
	isEmpty,
	isUndefined,
} from "@wpmudev/sui-utils"
import { useOuterClick } from "@wpmudev/sui-hooks"
import { Button } from "@wpmudev/sui-button"

import { PopoverProps } from "./popover.types"
import { Close } from "@wpmudev/sui-icons"

// Popover component
const Popover: React.FC<PopoverProps> = ({
	isOpen = false,
	image,
	trigger,
	className,
	title,
	children,
	position = "top",
	footer,
	displayOnHover = false,
}) => {
	const [isPopupOpen, setIsPopupOpen] = useState<boolean>(isOpen ?? false)
	const [popupPositions, setPopupPositions] = useState<Record<string, any>>({
		top: 0,
		right: "auto",
	})

	const ref = useRef<HTMLDivElement | null>(null)
	const triggerRef = useRef<HTMLDivElement | null>(null)
	const popupRef = useRef<HTMLDivElement | null>(null)

	// class names
	const classNames = generateCN(
		"sui-popover",
		{
			open: isPopupOpen,
			image: !isUndefined(image) && !isEmpty(image),
			[`${position}`]: true,
		},
		className ?? "",
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

		setIsPopupOpen(true)
	}, [displayOnHover])

	const onMouseLeave = useCallback(() => {
		// Do not do anything in case of displayOnHover is false
		if (!displayOnHover) {
			return
		}

		setIsPopupOpen(false)
	}, [displayOnHover])

	useEffect(() => {
		const el = triggerRef?.current
		const { clientWidth, clientHeight } = el as HTMLDivElement
		const { clientWidth: popupW, clientHeight: popupH } =
			popupRef?.current as HTMLDivElement

		if (!isPopupOpen) {
			return
		}

		let pos = {}

		switch (position) {
			case "top":
				pos = {
					left: 0 - popupW / 2 + clientWidth / 2,
					top: -(16 + popupH),
				}
				break
			case "top-left":
				pos = {
					left: -(popupW - clientWidth / 2 - 26),
					top: -(16 + popupH),
				}
				break
			case "top-right":
				pos = {
					left: clientWidth / 2 - 26,
					top: -(16 + popupH),
				}
				break
			case "left":
				pos = {
					left: 0 - (popupW + 16),
					top: clientHeight / 2 - popupH / 2,
				}
				break
			case "left-top":
				pos = {
					left: 0 - (popupW + 16),
					top: -(popupH - clientHeight / 2 - 26),
				}
				break
			case "left-bottom":
				pos = {
					left: 0 - (popupW + 16),
					top: clientHeight / 2 - 26,
				}
				break
			case "right":
				pos = {
					left: clientWidth + 16,
					top: clientHeight / 2 - popupH / 2,
				}
				break
			case "right-top":
				pos = {
					left: clientWidth + 16,
					top: -(popupH - clientHeight / 2 - 26),
				}
				break
			case "right-bottom":
				pos = {
					left: clientWidth + 16,
					top: clientHeight / 2 - 26,
				}
				break
			case "bottom":
				pos = {
					left: clientWidth / 2 - popupW / 2,
					top: clientHeight + 16,
				}
				break
			case "bottom-left":
				pos = {
					left: -(popupW - clientWidth / 2 - 26),
					top: clientHeight + 16,
				}
				break
			case "bottom-right":
				pos = {
					left: clientWidth / 2 - 26,
					top: clientHeight + 16,
				}
				break
		}

		setPopupPositions({
			...popupPositions,
			...pos,
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [trigger, popupRef, isPopupOpen, position])

	return (
		<div
			ref={ref as LegacyRef<HTMLDivElement>}
			className={!!classNames ? classNames : undefined}
			data-testid="popover"
			onMouseLeave={onMouseLeave}
		>
			<div
				ref={triggerRef as LegacyRef<HTMLDivElement>}
				className="sui-popover__trigger"
				role="button"
				tabIndex={0}
				onKeyDown={(e) => handleOnKeyDown(e, onTriggerClick)}
				onClick={onTriggerClick}
				onMouseEnter={onMouseEnter}
			>
				{trigger}
			</div>
			<div
				ref={popupRef as LegacyRef<HTMLDivElement>}
				className="sui-popover__popup"
				style={{ ...popupPositions } as CSSProperties}
			>
				<div className="sui-popover__popup-arrow"></div>
				<div className="sui-popover__popup-wrapper">
					{!displayOnHover && (
						<div className="sui-popover__popup-close">
							<Button
								icon="Close"
								iconOnly={true}
								color="black"
								isSmall={true}
								appearance="tertiary"
							/>
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
						{title && (
							<div className="sui-heading--h5 sui-popover__popup-header">
								{title}
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
