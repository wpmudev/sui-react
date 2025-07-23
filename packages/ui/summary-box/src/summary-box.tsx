import React from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { Box } from "@wpmudev/sui-box"

import { SummaryBoxProps } from "./summary-box.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

/**
 * SummaryBox Component
 *
 * Component that displays a summary box with a title, icon, primary and secondary actions,
 * and optional additional content.
 *
 * @param {Object}             props                       - The props for the SummaryBox component.
 * @param {string}             props.title                 - The title of the summary box.
 * @param {JSX.Element}        props.icon                  - The icon element to display.
 * @param {boolean}            [props.hideMobileIcon=true] - Whether to hide the icon on mobile devices.
 * @param {Array<JSX.Element>} [props.primaryActions=[]]   - An array of primary action elements.
 * @param {Array<JSX.Element>} [props.secondaryActions=[]] - An array of secondary action elements.
 * @param {string}             props.className             - Additional CSS classes to apply to the component.
 * @param {React.ReactNode}    props.children              - Optional additional content within the summary box.
 * @param                      props._htmlProps
 * @param                      props._style
 *
 * @return {JSX.Element} The SummaryBox component.
 */
const SummaryBox: React.FC<SummaryBoxProps> = ({
	title = "title",
	icon,
	hideMobileIcon = true,
	primaryActions = null,
	secondaryActions = null,
	className,
	children,
	_htmlProps = {},
	_style = {},
}: SummaryBoxProps): JSX.Element => {
	const { suiInlineClassname } = useStyles(_style, className)
	const classNames = generateCN("sui-summary-box", {}, suiInlineClassname)

	// Define the attributes for the Box component that will be used to display the summary box.
	const attrs = {
		title,
		className: classNames,
		icon, // The icon will be set later based on the provided icon prop or a default value.
		isSmall: true, // Set the summary box size to small.
		hideMobileIcon,
		headerLeft: (
			<div className="sui-summary-box__quick-actions">{primaryActions}</div>
		),
		headerRight: secondaryActions,
		_htmlProps: {
			..._htmlProps,
			"data-testid": "summary-box",
		},
	}

	// Default children content
	children = useDefaultChildren(children)

	// Determine the icon to be used.
	if (icon) {
		attrs.icon = icon
	}

	return <Box {...attrs}>{children}</Box>
}

// Publish required component.
export { SummaryBox }
