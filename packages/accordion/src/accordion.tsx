// Import necessary modules and types
import React from "react"

import { generateCN } from "@wpmudev/react-utils"
import { AccordionProps } from "./accordion.types"

// Define the Accordion component as a functional component (React.FC)
const Accordion: React.FC<AccordionProps> = ({ className, ...props }) => {
	// Generate CSS class names for the Accordion component
	const classNames = generateCN("sui-accordion", {}, className)

	// Return a div element with the generated CSS class names and spread any additional props
	return <div className={classNames} {...props}></div>
}

// Export the Accordion component along with the AccordionProps type
export { Accordion, AccordionProps }
