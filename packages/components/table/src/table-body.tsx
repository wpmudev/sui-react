import React from "react"
import { TableSectionProps } from "./table.types"

// TableFooter component represents the body section of a table.
const TableBody: React.FC<TableSectionProps> = ({ children, ...props }) => {
	return (
		<tbody className="sui-table__body" {...props}>
			{children}
		</tbody>
	)
}

export { TableBody }
