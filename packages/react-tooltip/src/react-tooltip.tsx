import React, { useEffect, useCallback, HTMLProps, CSSProperties } from "react"
import { Button as SuiButton } from "@wpmudev/react-button"
import { generateCN } from "@wpmudev/react-utils"
import { InteractionTypes, useInteraction } from "@wpmudev/react-hooks"

/**
 * Props for the Tooltip component.
 */
interface TooltipProps
	extends Omit<
		HTMLProps<HTMLButtonElement | HTMLSpanElement | HTMLAnchorElement>,
		"onClick"
	> {
	/**
	 * The text label for the tooltip.
	 */
	label: string
	/**
	 * Optional type of the tooltip.
	 */
	type?: string
	/**
	 * Optional additional CSS classes for the tooltip.
	 */
	className?: string
	/**
	 * Optional position of the tooltip.
	 */
	position?: string
	/**
	 * Optional custom width of the tooltip.
	 */
	customWidth?: number
	/**
	 * Optional custom width of the tooltip for mobile devices.
	 */
	customMobileWidth?: number
	/**
	 * Optional child elements.
	 */
	children?: React.ReactNode
	/**
	 * Callback function for the click event.
	 */
	onClick: () => void
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
	const onClickCallback = useCallback(() => {
		if (onClick) {
			onClick()
		}
	}, [onClick])

	return (
		<div className={classNames}>
			<TagName {...props} {...methods} onClick={onClickCallback}>
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
export { Tooltip, TooltipProps }
