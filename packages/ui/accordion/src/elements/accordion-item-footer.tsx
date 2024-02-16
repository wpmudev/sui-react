import React, { useContext } from "react"

import { Box, BoxGroup } from "@wpmudev/sui-box"
import { useDefaultChildren } from "@wpmudev/sui-hooks"
import { AccordionContext } from "../accordion-context"

// The AccordionFooter component is defined as a functional component using React.FC.
const AccordionItemFooter: React.FC<{
	children?: React.ReactNode // The content of the accordion item, which can be any valid React node.
}> = ({ children }) => {
	// Get the "toggle" method and "isCurrentlyExpanded" state from the current AccordionItem
	const { spacing, isFlushed } = useContext(AccordionContext)

	let styles = {}

	// custom spacing
	if (spacing) {
		styles = {
			padding: spacing,
		}
	}

	// Default content when children is empty
	children = useDefaultChildren(children)

	return (
		<div className="sui-accordion__item--footer">
			{!isFlushed ? (
				<Box>
					<BoxGroup style={styles} isInline={false}>
						{children}
					</BoxGroup>
				</Box>
			) : (
				children
			)}
		</div>
	)
}

export { AccordionItemFooter }
