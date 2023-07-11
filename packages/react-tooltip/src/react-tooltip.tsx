import React, { useEffect, useCallback, HTMLProps, CSSProperties } from "react"
import { Button as SuiButton } from "@wpmudev/react-button"
import { generateCN } from "@wpmudev/react-utils"
import { InteractionTypes, useInteraction } from "@wpmudev/react-hooks"

interface TooltipPropTypes extends HTMLProps<HTMLDivElement> {
	label: string
	type: string
	className: string
	position: string
	customWidth: number
	customMobileWidth: number
	children?: React.ReactNode
}

// Build "Tooltip" component.
const Tooltip = ({
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
	...props
}: TooltipPropTypes) => {
	// use interaction
	const [isHovered, isFocused, methods, toggleHover] = useInteraction({
		onMouseEnter,
		onMouseLeave,
		onFocus,
		onBlur,
	} as InteractionTypes)

	type TooltipAttrsTypes = {
		styles?: React.CSSProperties
	}

	const attrs: TooltipAttrsTypes = {}

	const classNames = generateCN("sui-tooltip", {
		// Add show hide class based on tooltip open
		show: isHovered,
		"custom-width": !!customWidth,
		[position]: true,
	})

	// tooltip type button or text
	const TagName: string | React.FC = "button" === type ? SuiButton : "span"

	// Custom tooltip width
	if (customWidth || customMobileWidth) {
		attrs.styles = {
			"--tooltip-width": `${customWidth}px`,
			"--tooltip-width-mobile": `${customWidth}px`,
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
	const onClickCallback = useCallback(() => onClick, [onClick])

	return (
		<div className={classNames}>
			<TagName onClick={onClickCallback} {...props} {...methods}>
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
export { Tooltip, TooltipPropTypes }
