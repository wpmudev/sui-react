import React, { useId } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

import { SummaryBoxContentProps } from "./summary-box.types"
import { useStyles } from "@wpmudev/sui-hooks"

/**
 * SummaryBox Content Component
 *
 * Content for the left box with a white background
 *
 * @param {Object}          props            - The props for the SummaryBoxContent component.
 * @param {string}          props.className  - Additional CSS classes to apply to the component.
 * @param {string}          props.span       - The space the content should take either half or full
 * @param {string}          props.padding    - The space the content should take either half or full
 * @param {React.ReactNode} props.children   - Optional additional content within the summary box.
 * @param                   props._htmlProps
 * @param                   props._style
 * @return {JSX.Element} The SummaryBoxContent component.
 */
export const SummaryBoxContent: React.FC<SummaryBoxContentProps> = ({
	id,
	className,
	children,
	span = "half",
	padding = "lg",
	_style,
	_htmlProps,
}) => {
	const generatedId = useId()
	const summaryBoxContentId = id || `sui_summary_box_content_${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)

	const classNames = generateCN(
		"sui-summary-box__content",
		{
			fluid: span === "full",
			[padding]: !!padding && padding !== "lg",
		},
		suiInlineClassname,
	)

	return (
		<div id={summaryBoxContentId} className={classNames} {..._htmlProps}>
			{children}
		</div>
	)
}
