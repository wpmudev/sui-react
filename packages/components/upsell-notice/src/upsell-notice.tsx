import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import * as Icons from "@wpmudev/sui-icons"

import { UpsellProps } from "./upsell.types"
import { Check } from "@wpmudev/sui-icons"

const UpsellNotice: React.FC<UpsellProps> = ({
	title,
	description = "",
	size,
	variation = "hummingbird",
	features = [],
	actions = null,
}) => {
	// Generate classnames for the upsell
	const classNames = generateCN("sui-upsell-notice", {
		[variation]: !isEmpty(variation ?? ""),
		[size]: !isEmpty(size ?? ""),
	})

	return (
		<div className={classNames}>
			<div className="sui-upsell__header">
				<h3 className="sui-upsell__header-title">
					{title ?? "Title of Upsell"}
				</h3>
			</div>
			<div className="sui-upsell__body">
				{description}
				{features?.length > 0 && (
					<ul className="sui-upsell__features">
						{/* Map and render each feature with a checkmark */}
						{features?.map((feature, index) => (
							<li key={index} className="sui-upsell__features-item">
								<Check />
								<span>{feature}</span>
							</li>
						))}
					</ul>
				)}
			</div>
			{actions && <div className="sui-upsell__footer">{actions}</div>}
		</div>
	)
}

UpsellNotice.displayName = "Upsell"

export { UpsellNotice }
