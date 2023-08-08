import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { Col, Row } from "@wpmudev/sui-grid"
import { BoxGroup } from "@wpmudev/sui-box"

import { SummaryBoxBodyProps } from "./summary-box.types"

/**
 * SummaryBoxBody Component
 *
 * Body of a summary box. It displays content in two columns:
 * one for the main content and the other for a list of summary items.
 *
 * @returns {JSX.Element} The SummaryBoxBody component.
 */
const SummaryBoxBody: React.FC<SummaryBoxBodyProps> = ({
	className,
	children,
	summaryItems = [],
	reverseBlocks = false,
}) => {
	const classNames = generateCN("sui-summary-box__body", {}, className)

	// Create two columns to display the main content and the list of summary items.
	const cols = [
		<Col size="6" key={0} className="sui-summary-box__body-content">
			{children}
		</Col>,
		<Col size="6" key={1} className="sui-summary-box__list">
			{(summaryItems ?? []).map((summary, index) => summary)}
		</Col>,
	]

	// If reverseBlocks prop is true, reverse the order of the columns.
	if (reverseBlocks) {
		cols.reverse()
	}

	return (
		<BoxGroup isInline={true}>
			<Row align={{ md: "inline" }} className={classNames}>
				{cols.map((col) => col)}
			</Row>
		</BoxGroup>
	)
}

export { SummaryBoxBody }
