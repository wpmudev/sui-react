import React from "react"

import { Box, BoxGroup } from "@wpmudev/sui-box"
import { useDefaultChildren } from "@wpmudev/sui-hooks"

// The AccordionFooter component is defined as a functional component using React.FC.
const AccordionItemFooter: React.FC<{
	children?: React.ReactNode // The content of the accordion item, which can be any valid React node.
}> = ({ children }) => {
	// Default content when children is empty
	children = useDefaultChildren(children)

	return (
		<div className="sui-accordion__item--footer">
			<Box>
				<BoxGroup isInline={false}>{children}</BoxGroup>
			</Box>
		</div>
	)
}

export { AccordionItemFooter }
