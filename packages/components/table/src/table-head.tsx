import React from "react"
import { TableSectionProps } from "./table.types"

// TableHead component represents the head section of a table.
const TableHead: React.FC<TableSectionProps> = ({ children, ...props }) => {
	return (
		<thead className="sui-table__head" {...props}>
			{children}
		</thead>
	)
}

export { TableHead }
