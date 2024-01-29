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
	useDefaultChildren,
	useInteraction,
	useDetectRTL,
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
	// detect RTL
	const isRTL = useDetectRTL()

	const [isVisible, setIsVisible] = useState(false)
	const [pos, setPos] = useState({ top: 0, left: 0 })

	const tooltipRef = useRef<HTMLDivElement | null>(null)
	const triggerRef = useRef<HTMLSpanElement | null>(null)

	const [render] = usePortal("body")

	const onMouseEnterCallback = (e: React.MouseEvent) => {
		if (tooltipRef.current) {
			const parentRect = tooltipRef?.current?.getBoundingClientRect()
			const trigger = triggerRef?.current?.getBoundingClientRect()
			const popupEl = document.querySelector(".sui-tooltip__popup")
			const tooltipHeight = popupEl?.clientHeight || 0
			const tooltipWidth = popupEl?.clientWidth || 0
			const alignName = isRTL ? "right" : "left"

			let align = parentRect.left

			if (!popupEl) {
				return
			}

			if (isRTL) {
				align = window.innerWidth - parentRect.right
			}

			const styles = !!popupEl ? window.getComputedStyle(popupEl) : {}

			let attrs: any = {
				top: `${parentRect.top + window.scrollY}px`,
			}

			switch (position) {
				case "top":
				case "top-left":
				case "top-right":
					attrs = {
						...attrs,
						top: parentRect.top - tooltipHeight - 10 + window.scrollY,
					}
					if (position === "top-right") {
						attrs = {
							...attrs,
							[alignName]: align - tooltipWidth + (trigger?.width ?? 0),
						}
					} else if (position === "top") {
						attrs = {
							...attrs,
							left:
								parentRect.left + (trigger?.width ?? 0) / 2 + window.scrollX,
						}
					} else if (position === "top-left") {
						attrs = {
							...attrs,
							[alignName]: align,
						}
					}
					break

				case "bottom":
				case "bottom-left":
				case "bottom-right":
					attrs = {
						...attrs,
						top: parentRect.top + (trigger?.height ?? 0) + 10 + window.scrollY,
					}
					if (position === "bottom-right") {
						attrs = {
							...attrs,
							[alignName]: align - tooltipWidth + (trigger?.width ?? 0),
						}
					} else if (position === "bottom") {
						attrs = {
							...attrs,
							left:
								parentRect.left + (trigger?.width ?? 0) / 2 + window.scrollY,
						}
					} else if (position === "bottom-left") {
						attrs = {
							...attrs,
							[alignName]: align,
						}
					}
					break

				case "right":
				case "right-top":
				case "right-bottom":
					attrs = {
						...attrs,
						[alignName]: align + (trigger?.width ?? 0) + 10,
					}
					if (position === "right-top") {
						attrs = {
							...attrs,
							top: parentRect.top + window.scrollY,
						}
					} else if (position === "right-bottom") {
						attrs = {
							...attrs,
							top:
								parentRect.top +
								(trigger?.height ?? 0) -
								tooltipHeight +
								window.scrollY,
						}
					} else {
						attrs = {
							...attrs,
							top: parentRect.top + (trigger?.height ?? 0) / 2,
						}
					}
					break

				case "left":
				case "left-top":
				case "left-bottom":
					attrs = {
						...attrs,
						[alignName]: align - tooltipWidth - 10,
					}
					if (position === "left-top") {
						attrs = {
							...attrs,
							top: parentRect.top,
						}
					} else if (position === "left-bottom") {
						attrs = {
							...attrs,
							top: parentRect.top + (trigger?.height ?? 0) - tooltipHeight,
						}
					} else {
						attrs = {
							...attrs,
							top: parentRect.top + (trigger?.height ?? 0) / 2,
						}
					}
					break
			}

			setPos(attrs)
		}

		setIsVisible(true)
	}

	const onMouseLeaveCallback = () => {
		setIsVisible(false)
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

	// Default children content
	children = useDefaultChildren(children, "{default tooltip content}")

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
				return <Icon name={icon} size={iconSize} onClick={onClick} />
			default:
				return <span {...props}>{label}</span>
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
							icon: !!icon,
						})}
						role="tooltip"
						aria-live="polite"
						aria-hidden={!isVisible}
						tabIndex={isVisible ? 0 : -1}
						data-testid="tooltip-popup"
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
