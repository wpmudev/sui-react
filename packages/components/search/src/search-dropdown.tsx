import React, { useEffect, useState } from "react"
import { SearchProps } from "./search.types"

const SearchDropdown: React.FC<SearchProps> = ({
	children,
	searchValue = "",
	...props
}) => {
	const [filteredItems, setFilteredItems] = useState(children)

	// Filter children based on searchValue
	useEffect(() => {
		const filtered = React.Children.toArray(children).filter((child) => {
			if (typeof child === "string") {
				return child.toLowerCase().includes(searchValue.toLowerCase())
			} else if (React.isValidElement(child)) {
				const value = child.props.value || ""
				const childText =
					typeof child.props.children === "string"
						? child.props.children.toLowerCase()
						: ""
				return (
					value.toLowerCase().includes(searchValue.toLowerCase()) ||
					childText.includes(searchValue.toLowerCase())
				)
			}
			return false
		})

		setFilteredItems(filtered)
	}, [searchValue, children])

	return (
		<ul className="sui-search__dropdown" {...props}>
			{filteredItems}
		</ul>
	)
}

export { SearchDropdown }
