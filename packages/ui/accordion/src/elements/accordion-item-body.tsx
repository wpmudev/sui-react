import React from "react"

import { Box, BoxGroup } from "@wpmudev/sui-box"

// The AccordionBody component is defined as a functional component using React.FC.
const AccordionItemBody: React.FC<{
	children?: React.ReactNode // The content of the accordion item, which can be any valid React node.
	hasPadding?: boolean
}> = ({ children, hasPadding = true }) => {
	return (
		<div className="sui-accordion__item--body" data-testid="accordion-body">
			<Box>
				<BoxGroup hasPadding={hasPadding} isInline={false}>
					{children}
				</BoxGroup>
			</Box>
		</div>
	)
}

export { AccordionItemBody }
