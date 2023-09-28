import React, { useEffect, useCallback, CSSProperties } from "react"
import { Button } from "@wpmudev/sui-button"
import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"
import { InteractionTypes, useInteraction } from "@wpmudev/sui-hooks"

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
	...props
}) => {
	// use interaction
	const [isHovered, isFocused, methods, toggleHover] = useInteraction({
		onMouseEnter,
		onMouseLeave,
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
			// Add show hide class based on tooltip open
			show: isHovered,
			focus: isFocused,
			"custom-width": !!customWidth,
			[position]: true,
		},
		className ?? "",
	)

	// Custom tooltip width
	if (customWidth || customMobileWidth) {
		attrs.style = {
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
					<Button {...props} href={href} onClick={onClickCallback}>
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
				return <Icon name={props?.icon ?? ""} />
		}
	}

	return (
		<div className={classNames} {...methods} data-testid="tooltip">
			{renderTrigger()}
			{!!children && (
				<span
					className="sui-tooltip__content"
					role="tooltip"
					aria-live="polite"
					aria-hidden={!isHovered}
					tabIndex={isHovered ? 0 : -1}
					{...attrs}
				>
					{children}
				</span>
			)}
		</div>
	)
}

// Publish required component.
export { Tooltip }
