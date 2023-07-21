// Import necessary modules and types
import React from "react"

import { generateCN, isEmpty } from "@wpmudev/react-utils"
import { AccordionProps } from "./accordion.types"

// Define the Accordion component as a functional component (React.FC)
const Accordion: React.FC<AccordionProps> = ({
	className,
	state,
	...props
}) => {
	// Generate CSS class names for the Accordion component
	const classNames = generateCN(
		"sui-accordion",
		{ [state]: !isEmpty(state ?? "") },
		className,
	)

	// Return a div element with the generated CSS class names and spread any additional props
	return <div className={classNames} {...props} />
}

// Export the Accordion component along with the AccordionProps type
export { Accordion, AccordionProps }
