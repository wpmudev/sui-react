import React from "react"

import { CheckAlt } from "@wpmudev/sui-icons"
import { Tag } from "@wpmudev/sui-tag"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"

const Option = ({
	icon,
	title,
	description,
	imageUrl,
	isChecked,
	alignment,
	variation,
}) => {
	let isCompound = false

	return (
		<div
			className={generateCN("sui-selector__option", {
				[alignment]: !isEmpty(alignment ?? ""),
				[variation]: !isEmpty(variation ?? ""),
			})}
		>
			{isChecked && (
				<div className="sui-selector__option-tip">
					<span>
						<CheckAlt size="xsm" />
					</span>
				</div>
			)}
			{(!!icon || !!title) && (
				<div className="sui-selector__option-header">
					{!!icon && (
						<div className="sui-selector__option-header-icon">
							<CheckAlt size="sm" />
						</div>
					)}
					{!!title && (
						<div className="sui-selector__option-header-title">
							<span>{title}</span>
							<Tag isSmall={true}>TEST</Tag>
						</div>
					)}
				</div>
			)}
			{(!!imageUrl || !!description) && (
				<div className="sui-selector__option-body">
					{!!imageUrl && (
						<div
							className="sui-selector__option-body-image"
							style={{
								backgroundImage: "url('https://placehold.co/200x100.png')",
							}}
						/>
					)}
					{!!description && (
						<div className="sui-selector__option-body-description">
							{description}
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export { Option }
