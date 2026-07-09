// Import necessary modules and types
import React, { useId } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

import { TabProvider } from "./elements/tab-context"
import { TabsProps } from "./tabs.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

// Define the Accordion component as a functional component (React.FC)
const Tabs: React.FC<TabsProps> = ({
	id,
	className,
	children,
	_htmlProps,
	_style = {},
	...props
}) => {
	const generatedId = useId()
	const tabsId = id || `sui-tabs-${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)
	// Generate CSS class names for the Accordion component
	const classNames = generateCN("sui-tab", {}, suiInlineClassname)

	// Default children content
	children = useDefaultChildren(children)

	// Return a div element with the generated CSS class names and spread any additional props
	return (
		<TabProvider
			onSwitchTab={props?.onSwitchTab}
			activeIndex={props?.activeIndex}
		>
			<div
				id={tabsId}
				className={classNames}
				{..._renderHTMLPropsSafely(_htmlProps)}
				data-testid="tabs"
			>
				{children}
			</div>
		</TabProvider>
	)
}

// Export the Accordion component along with the AccordionProps type
export { Tabs }
