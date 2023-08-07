import React from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { SummaryFooterBodyProps } from "./summary-box.types"

/**
 * SummaryFooterBody Component
 *
 * Component that represents the footer of a summary box. It displays content within a div element.
 *
 * @return {JSX.Element} The SummaryFooterBody component.
 */
const SummaryFooterBody: React.FC<SummaryFooterBodyProps> = ({
	className,
	children,
}) => {
	const classNames = generateCN("sui-summary-box__footer", {}, className)

	// Render the SummaryFooterBody component with a div element, applying the specified CSS classes.
	return <div className={classNames}>{children}</div>
}

export { SummaryFooterBody }
