import React from "react"

export const PaginationResults = ({ ...properties }) => {
	const items = React.Children.map(properties.childElements, (data) =>
		React.cloneElement(data),
	)?.slice(properties.elementsStartIndex, properties.elementsEndIndex)
	return React.Children.map(properties.componentWrapper, (data) =>
		React.cloneElement(data, "", items),
	)
}
