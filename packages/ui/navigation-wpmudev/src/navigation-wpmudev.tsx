import React from "react"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"
import { NavigationWrapperProps } from "./navigation-wpmudev.types"

// Navigation component
const NavigationWrapper: React.FC<NavigationWrapperProps> = ({
	id,
	children,
	_htmlProps,
	_style,
}) => {
	const { suiInlineClassname } = useStyles(_style)
	// Generate CSS class names for the navigation component
	const classNames = generateCN(
		"sui-wpmudev__navigation",
		{},
		suiInlineClassname,
	)

	return (
		<div id={id} className={classNames} {..._renderHTMLPropsSafely(_htmlProps)}>
			{children}
		</div>
	)
}

// Export the NavigationWPMUDEV component
export { NavigationWrapper }
