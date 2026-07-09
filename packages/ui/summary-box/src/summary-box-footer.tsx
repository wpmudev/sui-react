import React, { useId } from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { SummaryFooterBodyProps } from "./summary-box.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

/**
 * SummaryFooterBody Component
 *
 * Component that represents the footer of a summary box. It displays content within a div element.
 *
 * @param {Object} props           - The props for the SummaryFooterBody component.
 * @param          props.id
 * @param {string} props.className - Additional CSS classes to apply to the component.
 * @param {*}      props.children  - The content to be displayed within the component.
 * @param          props._style
 * @return {JSX.Element} The SummaryFooterBody component.
 */
const SummaryFooterBody: React.FC<SummaryFooterBodyProps> = ({
	id,
	className,
	children,
	_style = {},
	...props
}) => {
	const generatedId = useId()
	const summaryFooterBodyId = id || `sui-summary-footer-body-${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)
	const classNames = generateCN(
		"sui-summary-box__footer",
		{},
		suiInlineClassname,
	)

	// Default children content
	children = useDefaultChildren(children, "{summary footer body}")
	// Render the SummaryFooterBody component with a div element, applying the specified CSS classes.
	return (
		<div
			id={summaryFooterBodyId}
			className={classNames}
			data-testid="summary-box-footer"
		>
			{children}
		</div>
	)
}

export { SummaryFooterBody }
