import React, {
	useEffect,
	useCallback,
	CSSProperties,
	useRef,
	useState,
	LegacyRef,
} from "react"
import { Button } from "@wpmudev/sui-button"
import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"
import {
	InteractionTypes,
	useDetectRTL,
	useInteraction,
	usePortal,
} from "@wpmudev/sui-hooks"

import { Icon } from "./elements/tooltip-icon"
import { TooltipProps } from "./tooltip.types"

// Build "Tooltip" component.
const Tooltip: React.FC<TooltipProps> = ({
	label,
	type = "button",
	className,
	position = "top",
	customWidth,
	customMobileWidth,
	children,
	onClick = () => {},
	onMouseEnter = () => {},
	onMouseLeave = () => {},
	onFocus = () => {},
	onBlur = () => {},
	href,
	icon,
	iconSize = "sm",
	...props
}) => {
	const [isVisible, setIsVisible] = useState(true)
	const [pos, setPos] = useState({ top: 0, left: 0 })

	// detect RTL
	// const isRTL = useDetectRTL()

	const tooltipRef = useRef<HTMLDivElement | null>(null)
	const triggerRef = useRef<HTMLSpanElement | null>(null)

	const [render] = usePortal("body")

	const onMouseEnterCallback = (e) => {
		if (tooltipRef.current) {
			const parentRect = tooltipRef?.current?.getBoundingClientRect()
			const trigger = triggerRef?.current?.getBoundingClientRect()
			const popupEl = document.querySelector(".sui-tooltip__popup")
			const tooltipHeight = popupEl?.clientHeight
			const tooltipWidth = popupEl?.clientWidth

			if (!popupEl) {
				return
			}

			const styles = !!popupEl ? window.getComputedStyle(popupEl) : {}

			const attrs: any = {
				top: `${parentRect.top + window.scrollY}px`,
				left: `${parentRect.left + window.scrollX}px`,
			}

			switch (position) {
				case "top":
					attrs.top = parentRect.top - tooltipHeight - 10
					attrs.left = parentRect.left + trigger.width / 2
					break
				case "top-left":
					attrs.top = parentRect.top - tooltipHeight - 10
					break
				case "top-right":
					attrs.top = parentRect.top - tooltipHeight - 10
					attrs.left = parentRect.left - tooltipWidth + trigger?.width
					break
				case "bottom":
					attrs.top = parentRect.top + trigger.height + 10
					attrs.left = parentRect.left + trigger.width / 2
					break
				case "bottom-left":
					attrs.top = parentRect.top + trigger.height + 10
					break
				case "bottom-right":
					attrs.top = parentRect.top + trigger.height + 10
					attrs.left = parentRect.left - tooltipWidth + trigger?.width
					break
				case "right":
					attrs.top = parentRect.top + trigger.height / 2
					attrs.left = parentRect.left + trigger.width + 10
					break
				case "right-top":
					attrs.top = parentRect.top
					attrs.left = parentRect.left + trigger.width + 10
					break
				case "right-bottom":
					attrs.top = parentRect.top + trigger.height - tooltipHeight
					attrs.left = parentRect.left + trigger.width + 10
					break
				case "left":
					attrs.top = parentRect.top + trigger.height / 2
					attrs.left = parentRect.left - tooltipWidth - 10
					break
				case "left-top":
					attrs.top = parentRect.top
					attrs.left = parentRect.left - tooltipWidth - 10
					break
				case "left-bottom":
					attrs.top = parentRect.top + trigger.height - tooltipHeight
					attrs.left = parentRect.left - tooltipWidth - 10
					break
			}
			setPos(attrs)
		}

		setIsVisible(true)
	}

	const onMouseLeaveCallback = (e) => {
		setIsVisible(true)
	}

	// use interaction
	const [isHovered, isFocused, methods, toggleHover] = useInteraction({
		onMouseEnter: onMouseEnterCallback,
		onMouseLeave: onMouseLeaveCallback,
		onFocus,
		onBlur,
	} as InteractionTypes)

	type TooltipAttrsTypes = {
		style?: React.CSSProperties
	}

	const attrs: TooltipAttrsTypes = {}

	const classNames = generateCN(
		"sui-tooltip",
		{
			focus: isFocused,
		},
		className ?? "",
	)

	// Custom tooltip width
	if (customWidth || customMobileWidth) {
		attrs.style = {
			...pos,
			...(customWidth && { "--tooltip-width": `${customWidth}px` }),
			...(customMobileWidth && {
				"--tooltip-width-mobile": `${customMobileWidth}px`,
			}),
		} as CSSProperties
	}

	// when escape key is pressed close the tooltip
	const escFunction = useCallback(
		(event: Event | KeyboardEvent) => {
			if ("keyCode" in event && event.code === "Escape" && isHovered) {
				toggleHover(false)
			}
		},
		[isHovered, toggleHover],
	)

	useEffect(() => {
		document.addEventListener("keydown", escFunction)

		return () => {
			document.removeEventListener("keydown", escFunction)
		}
	}, [escFunction])

	// handle onClick
	const onClickCallback = useCallback(() => {
		if (onClick) {
			onClick()
		}
	}, [onClick])

	// Render tooltip trigger
	const renderTrigger = () => {
		switch (type) {
			case "button":
			case "link":
				return (
					<Button
						{...props}
						{...(icon && { icon })}
						href={href}
						onClick={onClickCallback}
					>
						{label}
					</Button>
				)
			case "text":
				return (
					<span
						{...props}
						role="button"
						tabIndex={0}
						onClick={onClickCallback}
						onKeyDown={(
							e: React.KeyboardEvent<HTMLDivElement | HTMLSpanElement>,
						) => handleOnKeyDown(e)}
					>
						{label}
					</span>
				)
			case "icon":
				return <Icon name={icon} size={iconSize} />
		}
	}

	return (
		<div
			{...methods}
			className={classNames}
			data-testid="tooltip"
			ref={tooltipRef as LegacyRef<HTMLDivElement>}
		>
			<div
				className="sui-tooltip__trigger"
				ref={triggerRef as LegacyRef<HTMLDivElement>}
			>
				{renderTrigger()}
			</div>
			{!!children &&
				render(
					<div
						className={generateCN("sui-tooltip__popup", {
							show: isVisible,
							focus: isFocused,
							"custom-width": !!customWidth,
							[position]: true,
						})}
						role="tooltip"
						aria-live="polite"
						aria-hidden={!isVisible}
						tabIndex={isVisible ? 0 : -1}
						style={pos}
						{...attrs}
					>
						{children}
					</div>,
				)}
		</div>
	)
}

// Publish required component.
export { Tooltip }
