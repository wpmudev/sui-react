import React, { useEffect, useCallback, CSSProperties } from "react"
import { Button as SuiButton } from "@wpmudev/sui-button"
import { generateCN } from "@wpmudev/sui-utils"
import { InteractionTypes, useInteraction } from "@wpmudev/sui-hooks"

import { Icon } from "./elements/tooltip-icon"
import { TooltipProps } from "./tooltip.types"

export const TagNames: Record<string, any> = {
	button: SuiButton,
	text: "span",
	icon: Icon,
	link: SuiButton
}

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

	const classNames = generateCN("sui-tooltip", {
		// Add show hide class based on tooltip open
		show: isHovered,
		focus: isFocused,
		"custom-width": !!customWidth,
		[position]: true
	}, {
		[className]: !!className
	})

	// tooltip type button or text
	const TagName: string | React.FC = TagNames?.[type] ?? ""

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

	return (
		<div className={classNames} {...methods}>
			<TagName {...props} href={href} onClick={onClickCallback}>
				{label}
			</TagName>
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
