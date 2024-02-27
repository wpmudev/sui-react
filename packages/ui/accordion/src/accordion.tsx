// Import necessary modules and types
import React, { useState } from "react"

import { _renderRestPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"
import { AccordionProps } from "./accordion.types"
import { AccordionProvider } from "./accordion-context"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

// Define the Accordion component as a functional component (React.FC)
const Accordion: React.FC<AccordionProps> = ({
	className,
	state = "default",
	noBorderRadius = false,
	noSideBorders = false,
	allowMultipleExpand = false,
	isFlushed = false,
	children,
	spacing = "",
	_htmlProps = {},
	_style = {},
}) => {
	const [expandState, setExpandState] = useState<Record<string, boolean>>({})

	// Default children content
	children = useDefaultChildren(children)
	const { suiInlineClassname } = useStyles(_style, className)

	// Generate CSS class names for the Accordion component
	const classNames = generateCN(
		"sui-accordion",
		{
			[state as string]: !isEmpty(state ?? "") && state !== "default",
			"no-border-radius": noBorderRadius,
			"no-side-borders": noSideBorders,
			flushed: isFlushed,
		},
		suiInlineClassname,
	)

	// Return a div element with the generated CSS class names and spread any additional props
	return (
		<AccordionProvider
			value={{
				allowMultipleExpand,
				expandState,
				setExpandState,
				spacing,
				isFlushed,
			}}
		>
			<div className={classNames} {..._renderRestPropsSafely(_htmlProps)}>
				{children}
			</div>
		</AccordionProvider>
	)
}

// Export the Accordion component along with the AccordionProps type
export { Accordion }
