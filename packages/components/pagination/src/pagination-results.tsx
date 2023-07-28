import React from "react"

// pagination elements ( the actual pages )
export const PaginationResults = ({ ...properties }) => {
	const items = React.Children.map(properties.childElements, (data) =>
		React.cloneElement(data),
	)?.slice(properties.elementsStartIndex, properties.elementsEndIndex)
	return React.Children.map(properties.componentWrapper, (data) =>
		React.cloneElement(data, "", items),
	)
}
