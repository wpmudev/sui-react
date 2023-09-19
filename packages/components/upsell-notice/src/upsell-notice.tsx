import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"

import { UpsellNoticeProps } from "./upsell-notice.types"
import { Check } from "@wpmudev/sui-icons"
import { Tag } from "@wpmudev/sui-tag"

const UpsellNotice: React.FC<UpsellNoticeProps> = ({
	title,
	tagTitle = "",
	description = "",
	variation = "hummingbird",
	features = [],
	actions = null,
}) => {
	// Generate classnames for the upsell
	const classNames = generateCN("sui-upsell-notice", {
		[variation]: !isEmpty(variation ?? ""),
	})

	return (
		<div className={classNames}>
			<div className="sui-upsell-notice__header">
				<h3 className="sui-upsell-notice__header-title">
					{title ?? "Title of Upsell"}
					{!isEmpty(tagTitle ?? "") && (
						<Tag design="outlined" isSmall={true} color="black">
							{tagTitle}
						</Tag>
					)}
				</h3>
			</div>
			<div className="sui-upsell-notice__body">
				<p>{description}</p>
				{features?.length > 0 && (
					<ul className="sui-upsell-notice__features">
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
			{actions && <div className="sui-upsell-notice__footer">{actions}</div>}
		</div>
	)
}

UpsellNotice.displayName = "UpsellNoticeProps"

export { UpsellNotice }
