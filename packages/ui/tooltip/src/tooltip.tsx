import React, {
	useEffect,
	useCallback,
	CSSProperties,
	useRef,
	useState,
	LegacyRef,
	useId,
} from "react"
import { Button } from "@wpmudev/sui-button"
import {
	_renderRestPropsSafely,
	generateCN,
	handleOnKeyDown,
} from "@wpmudev/sui-utils"
import {
	InteractionTypes,
	useDefaultChildren,
	useInteraction,
	useDetectRTL,
	usePortal,
	useStyles,
} from "@wpmudev/sui-hooks"

import { Icon } from "./elements/tooltip-icon"
import { TooltipProps } from "./tooltip.types"

// Build "Tooltip" component.
const Tooltip: React.FC<TooltipProps> = ({
	label,
	type = "button",
	className,
	placement = "top",
	customWidth,
	customMobileWidth,
	children,
	onClick,
	onMouseEnter = () => {},
	onMouseLeave = () => {},
	onFocus = () => {},
	onBlur = () => {},
	href,
	icon,
	iconSize = "sm",
	buttonProps,
	...props
}) => {
	// detect RTL
	const isRTL = useDetectRTL()
	const uniqueId = useId()

	const [isVisible, setIsVisible] = useState(false)
	const [pos, setPos] = useState({ top: 0, left: 0 })

	const tooltipRef = useRef<HTMLDivElement | null>(null)
	const triggerRef = useRef<HTMLSpanElement | null>(null)

	const [render] = usePortal("body")

	const onMouseEnterCallback = (e: React.MouseEvent) => {
		if (tooltipRef.current) {
			const parentRect = tooltipRef?.current?.getBoundingClientRect()
			const trigger = triggerRef?.current?.getBoundingClientRect()
			const popupEl = document.getElementById(`sui-tooltip-${uniqueId}`)
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

			switch (placement) {
				case "top":
				case "top-left":
				case "top-right":
					attrs = {
						...attrs,
						top: parentRect.top - tooltipHeight - 10 + window.scrollY,
					}
					if (placement === "top-right") {
						attrs = {
							...attrs,
							[alignName]: align - tooltipWidth + (trigger?.width ?? 0),
						}
					} else if (placement === "top") {
						attrs = {
							...attrs,
							left:
								parentRect.left + (trigger?.width ?? 0) / 2 + window.scrollX,
						}
					} else if (placement === "top-left") {
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
					if (placement === "bottom-right") {
						attrs = {
							...attrs,
							[alignName]: align - tooltipWidth + (trigger?.width ?? 0),
						}
					} else if (placement === "bottom") {
						attrs = {
							...attrs,
							left:
								parentRect.left + (trigger?.width ?? 0) / 2 + window.scrollY,
						}
					} else if (placement === "bottom-left") {
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
					if (placement === "right-top") {
						attrs = {
							...attrs,
							top: parentRect.top + window.scrollY,
						}
					} else if (placement === "right-bottom") {
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
					if (placement === "left-top") {
						attrs = {
							...attrs,
							top: parentRect.top,
						}
					} else if (placement === "left-bottom") {
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

	const { suiInlineClassname } = useStyles(props, className ?? "")

	const classNames = generateCN(
		"sui-tooltip",
		{
			focus: isFocused,
		},
		suiInlineClassname,
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
						{...buttonProps}
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
				if (!onClick) {
					return <Icon name={icon} size={iconSize} />
				}

				return (
					<span
						className="sui-tooltip__trigger--icon"
						role="button"
						tabIndex={0}
						onClick={onClickCallback}
						onKeyDown={(e) => handleOnKeyDown(e, onClickCallback)}
					>
						<Icon name={icon} size={iconSize} />
					</span>
				)
			default:
				return <span {..._renderRestPropsSafely(props)}>{label}</span>
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
						id={`sui-tooltip-${uniqueId}`}
						className={generateCN("sui-tooltip__popup", {
							show: isVisible,
							focus: isFocused,
							"custom-width": !!customWidth,
							[placement]: true,
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
