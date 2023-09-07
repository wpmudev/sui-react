import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"
import * as Icons from "@wpmudev/sui-icons"

// Import required element(s)
import { BuilderBlockProps } from "./builder.types"

// BuilderBlock component using the BuilderBlockProps interface.
// This component represents an item within a builder navigation.
const BuilderBlock: React.FC<BuilderBlockProps> = ({
	url = "#",
	icon = "",
	title = "",
	className,
	action,
	isActive,
	isDisabled,
	...props
}) => {
	// `useInteraction` returns interaction state and methods.
	const [isHovered, isFocused, methods] = useInteraction({})

	// Class names based on interaction and disabled state.
	const classNames = generateCN(
		"sui-builder__item",
		{
			hover: isHovered && !isFocused && !isDisabled,
			focus: isFocused && !isDisabled,
			disabled: isDisabled,
			active: isActive,
		},
		className,
	)

	// Determine the IconTag based on the provided icon value.
	let IconTag = null
	if (!isEmpty(icon)) {
		IconTag = Icons?.[icon ?? ""]
	}

	return (
		<div className="sui-builder__block">
			<div className="sui-builder__block-info">
				<div className="sui-builder__block-move">
					<Icons.Grip size="sm" />
				</div>
				<div className="sui-builder__block-icon">
					<Icons.Bell size="sm" />
				</div>
				<div className="sui-builder__block-name">
					<div className="sui-builder__block-name-title">NAME</div>
					<div className="sui-builder__block-name-code">{`{something}`}</div>
				</div>
			</div>
			<div className="sui-builder__block-actions">ACTIONS</div>
		</div>
	)

	// Return JSX structure representing the BuilderBlock.
	return (
		<a
			className={classNames}
			href={url}
			{...methods}
			{...props}
			tabIndex={isDisabled ? -1 : 0}
		>
			{/* Display item info, including optional icon and title */}
			<div className="sui-builder__item-info">
				{IconTag && (
					<IconTag
						size="sm"
						color={(isHovered && !isFocused) || isActive ? "informative" : ""}
					/>
				)}
				<span>{title}</span>
			</div>

			{/* Display optional action component */}
			{!!action && <div className="sui-builder__item-action">{action}</div>}
		</a>
	)
}

// Publish component(s)
export { BuilderBlock }
