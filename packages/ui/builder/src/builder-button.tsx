import React, { FC, useCallback } from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import { Button } from "@wpmudev/sui-button"

// Import required element(s)
import { BuilderButtonProps } from "./builder.types"

const BuilderButton: FC<BuilderButtonProps> = ({
	icon = "Add",
	title = "Insert new field",
	className,
	isDisabled = false,
	onClick = () => {},
	_style = {},
}) => {
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
