import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"
import { Tooltip } from "@wpmudev/sui-tooltip"
import { Row } from "@wpmudev/sui-grid"
import { Tag } from "@wpmudev/sui-tag"
import * as Icons from "@wpmudev/sui-icons"

import { SummaryBoxItemProps } from "./summary-box.types"

/**
 * SummaryBoxItem Component
 *
 * A React functional component that represents an item in the list of summary items within a summary box.
 *
 * @return {JSX.Element} The SummaryBoxItem component.
 */
const SummaryBoxItem: React.FC<SummaryBoxItemProps> = ({
	title = "",
	titleUrl = "",
	description = "",
	className,
	tagTitle = "",
	tagColor = "default",
	actionIcon = "",
	actionIconColor = "default",
}) => {
	// Hook for handling interaction state (hover, focus).
	const [isHovered, isFocused, methods] = useInteraction({})

	const classNames = generateCN(
		"sui-summary-box__list-item",
		{
			hover: isHovered,
			focus: isFocused,
		},
		className,
	)

	// Dynamically determine the IconTag based on the provided actionIcon prop.
	let IconTag = null
	if (!!actionIcon) {
		// @ts-ignore
		IconTag = Icons?.[actionIcon]
	}

	return (
		<Row className={classNames} {...methods} data-testid="summary-box-item">
			<div className="sui-summary-box__list-item-info">
				{!isEmpty(titleUrl) ? <a href={titleUrl}>{title}</a> : title}
				{!isEmpty(description ?? "") && (
					<Tooltip
						label="(info)"
						type="icon"
						icon="info-alt"
						position="top"
						customWidth={300}
						customMobileWidth={200}
					>
						{description}
					</Tooltip>
				)}
			</div>
			{(!isEmpty(tagTitle) || !isEmpty(actionIcon)) && (
				<div className="sui-summary-box__list-item-status">
					{IconTag ? (
						<IconTag color={actionIconColor} size="md" />
					) : (
						<Tag color={tagColor}>{tagTitle}</Tag>
					)}
				</div>
			)}
		</Row>
	)
}

// Publish required component.
export { SummaryBoxItem }
