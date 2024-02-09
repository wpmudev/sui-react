// Import necessary modules and types
import React, { useState } from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
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
	children,
	...props
}) => {
	const [expandState, setExpandState] = useState<Record<string, boolean>>({})

	// Default children content
	children = useDefaultChildren(children)
	const { cssCN } = useStyles(props, className)

	// Generate CSS class names for the Accordion component
	const classNames = generateCN(
		"sui-accordion",
		{
			[state as string]: !isEmpty(state ?? "") && state !== "default",
			"no-border-radius": noBorderRadius,
			"no-side-borders": noSideBorders,
		},
		cssCN,
	)

	// Return a div element with the generated CSS class names and spread any additional props
	return (
		<AccordionProvider
			value={{ allowMultipleExpand, expandState, setExpandState }}
		>
			<div className={classNames} {...props}>
				{children}
			</div>
		</AccordionProvider>
	)
}

// Export the Accordion component along with the AccordionProps type
export { Accordion }
