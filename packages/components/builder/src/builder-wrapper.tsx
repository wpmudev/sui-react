import React, { Children, cloneElement } from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"
import { Row } from "@wpmudev/sui-grid"

// Import required element(s)
// import { BuilderWrapperProps } from "./builder.types"

// BuilderWrapper component using the BuilderWrapperProps interface.
// This component represents an item within a builder navigation.
const BuilderWrapper: React.FC<any> = ({
	url = "#",
	icon = "",
	title = "",
	className,
	action,
	isActive,
	isDisabled,
	children,
	...props
}) => {
	// `useInteraction` returns interaction state and methods.
	const [isHovered, isFocused, methods] = useInteraction({})

	// Class names based on interaction and disabled state.
	const classNames = generateCN(
		"sui-builder__wrapper",
		{
			hover: isHovered && !isFocused && !isDisabled,
			focus: isFocused && !isDisabled,
			disabled: isDisabled,
			active: isActive,
		},
		className,
	)

	return (
		<Row className={classNames}>
			{Children.map(children, (child: React.ReactNode) =>
				cloneElement(child, {
					colSize: Children.count(children),
				} as object),
			)}
		</Row>
	)
}

// Publish component(s)
export { BuilderWrapper }
