import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"
import * as Icons from "@wpmudev/sui-icons"

// Import required element(s)
import { BuilderBlockProps } from "./builder.types"
import { Col } from "@wpmudev/sui-grid"

// BuilderBlock component using the BuilderBlockProps interface.
// This component represents an item within a builder navigation.
const BuilderField: React.FC<BuilderBlockProps> = ({
	colSize = 1,
	icon = "",
	title = "",
	className,
	action,
	isActive,
	isDisabled,
	allowDrag = true,
	isDragging = false,
	hasError = false,
	onClick = () => {},
	...props
}) => {
	// `useInteraction` returns interaction state and methods.
	const [isHovered, isFocused, methods] = useInteraction({})

	// Class names based on interaction and disabled state.
	const classNames = generateCN(
		"sui-builder__field",
		{
			hover: isHovered && !isDragging && !hasError,
			focus: isDragging && !hasError,
			disabled: isDisabled,
			active: isActive,
			dragging: isDragging,
			error: hasError,
		},
		className,
	)

	// // Determine the IconTag based on the provided icon value.
	let IconTag = null

	if (!isEmpty(icon)) {
		IconTag = Icons?.[icon ?? ""]
	}

	return (
		<Col className={classNames} size={colSize} {...props} {...methods}>
			<div className="sui-builder__field-info">
				{allowDrag && (
					<div className="sui-builder__field-move">
						<Icons.Grip size="md" />
					</div>
				)}
				{IconTag && (
					<div className="sui-builder__field-icon">
						<IconTag size="sm" />
					</div>
				)}
				<div className="sui-builder__field-name">{title}</div>
			</div>
			<div className="sui-builder__field-code">{`{Code}`}</div>
			{action && <div className="sui-builder__field-actions">{action}</div>}
		</Col>
	)
}

// Publish component(s)
export { BuilderField }
