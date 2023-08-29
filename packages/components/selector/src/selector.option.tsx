import React from "react"

import { Button } from "@wpmudev/sui-button"
import { generateCN } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"
import * as Icons from "@wpmudev/sui-icons"

import { SelectorOptionProps } from "./selector.types"

const SelectorOption: React.FC<SelectorOptionProps> = ({
	iconOrBrandUrl,
	title,
	description,
	imageUrl,
	isChecked,
	variation,
	tag,
	allowRemove,
	onRemove,
}) => {
	// Custom hook to handle interaction states (hover, focus, etc.)
	const [isHovered, isFocused, methods] = useInteraction({})

	// Generate CSS class names
	const classNames = generateCN("sui-selector__option", {})

	let Icon = null
	const isImage = iconOrBrandUrl?.indexOf(".") > -1

	// Check if the provided iconOrBrandUrl is an image or an icon reference
	if (!isImage) {
		// Look up the appropriate icon based on the provided reference
		Icon = Icons?.[iconOrBrandUrl] ?? null
	}

	return (
		<div className={classNames} {...methods}>
			{/* Display a checkmark when the option is checked */}
			{isChecked && (
				<div className="sui-selector__option-tip">
					<span>
						<Icons.CheckAlt size="xs" />
					</span>
				</div>
			)}
			{/* Display a remove button when hovering and allowRemove is true */}
			{allowRemove && isHovered && (
				<div className="sui-selector__option-delete">
					<Button
						icon="trash"
						iconSize="sm"
						appearance="primary"
						color="red"
						iconOnly={true}
						isSmall={true}
						className="sui-selector__option-delete-btn"
						onClick={() => onRemove}
					/>
				</div>
			)}
			{["icon-only"].includes(variation) && !!tag && tag}
			{/* Display icon and title/header if either iconOrBrandUrl or title is provided */}
			{(!!iconOrBrandUrl || !!title) && (
				<div className="sui-selector__option-header">
					{!!iconOrBrandUrl && (
						<div className="sui-selector__option-header-icon">
							{isImage && <img src={iconOrBrandUrl} alt="Selector icon" />}
							{!isImage && !!Icon && (
								<Icon size={["icon-only"].includes(variation) ? "md" : "sm"} />
							)}
						</div>
					)}
					{!!title && !["icon-only"].includes(variation) && (
						<div className="sui-selector__option-header-title">
							<span>{title}</span>
							{!!tag && tag}
						</div>
					)}
				</div>
			)}
			{/* Display image and/or description for certain variations */}
			{(!!imageUrl || !!description) &&
				["compound", "image"].includes(variation) && (
					<div className="sui-selector__option-body">
						{!!imageUrl && "image" === variation && (
							<span
								className="sui-selector__option-body-image"
								role="img"
								aria-label="Option image"
								style={{
									backgroundImage: `url('${imageUrl}')`,
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

export { SelectorOption }
