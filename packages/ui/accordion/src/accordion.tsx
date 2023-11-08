// Import necessary modules and types
import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { AccordionProps } from "./accordion.types"

// Define the Accordion component as a functional component (React.FC)
const Accordion: React.FC<AccordionProps> = ({
	className,
	state,
	noBorderRadius = false,
	noSideBorders = false,
	allowMultipleExpanded = true,
	...props
}) => {
	// Generate CSS class names for the Accordion component
	const classNames = generateCN(
		"sui-accordion",
		{
			[state as string]: !isEmpty(state ?? ""),
			"no-border-radius": noBorderRadius,
			"no-side-borders": noSideBorders,
		},
		className,
	)

	// Return a div element with the generated CSS class names and spread any additional props
	return <div className={classNames} {...props} />
}

// Export the Accordion component along with the AccordionProps type
export { Accordion }
