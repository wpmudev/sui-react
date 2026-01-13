import React, { useId } from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { Col, Row } from "@wpmudev/sui-grid"
import { BoxGroup } from "@wpmudev/sui-box"

import { SummaryBoxBodyProps } from "./summary-box.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

/**
 * SummaryBoxBody Component
 *
 * Body of a summary box. It displays content in two columns:
 * one for the main content and the other for a list of summary items.
 *
 * @param  root0
 * @param  root0.id
 * @param  root0.className
 * @param  root0.children
 * @param  root0.summaryItems
 * @param  root0.reverseBlocks
 * @param  root0._htmlProps
 * @param  root0._style
 * @return {JSX.Element} The SummaryBoxBody component.
 */
const SummaryBoxBody: React.FC<SummaryBoxBodyProps> = ({
	id,
	className,
	children,
	summaryItems = [],
	reverseBlocks = false,
	_htmlProps = {},
	_style = {},
}): JSX.Element => {
	const generatedId = useId()
	const summaryBoxBodyId = id || `sui_summary_box_body_${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)
	const classNames = generateCN("sui-summary-box__body", {}, suiInlineClassname)

	// Children default content
	children = useDefaultChildren(children, "{summary box body children}")

	// Create two columns to display the main content and the list of summary items.
	const cols = [
		<Col size="6" key={0}>
			<div className="sui-summary-box__body-content">{children}</div>
		</Col>,
		<Col size="6" key={1}>
			<div className="sui-summary-box__list">
				{(summaryItems ?? []).map((summary, index) => summary)}
			</div>
		</Col>,
	]

	// If reverseBlocks prop is true, reverse the order of the columns.
	if (reverseBlocks) {
		cols.reverse()
	}

	return (
		<BoxGroup
			isInline={true}
			className="sui-summary-box__info"
			_htmlProps={{ id: summaryBoxBodyId, ..._htmlProps }}
		>
			<Row align={{ md: "inline" }} className={classNames}>
				{cols.map((col) => col)}
			</Row>
		</BoxGroup>
	)
}

export { SummaryBoxBody }
