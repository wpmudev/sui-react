import React, { Children, cloneElement } from "react"
import { TableSectionProps } from "./table.types"

// TableFooter component represents the footer section of a table.
const TableFooter: React.FC<TableSectionProps> = ({ children, ...props }) => {
	return (
		<table className="sui-table__table sui-table__table--footer">
			<tfoot className="sui-table__footer" {...props}>
				{Children.toArray(children).map((child: React.ReactNode) =>
					cloneElement(child as React.ReactElement, {
						...(child as React.ReactElement).props,
						isUnderFooter: true,
					}),
				)}
			</tfoot>
		</table>
	)
}

TableFooter.displayName = "TableFooter"

export { TableFooter }
