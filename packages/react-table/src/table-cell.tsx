import React, { HTMLProps } from "react"
import classnames from "classnames"

/**
 * Interface representing the properties of a table cell.
 */
interface TableCellProps
	extends HTMLProps<HTMLTableCellElement | HTMLTableHeaderCellElement> {
	/**
	 * Children nodes of the table cell.
	 */
	children?: React.ReactNode
}

const TableCell: React.FC<TableCellProps> = ({
	children,
	hasCheckbox,
	isHeading,
	...props
}) => {
	// Define element tag name
	const TagName: "td" | "th" = isHeading ? "th" : "td"

	return (
		<TagName
			className={classnames("sui-table__cell", {
				"sui-table__checkbox": hasCheckbox,
			})}
			{...props}
		>
			{children}
		</TagName>
	)
}

export { TableCell }
export type { TableCellProps }
