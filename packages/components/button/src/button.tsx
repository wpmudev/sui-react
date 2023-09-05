import React, { forwardRef } from "react"
import { InteractionTypes, useInteraction } from "@wpmudev/sui-hooks"

import {
	isUndefined,
	condContent,
	generateCN,
	isEmpty,
} from "@wpmudev/sui-utils"

// Import required component(s).
import { Label } from "./elements/button-label"
import { Icon } from "./elements/button-icon"
import { ButtonProps } from "./button.types"

// type ButtonProps = ButtonProps & InteractionTypes

// Build "Base Button" component.
const Button: React.FC<ButtonProps & InteractionTypes> = forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonProps
>(
	(
		{
			href,
			target,
			htmlFor,
			appearance,
			color,
			isSmall = false,
			isFullWidth = false,
			isDisabled = false,
			isUnwrapped = false,
			className,
			children,
			icon,
			startIcon = icon,
			endIcon = "",
			iconOnly = false,
			iconSize = "md",
			isResponsive = false,
			...restProps
		},
		ref,
	) => {
		// base className
		const baseClassName: string = "sui-button"

		// Manage interaction methods
		const [isHovered, isFocused, interactionMethods] = useInteraction({
			onMouseEnter: restProps?.onMouseEnter,
			onMouseLeave: restProps?.onMouseLeave,
			onFocus: restProps?.onFocus,
			onBlur: restProps?.onBlur,
		})

		const isLink = !isUndefined(href)
		const label = !isUndefined(htmlFor)
		const isStartIcon = !isEmpty(startIcon ?? "")
		const isEndIcon = !isEmpty(endIcon ?? "")

		// Classname based on the attributes
		const attrClasses = {
			sm: isSmall,
			hover: isHovered,
			focus: isFocused,
			disabled: isDisabled,
			"full-width": isFullWidth,
			"is-icon": (startIcon || endIcon) && iconOnly,
			[`${appearance}-${color}`]: !!appearance && !!color,
			inline: iconOnly && !appearance,
			responsive: isResponsive,
		}

		const attrs = {
			ref,
			href: isLink && !!href ? href : undefined,
			target: target || "_blank",
			htmlFor: condContent(label),
			// classname
			className: generateCN(baseClassName, attrClasses, className ?? ""),
			disabled: isDisabled,
			// interaction methods
			...(interactionMethods ?? {}),
			...restProps,
		}

		// Root tag
		let TagName: string = isLink ? "a" : "button"

		// Render as label
		if (htmlFor) {
			TagName = "label"
		}

		return (
			<TagName {...attrs}>
				{isStartIcon && <Icon name={startIcon ?? ""} size={iconSize} />}
				{isUnwrapped && children}
				{!isUnwrapped && (
					<Label {...(iconOnly && { hidden: true })}>{children}</Label>
				)}
				{isEndIcon && <Icon name={endIcon ?? ""} size={iconSize} />}
			</TagName>
		)
	},
)

Button.displayName = "Button"

// Publish required component(s).
export { Button }
