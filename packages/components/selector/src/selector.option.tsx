import React from "react"

import { Tooltip } from "@wpmudev/sui-tooltip"
import { generateCN } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"
import { IconProps } from "@wpmudev/sui-icon"
import { Tag } from "@wpmudev/sui-tag"
import Icons from "@wpmudev/sui-icons"
import { IconsNamesType } from "@wpmudev/sui-icons/dist"
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
	isPro,
	tagColor,
}) => {
	// Custom hook to handle interaction states (hover, focus, etc.)
	const [isHovered, isFocused, methods] = useInteraction({})

	// Generate CSS class names
	const classNames = generateCN("sui-selector__option", {})

	let Icon: React.ComponentType<IconProps> | null = null

	const isImage = (iconOrBrandUrl ?? "")?.indexOf(".") > -1

	// Check if the provided iconOrBrandUrl is an image or an icon reference
	if (!isImage) {
		// Look up the appropriate icon based on the provided reference
		Icon = Icons[iconOrBrandUrl as IconsNamesType]
	}

	return (
		<div className={classNames} data-testid="selector-option" {...methods}>
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
				<div
					className="sui-selector__option-delete"
					data-testid="selector-remove"
				>
					<Tooltip
						type="icon"
						icon="trash"
						iconSize="sm"
						appearance="primary"
						color="red"
						iconOnly={true}
						isSmall={true}
						className="sui-selector__option-delete-btn"
						onClick={() => onRemove}
						position="top-right"
						customWidth={70}
					>
						Remove
					</Tooltip>
				</div>
			)}

			{/* Display icon and title/header if either iconOrBrandUrl or title is provided */}
			{(!!iconOrBrandUrl || !!title) && (
				<div className="sui-selector__option-header">
					{!!iconOrBrandUrl && (
						<div
							className="sui-selector__option-header-icon"
							data-testid="selector-icon"
						>
							{isImage && <img src={iconOrBrandUrl} alt="Selector icon" />}
							{!isImage && !!Icon && (
								<Icon
									size={["icon-only"].includes(variation ?? "") ? "md" : "sm"}
								/>
							)}
						</div>
					)}
					{!!title && !["icon-only"].includes(variation ?? "") && (
						<div className="sui-selector__option-header-title">
							<span>{title}</span>
							{isPro && (
								<Tag
									design="outlined"
									color="black"
									isSmall={true}
									isUppercase={true}
								>
									Pro
								</Tag>
							)}
							{!!tag && !isPro && (
								<Tag style="truncated" color={tagColor}>
									{tag}
								</Tag>
							)}
						</div>
					)}
				</div>
			)}
			{/* Display image and/or description for certain variations */}
			{(!!imageUrl || !!description) &&
				["compound", "image"].includes(variation ?? "") && (
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
