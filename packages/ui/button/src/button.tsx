import React, { forwardRef, useId } from "react"
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
			id,
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
		const generatedId = useId()
		const buttonId = id || `sui_button_${generatedId}`

		// base className
		const baseClassName = "sui-button"

		// Default children content
		children = useDefaultChildren(children, "button label")
		const { suiInlineClassname } = useStyles(_style, className ?? "")

		if (isLoading) {
			isUnwrapped = true
			children = (
				<Loader
					id={`${buttonId}_loader`}
					colorScheme={colorScheme}
					isDisabled={isDisabled}
				>
					{children}
				</Loader>
			)
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
			id: buttonId,
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
				{(startIcon || icon) && (
					<Icon
						id={`${buttonId}_start-icon`}
						name={startIcon ?? ""}
						size={iconSize}
						{...(isLoading ? { className: "sui-button__icon--hidden" } : {})}
					/>
				)}
				{isUnwrapped && children}
				{!isUnwrapped && (
					<Label id={`${buttonId}_label`} {...(iconOnly && { hidden: true })}>
						{children}
					</Label>
				)}
				{isEndIcon && (
					<Icon
						id={`${buttonId}_end-icon`}
						name={endIcon ?? ""}
						size={iconSize}
						{...(isLoading ? { className: "sui-button__icon--hidden" } : {})}
					/>
				)}
			</TagName>
		)
	},
)

Button.displayName = "Button"

// Publish required component(s).
export { Button }
