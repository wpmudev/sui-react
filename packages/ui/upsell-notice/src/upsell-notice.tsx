import React from "react"

import { _renderHTMLPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"

import { UpsellNoticeProps } from "./upsell-notice.types"
import { Check } from "@wpmudev/sui-icons"
import { Tag } from "@wpmudev/sui-tag"
import { useStyles } from "@wpmudev/sui-hooks"

const UpsellNotice: React.FC<UpsellNoticeProps> = ({
	title = "Title of Upsell",
	tagTitle = "",
	description = "",
	variation = "hummingbird",
	features = [],
	actions = null,
	_htmlProps = {},
	_style = {},
}) => {
	const { suiInlineClassname } = useStyles(_style)

	// Generate classnames for the upsell
	const classNames = generateCN(
		"sui-upsell-notice",
		{
			[variation]: !isEmpty(variation ?? ""),
		},
		suiInlineClassname,
	)

	return (
		<div
			className={classNames}
			data-testid="upsell-notice"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div className="sui-upsell-notice__header">
				<h3 className="sui-upsell-notice__header-title sui-heading--h5">
					{title}
					{!isEmpty(tagTitle ?? "") && (
						<Tag design="outlined" isSmall={true} colorScheme="black">
							{tagTitle}
						</Tag>
					)}
				</h3>
			</div>
			<div className="sui-upsell-notice__body">
				<p>{description}</p>
				{features?.length > 0 && (
					<ul className="sui-upsell-notice__features" data-testid="features">
						{/* Map and render each feature with a checkmark */}
						{features?.map((feature, index) => (
							<li key={index} className="sui-upsell-notice__features-item">
								<Check
									size="sm"
									className="sui-upsell-notice__features-item-icon"
								/>
								<span>{feature}</span>
							</li>
						))}
					</ul>
				)}
			</div>
			{actions && (
				<div
					className="sui-upsell-notice__footer"
					data-testid="upsell-notice-actions"
				>
					{actions}
				</div>
			)}
		</div>
	)
}

UpsellNotice.displayName = "UpsellNoticeProps"

export { UpsellNotice }
