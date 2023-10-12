import React, { FC, useCallback } from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"
import * as Icons from "@wpmudev/sui-icons"
import { Button } from "@wpmudev/sui-button"

// Import required element(s)
import { BuilderButtonProps } from "./builder.types"

const BuilderButton: FC<BuilderButtonProps> = ({
	icon = "add",
	title = "Insert new field",
	className,
	isDisabled = false,
	onClick = () => {},
}) => {
	// `useInteraction` returns interaction state and methods.
	const [isHovered, isFocused, methods] = useInteraction({})

	// Class names based on interaction and disabled state.
	const classNames = generateCN(
		"sui-builder__button",
		{
			hover: isHovered && !isFocused && !isDisabled,
			focus: isFocused && !isDisabled,
			disabled: isDisabled,
		},
		className,
	)

	const onButtonClick = useCallback(() => {
		if (!!onClick) {
			onClick()
		}
	}, [onClick])

	return (
		<Button
			icon={icon}
			className={classNames}
			{...methods}
			onClick={onButtonClick}
			data-testid="builder-add-more"
		>
			{!isEmpty(title ?? "") && <span>{title}</span>}
		</Button>
	)
}

// Publish component(s)
export { BuilderButton }
