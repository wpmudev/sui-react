import React, { forwardRef } from "react"
import {
	useDefaultChildren,
	useInteraction,
	useStyles,
} from "@wpmudev/sui-hooks"

import {
	isUndefined,
	condContent,
	generateCN,
	isEmpty,
	_renderHTMLPropsSafely,
} from "@wpmudev/sui-utils"

// Import required component(s).
import { Label } from "./elements/button-label"
import { Icon } from "./elements/button-icon"
import { Loader } from "./elements/button-loader"

import { ButtonProps } from "./button.types"

// type ButtonProps = ButtonProps & InteractionTypes

// Build "Base Button" component.
const Button: React.FC<ButtonProps> = forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonProps
>(
	(
		{
			href,
			target,
			htmlFor,
			type,
			colorScheme,
			isSmall = false,
			isFullWidth = false,
			isDisabled = false,
			isUnwrapped = false,
			className,
			children,
			icon,
			startIcon = icon,
			endIcon,
			iconOnly,
			iconSize = "sm",
			isResponsive = false,
			isLoading = false,
			onMouseEnter,
			onMouseLeave,
			onFocus,
			onBlur,
			onMouseUp,
			onMouseDownCapture,
			onMouseUpCapture,
			onBlurCapture,
			onClick,
			_htmlProps = {},
			_style,
		},
		ref,
	) => {
		// base className
		const baseClassName = "sui-button"

		// Default children content
		children = useDefaultChildren(children, "button label")
		const { suiInlineClassname } = useStyles(_style, className ?? "")

		if (isLoading) {
			isUnwrapped = true
			children = <Loader colorScheme={colorScheme}>{children}</Loader>
		}

		// Manage interaction methods
		const [isHovered, isFocused, interactionMethods] = useInteraction({
			onMouseEnter,
			onMouseLeave,
			onFocus,
			onBlur,
			onMouseUp,
			onMouseDownCapture,
			onMouseUpCapture,
			onBlurCapture,
		})

		const isLink = !isUndefined(href)
		const label = !isUndefined(htmlFor)
		const isEndIcon = !isEmpty(endIcon ?? "")

		// Classname based on the attributes
		const attrClasses = {
			sm: isSmall,
			hover: isHovered && !isDisabled,
			focus: isFocused && !isDisabled,
			disabled: isDisabled,
			"full-width": isFullWidth,
			"is-icon": (startIcon || endIcon) && iconOnly,
			[`${type}-${colorScheme}`]: !!type && !!colorScheme,
			inline: iconOnly && !type,
			responsive: isResponsive,
			loading: isLoading,
		}

		const attrs = {
			ref,
			href: isLink && !!href ? href : undefined,
			...(isLink && target && { target }),
			htmlFor: condContent(label),
			// classname
			className: generateCN(baseClassName, attrClasses, suiInlineClassname),
			disabled: isDisabled,
			"aria-busy": isLoading,
			...(isLoading && { "aria-live": "polite" }),
			"data-testid": "button",
			onClick,
			..._renderHTMLPropsSafely(_htmlProps),
			// interaction methods
			...(interactionMethods ?? {}),
		}

		// Root tag
		let TagName: string = isLink ? "a" : "button"

		// Render as label
		if (htmlFor) {
			TagName = "label"
		}

		return (
			<TagName {...attrs}>
				{(startIcon || icon) && !isLoading && (
					<Icon name={startIcon ?? ""} size={iconSize} />
				)}
				{isUnwrapped && children}
				{!isUnwrapped && (
					<Label {...(iconOnly && { hidden: true })}>{children}</Label>
				)}
				{isEndIcon && !isLoading && (
					<Icon name={endIcon ?? ""} size={iconSize} />
				)}
			</TagName>
		)
	},
)

Button.displayName = "Button"

// Publish required component(s).
export { Button }
