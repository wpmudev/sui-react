import React, { KeyboardEvent, MouseEvent, useId } from "react"

import {
	_renderHTMLPropsSafely,
	generateCN,
	handleEventDefault,
	handleOnKeyDown,
	isEmpty,
} from "@wpmudev/sui-utils"
import { ExternalLink } from "@wpmudev/sui-icons"
import {
	useDefaultChildren,
	useInteraction,
	useStyles,
} from "@wpmudev/sui-hooks"
import { LinkProps } from "./link.types"

// Link component represents a clickable link element with optional features
// like inline display, external link indication, and more.
const Link: React.FC<LinkProps> = ({
	id,
	theme = "primary",
	as = "a",
	className = "",
	isInline = false,
	isDisabled = false,
	isExternal = false,
	hasExternalIcon = false,
	children,
	href = "#",
	_htmlProps = {},
	_style = {},
	...props
}) => {
	const generatedId = useId()
	const linkId = id || `sui-link-${generatedId}`

	// Determine the HTML tag name to use
	const TagName = as ?? "a"

	// Default children content
	children = useDefaultChildren(children, "link text")

	// Use the useInteraction hook to track hover and focus states
	const [hover, focus, methods] = useInteraction({})

	const { suiInlineClassname } = useStyles(_style, className)

	// Generate CSS class names for the link
	const classNames = generateCN(
		"sui-link",
		{
			inline: isInline,
			disabled: isDisabled,
			hover,
			focus,
			[theme]: !isEmpty(theme ?? ""),
		},
		suiInlineClassname,
	)

	// Prepare the link props
	const linkProps: Record<string, any> = {
		...props,
		id: linkId,
		href,
		className: classNames,
		"data-testid": "link",
		..._renderHTMLPropsSafely(_htmlProps),
	}

	const onClickCallback = (e: MouseEvent<unknown> | KeyboardEvent<unknown>) => {
		// Prevent the default link behavior
		handleEventDefault(e, false, true)
		// Open the link in a new tab or the same tab based on 'isExternal'
		window.open(href, isExternal ? "_blank" : "_top")
	}

	// Handle link behavior based on the selected HTML tag
	if ("a" !== TagName) {
		linkProps.role = "link"
		linkProps.onClick = onClickCallback
		linkProps.onKeyDown = (
			e: React.KeyboardEvent<HTMLDivElement | HTMLSpanElement>,
		) => handleOnKeyDown(e, onClickCallback)
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
