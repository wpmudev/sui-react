import React from "react"

import { _renderHTMLPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"
import { UpsellProps } from "./upsell.types"
import Icons, { IconsNamesType, Check } from "@wpmudev/sui-icons"
import { variationsList } from "./helpers"
import { useStyles } from "@wpmudev/sui-hooks"

const Upsell: React.FC<UpsellProps> = ({
	title,
	description = "",
	size,
	variation = "hummingbird",
	features = [],
	actions = null,
	featuresIcon = "Check",
	featuresTitle = "",
	_htmlProps = {},
	_style = {},
}) => {
	const { suiInlineClassname } = useStyles(_style)

	// Generate classnames for the upsell
	const classNames = generateCN(
		"sui-upsell",
		{
			[variation as string]: !isEmpty(variation ?? ""),
			[size as string]: !isEmpty(size ?? ""),
		},
		suiInlineClassname,
	)

	// Get current variation options
	const currentVar = variationsList[variation]

	// Get the appropriate SVG Icon based on variation
	const Icon = Icons?.[currentVar?.icon as IconsNamesType]

	// Feature icon
	const FeatureIcon = Icons?.[featuresIcon]

	return (
		<div
			className={classNames}
			data-testid="upsell"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div className="sui-upsell__header">
				{Icon && (
					<div className="sui-upsell__header-icon" data-testid="upsell-icon">
						<div
							className={generateCN("sui-upsell__icon", {
								[variation]: !isEmpty(variation ?? ""),
							})}
						>
							<Icon fill="white" />
						</div>
					</div>
				)}
				<h3
					className="sui-upsell__header-title sui-heading--h5"
					data-testid="upsell-title"
				>
					{/* Use title or default to the title from variationsList */}
					{title ?? currentVar?.title}
				</h3>
			</div>
			<div className="sui-upsell__body">
				{/* Use description or default to the description from variationsList */}
				{!isEmpty((description ?? "") as string)
					? description
					: currentVar?.description}
				{!!featuresTitle && (
					<h4 className="sui-upsell__features-title">{featuresTitle}</h4>
				)}
				{features?.length > 0 && (
					<ul
						className={generateCN("sui-upsell__features", {
							"has-title": !!featuresTitle,
						})}
						data-testid="features"
					>
						{/* Map and render each feature with a checkmark */}
						{features?.map((feature, index) => (
							<li key={index} className="sui-upsell__features-item">
								<FeatureIcon size="sm" />
								<span>{feature}</span>
							</li>
						))}
					</ul>
				)}
			</div>
			{actions && (
				<div className="sui-upsell__footer" data-testid="actions">
					{actions}
				</div>
			)}
		</div>
	)
}

Upsell.displayName = "Upsell"

export { Upsell }
