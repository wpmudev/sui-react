import React, { useCallback } from "react"

import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"

import { SearchOptionItemProps } from "./search.types"

const SearchOptionItem: React.FC<SearchOptionItemProps> = ({
	children,
	option,
	onClick,
}) => {
	const [isHovered, isFocused, methods] = useInteraction({})

	// Classname
	const className = generateCN("sui-search__options-item", {
		hover: isHovered && !isFocused,
		focus: isFocused,
	})

	// Handle on click
	const handleOnClick = useCallback(() => {
		// Pass selected option to the parent component
		onClick(option)
	}, [onClick, option])

	return (
		<button
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