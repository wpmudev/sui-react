import React from "react"

import type { TableSectionProps } from "./table"

// TableHead component represents the head section of a table.
const TableHead: React.FC<TableSectionProps> = ({ children, ...props }) => {
	return (
		<thead className="sui-table__head" {...props}>
			{children}
		</thead>
	)
}

export { TableHead }
