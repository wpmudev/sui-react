import React, { useCallback, useId } from "react"

import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"
import { useInteraction, useStyles } from "@wpmudev/sui-hooks"

import { SearchOptionItemProps } from "./search.types"

const SearchOptionItem: React.FC<SearchOptionItemProps> = ({
	id,
	children,
	option,
	onClick,
	_style = {},
}) => {
	const generatedId = useId()
	const searchOptionItemId = id || `sui-search-option-item-${generatedId}`
	const [isHovered, isFocused, methods] = useInteraction({})

	const { suiInlineClassname } = useStyles(_style)

	// Classname
	const className = generateCN(
		"sui-search__options-item",
		{
			hover: isHovered && !isFocused,
			focus: isFocused,
		},
		suiInlineClassname,
	)

	// Handle on click
	const handleOnClick = useCallback(() => {
		// Pass selected option to the parent component
		onClick(option)
	}, [onClick, option])

	return (
		<button
			id={searchOptionItemId}
			role="menuitem"
			className={className}
			onClick={handleOnClick}
			onKeyDown={(e) => handleOnKeyDown(e, handleOnClick)}
			{...methods}
		>
			{children}
		</button>
	)
}

export { SearchOptionItem }
