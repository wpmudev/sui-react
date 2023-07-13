import React from "react"
import { TableSectionProps } from "./table.types"

// TableFooter component represents the footer section of a table.
const TableFooter: React.FC<TableSectionProps> = ({ children, ...props }) => {
	return (
		<tfoot className="sui-table__footer" {...props}>
			{children}
		</tfoot>
	)
}

export { TableFooter }
