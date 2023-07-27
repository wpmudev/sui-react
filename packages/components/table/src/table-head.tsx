import React, { Children, cloneElement, createElement } from "react"
import { TableSectionProps } from "./table.types"

// TableHead component represents the head section of a table.
const TableHead: React.FC<TableSectionProps> = ({
	children,
	hasActions = false,
	...props
}) => {
	return (
		<thead className="sui-table__head" {...props}>
			{Children.toArray(children).map((child: React.ReactNode) =>
				cloneElement(child, { ...child.props, isUnderHeader: true }),
			)}
		</thead>
	)
}

export { TableHead }
