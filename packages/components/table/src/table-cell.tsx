import React, { HTMLProps } from "react"
import classnames from "classnames"
import { TableCellProps } from "./table.types"

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
