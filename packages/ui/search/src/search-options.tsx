import React, { useCallback } from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { SearchOptionItem } from "./search-option-item"
import { SearchOptionsProps } from "./search.types"
import { useStyles } from "@wpmudev/sui-hooks"

const SearchOptions: React.FC<SearchOptionsProps> = ({
	options,
	value,
	setValue,
	setIsPopoverVisible,
	_style = {},
}) => {
	const { suiInlineClassname } = useStyles(_style)
	const className = generateCN("sui-search__options", {}, suiInlineClassname)

	// Handle option item click
	const onOptionClick = useCallback(
		(option: string) => {
			setIsPopoverVisible(false)
			setValue(option)
		},
		[setIsPopoverVisible, setValue],
	)

	// Display no result
	if (options?.length <= 0) {
		return (
			<div className="sui-search__hint">
				<span>No result was found</span>
			</div>
		)
	}

	return (
		<div role="menu" className={className}>
			{options?.map((option, index) => (
				<SearchOptionItem key={index} option={option} onClick={onOptionClick}>
					{!isEmpty(value) && <span>{value}</span>}
					{option?.replace(value, "")}
				</SearchOptionItem>
			))}
		</div>
	)
}

export { SearchOptions }
