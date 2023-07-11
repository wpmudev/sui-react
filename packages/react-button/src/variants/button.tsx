import React, { forwardRef } from "react"
import { InteractionTypes, useInteraction } from "@wpmudev/react-hooks"

import {
	isUndefined,
	condContent,
	generateCN,
	isEmpty,
} from "@wpmudev/react-utils"

// Import required component(s).
import { Label } from "../elements/button-label"
import { Icon } from "../elements/button-icon"
import { ButtonPropsType } from "../types"

// Build "Base Button" component.
const Button = forwardRef<
	HTMLButtonElement | HTMLLinkElement | HTMLLabelElement,
	ButtonPropsType & InteractionTypes
>((props, ref) => {
	const {
		href,
		target,
		htmlFor,
		appearance,
		color,
		isSmall = false,
		isDisabled = false,
		isUnwrapped = false,
		className,
		children,
		icon,
		iconPosition = "start",
		...restProps
	} = props

	// base className
	const baseClassName: string = "sui-button"

	// Manage interaction methods
	const [isHovered, isFocused, interactionMethods] = useInteraction({
		onMouseEnter: props?.onMouseEnter,
		onMouseLeave: props?.onMouseLeave,
		onFocus: props?.onFocus,
		onBlur: props?.onBlur,
	})

	const isLink = !isUndefined(href)
	const label = !isUndefined(htmlFor)
	const hasIcon = !isEmpty(icon ?? "")

	// Classname based on the attributes
	const attrClasses = {
		sm: isSmall,
		hover: isHovered,
		focus: isFocused,
		disabled: isDisabled,
		"is-icon": hasIcon && isUndefined(children),
		[`${appearance}-${color}`]: !!appearance && !!color,
	}

	const attrs = {
		ref,
		href: condContent(isLink, href),
		target: condContent(target, target || "_blank"),
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
			{hasIcon && "start" === iconPosition && <Icon name={icon ?? ""} />}
			{isUnwrapped && children}
			{!isUnwrapped && <Label>{children}</Label>}
			{hasIcon && "end" === iconPosition && <Icon name={icon ?? ""} />}
		</TagName>
	)
})

Button.displayName = "Button"

// Publish required component(s).
export { Button }
