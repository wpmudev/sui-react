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
	position = "bottom-right",
	footer,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(true)
	const [popupPositions, setPopupPositions] = useState<
		Record<CSSProperties, any>
	>({ top: 0, right: "auto" })

	const ref = useRef<HTMLDivElement | null>(null)
	const triggerRef = useRef<HTMLDivElement | null>(null)
	const popupRef = useRef<HTMLDivElement | null>(null)

	const classNames = generateCN(
		"sui-popover",
		{
			open: isOpen,
			[`${position}`]: true,
		},
		className ?? "",
	)

	useOuterClick(ref, () => {
		setIsOpen(false)
	})

	const onTriggerClick = useCallback(() => {
		setIsOpen(!isOpen)
	}, [isOpen])

	useEffect(() => {
		const el = triggerRef?.current
		const { clientWidth, clientHeight } = el
		const { clientWidth: popupW, clientHeight: popupH } = popupRef?.current

		let pos = {}

		switch (position) {
			case "bottom":
				pos = {
					left: clientWidth / 2 - popupW / 2,
					top: clientHeight + 16,
				}
				break
			case "bottom-left":
				pos = {
					left: 0,
					top: clientHeight + 16,
				}
				break
			case "bottom-right":
				pos = {
					left: 0 - popupW + clientWidth,
					top: clientHeight + 16,
				}
				break
		}

		setPopupPositions({
			...popupPositions,
			...pos,
		})
	}, [])

	return (
		<div
			ref={ref as LegacyRef<HTMLDivElement>}
			className={classNames}
			data-testid="popover"
		>
			<div
				ref={triggerRef as LegacyRef<HTMLDivElement>}
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
				style={{ ...popupPositions }}
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
