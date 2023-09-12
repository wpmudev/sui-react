import React, { FC, useCallback } from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"
import * as Icons from "@wpmudev/sui-icons"

// Import required element(s)
import { BuilderButtonProps } from "./builder.types"

const BuilderButton: FC<BuilderButtonProps> = ({
	icon = "Add",
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

	// Determine the IconTag based on the provided icon value.
	let IconTag = null

	if (!isEmpty(icon)) {
		IconTag = Icons?.[icon ?? ""]
	}

	const onButtonClick = useCallback(() => {
		if (!!onClick) {
			onClick()
		}
	}, [onClick])

	return (
		<button className={classNames} {...methods} onClick={onButtonClick}>
			<IconTag size="sm" />
			{!isEmpty(title ?? "") && <span>{title}</span>}
		</button>
	)
}

// Publish component(s)
export { BuilderButton }
