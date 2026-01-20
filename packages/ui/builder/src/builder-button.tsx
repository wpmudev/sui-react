import React, { FC, useId, useCallback } from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import { Button } from "@wpmudev/sui-button"

// Import required element(s)
import { BuilderButtonProps } from "./builder.types"

const BuilderButton: FC<BuilderButtonProps> = ({
	id,
	icon = "Add",
	title = "Insert new field",
	className,
	isDisabled = false,
	onClick = () => {},
	_style = {},
}) => {
	const generatedId = useId()
	const builderButtonId = id || `sui-builder-button-${generatedId}`
	// `useInteraction` returns interaction state and methods.
	const [isHovered, isFocused, methods] = useInteraction({})
	const { suiInlineClassname } = useStyles(_style, className)

	// Class names based on interaction and disabled state.
	const classNames = generateCN(
		"sui-builder__button",
		{
			hover: isHovered && !isFocused && !isDisabled,
			focus: isFocused && !isDisabled,
			disabled: isDisabled,
		},
		suiInlineClassname,
	)

	const onButtonClick = useCallback(() => {
		if (!!onClick) {
			onClick()
		}
	}, [onClick])

	return (
		<Button
			id={builderButtonId}
			icon={icon}
			className={classNames}
			{...methods}
			onClick={onButtonClick}
		>
			{!isEmpty(title ?? "") && <span>{title}</span>}
		</Button>
	)
}

// Publish component(s)
export { BuilderButton }
