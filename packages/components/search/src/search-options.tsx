import React, { useCallback } from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { SearchOptionItem } from "./search-option-item"
import { SearchOptionsProps } from "./search.types"

const SearchOptions: React.FC<SearchOptionsProps> = ({
	options,
	value,
	setValue,
	setIsPopoverVisible,
}) => {
	const className = generateCN("sui-search__options", {})

	// Handle option item click
	const onOptionClick = useCallback(
		(option) => {
			setIsPopoverVisible(false)
			setValue(option?.label)
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
					{option?.label.replace(value, "")}
				</SearchOptionItem>
			))}
		</div>
	)
}

export { SearchOptions }
