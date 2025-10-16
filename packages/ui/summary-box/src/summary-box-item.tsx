import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import { Tooltip } from "@wpmudev/sui-tooltip"
import { Row } from "@wpmudev/sui-grid"
import { Tag } from "@wpmudev/sui-tag"
import Icons from "@wpmudev/sui-icons"
import { IconProps } from "@wpmudev/sui-icon"

import { SummaryBoxItemProps } from "./summary-box.types"

/**
 * SummaryBoxItem Component
 *
 * A React functional component that represents an item in the list of summary items within a summary box.
 *
 * @param {Object}          props                      - The props for the SummaryBoxItem component.
 * @param {string}          [props.title=""]           - The title of the item.
 * @param {string}          [props.titleUrl=""]        - The URL for the title.
 * @param {string}          [props.description=""]     - A description for the item.
 * @param {string}          props.className            - Additional CSS classes to apply to the component.
 * @param {string}          [props.tagTitle=""]        - The title for a tag associated with the item.
 * @param {string}          [props.tagColor="default"] - The color of the tag (e.g., "default", "primary").
 * @param {string}          [props.actionIcon=""]      - An optional action icon for the item.
 * @param {string}          [props.actionIconColor=""] - The color of the action icon.
 * @param {Object}          [props.tagProps={}]        - Additional props to be passed to the Tag component (optional).
 * @param {Object}          [props.linkProps={}]       - Additional props to be passed to the link element (if titleUrl is provided).
 * @param {React.ReactNode} [props.children]           - Optional children elements to be rendered within the item.
 *
 * @param                   props._htmlProps
 * @param                   props._style
 * @return {JSX.Element} The SummaryBoxItem component.
 */
const SummaryBoxItem: React.FC<SummaryBoxItemProps> = ({
	title = "",
	titleUrl = "",
	description = "",
	className,
	tagTitle = "",
	tagColor = "default",
	actionIcon,
	children,
	actionIconColor = "",
	tagProps = {},
	linkProps = {},
	_htmlProps = {},
	_style = {},
}: SummaryBoxItemProps): JSX.Element => {
	// Hook for handling interaction state (hover, focus).
	const [isHovered, isFocused, methods] = useInteraction({})
	const { suiInlineClassname } = useStyles(_style, className)

	const classNames = generateCN(
		"sui-summary-box__list-item",
		{
			hover: isHovered,
			focus: isFocused,
		},
		suiInlineClassname,
	)

	// Dynamically determine the IconTag based on the provided actionIcon prop.
	let IconTag: React.ComponentType<IconProps> | null = null

	if (!!actionIcon) {
		IconTag = Icons?.[actionIcon]
	}

	return (
		<Row
			className={classNames}
			{...methods}
			_htmlProps={{ "data-testid": "summary-box-item", ..._htmlProps }}
		>
			<div className="sui-summary-box__list-item-info">
				{!isEmpty(titleUrl) ? (
					<a href={titleUrl} {...linkProps}>
						{title}
					</a>
				) : (
					title
				)}
				{!isEmpty(description ?? "") && (
					<Tooltip
						label="(info)"
						type="icon"
						icon="InfoAlt"
						placement="top"
						customWidth={300}
						customMobileWidth={200}
					>
						{description}
					</Tooltip>
				)}
			</div>
			{(!isEmpty(tagTitle) || !!actionIcon) && (
				<div className="sui-summary-box__list-item-status">
					{IconTag ? (
						<IconTag
							colorScheme={actionIconColor as IconProps["colorScheme"]}
							size="md"
						/>
					) : (
						<Tag colorScheme={tagColor} {...tagProps}>
							{tagTitle}
						</Tag>
					)}
				</div>
			)}
			{children && (
				<div className="sui-summary-box__list-item-children">{children}</div>
			)}
		</Row>
	)
}

// Publish required component.
export { SummaryBoxItem }
