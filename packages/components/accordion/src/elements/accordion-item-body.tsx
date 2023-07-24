import React from "react"

import { Box, BoxGroup } from "@wpmudev/sui-box"

// The AccordionFooter component is defined as a functional component using React.FC.
const AccordionItemBody: React.FC<{
	children?: React.ReactNode // The content of the accordion item, which can be any valid React node.
}> = ({ children }) => {
	return (
		<div className="sui-accordion__body">
			<Box>
				<BoxGroup isInline={false}>{children}</BoxGroup>
			</Box>
		</div>
	)
}

export { AccordionItemBody }
