import React from "react"

import { generateCN, handleEventDefault } from "@wpmudev/sui-utils"
import { ExternalLink } from "@wpmudev/sui-icons"
import { useInteraction } from "@wpmudev/sui-hooks"

import { LinkProps } from "./link.types"

// Link component represents a clickable link element with optional features
// like inline display, external link indication, and more.
const Link: React.FC<LinkProps> = ({
	as = "a",
	className = "",
	isInline = false,
	isDisabled,
	isExternal,
	hasExternalIcon,
	children,
	...props
}) => {
	// Determine the HTML tag name to use
	const TagName = as ?? "a"

	// Use the useInteraction hook to track hover and focus states
	const [hovered, focused, methods] = useInteraction({})

	// Generate CSS class names for the link
	const classNames = generateCN(
		"sui-link",
		{
			inline: isInline,
			disabled: isDisabled,
			hovered,
			focused,
		},
		className,
	)

	// Prepare the link props
	const linkProps: Record<string, any> = {
		...props,
		className: classNames,
	}

	// Handle link behavior based on the selected HTML tag
	if ("a" !== TagName) {
		linkProps.role = "link"
		linkProps.onClick = (e) => {
			// Prevent the default link behavior
			handleEventDefault(e, false, true)
			// Open the link in a new tab or the same tab based on 'isExternal'
			window.open(linkProps.href, isExternal ? "_blank" : "_self")
		}
		// Remove the href attribute if not using 'a' tag
		delete linkProps.href
	} else if (isExternal) {
		// Open external links in a new tab
		linkProps.target = "_blank"
	}

	return (
		<TagName tabIndex={0} {...methods} {...linkProps}>
			{children}
			{hasExternalIcon && isExternal && <ExternalLink size="sm" />}
		</TagName>
	)
}

// Publish component(s)
export { Link }
