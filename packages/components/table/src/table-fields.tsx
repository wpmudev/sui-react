import React, { useContext } from "react"
import { TableColumnType, TableContext } from "./table-context"
import { TableFieldsProps } from "./table.types"

// Table Fields renders columns in table accordion body
const TableFields: React.FC<TableFieldsProps> = ({ children }) => {
	const ctx = useContext(TableContext)
	const { columns } = ctx!

	// Retrieve the primary columns
	const primaryCol = columns.find((col: TableColumnType) => col.isPrimary)
	// Get the index of primary column to exclude when rendering
	const primaryColIndex = columns.findIndex(
		(col: TableColumnType) => col.isPrimary,
	)

	return (
		<div className="sui-table__fields">
			{/** Render primary column as header */}
			{!!primaryCol && !!primaryColIndex && (
				<div className="sui-table__fields-primary">
					{
						// @ts-ignore
						children[primaryColIndex]?.props?.children?.props?.children
					}
				</div>
			)}

			<div className="sui-table__fields-items">
				{columns.map((column: TableColumnType, index) => {
					// Skip if primary column
					if (primaryColIndex === index) {
						return null
					}

					return (
						<li className="sui-table__fields-item" key={index}>
							<div className="sui-table__fields-item-title">
								{column?.title}
							</div>
							<div className="sui-table__fields-item-value">
								{
									// @ts-ignore
									children[index]?.props?.children?.props?.children
								}
							</div>
						</li>
					)
				})}
			</div>
		</div>
	)
}

export { TableFields }
