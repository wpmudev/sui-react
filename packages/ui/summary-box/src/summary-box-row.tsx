import React from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { SummaryBoxRowProps } from "./summary-box.types"
import { useStyles } from "@wpmudev/sui-hooks"

/**
 * SummaryBoxRow Component
 *
 * To handle a layout of multiple SummaryBoxContent component
 *
 * @param {Object}          props            - The props for the SummaryBoxRow component.
 * @param {string}          props.className  - Additional CSS classes to apply to the component.
 * @param {React.ReactNode} props.children   - Optional additional content within the summary box.
 * @param                   props._htmlProps
 * @param                   props._style
 * @return {JSX.Element} The SummaryBoxRow component.
 */
export const SummaryBoxRow: React.FC<SummaryBoxRowProps> = ({
	className,
	children,
	_style,
	_htmlProps,
}) => {
	const { suiInlineClassname } = useStyles(_style, className)

	const classNames = generateCN("sui-summary-box__row", {}, suiInlineClassname)

	return (
		<div className={classNames} {..._htmlProps}>
			{children}
		</div>
	)
}
