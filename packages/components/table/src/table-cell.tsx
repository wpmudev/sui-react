import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { Grip } from "@wpmudev/sui-icons"

import { TableCellProps } from "./table.types"

/**
 * TableCell component represents a cell within a table row, either a regular cell (td) or a heading cell (th).
 * It can display content, optionally have a drag icon, and accepts additional classNames and props.
 *
 * @param {TableCellProps} props             - The properties for the TableCell component.
 * @param {boolean}        props.children    - The body
 * @param {boolean}        props.isHeading   - Determines if the cell is a heading cell (th).
 * @param {string}         props.className   - Additional classNames to apply to the cell.
 * @param {boolean}        props.hasDragIcon - Determines if the cell should display a drag icon (Grip icon).
 * @return {JSX.Element} The JSX representation of the TableCell component.
 */
const TableCell: React.FC<TableCellProps> = ({
	children,
	isHeading,
	className = "",
	hasDragIcon = false,
	...props
}) => {
	// Define element tag name based on whether it's a heading cell (th) or a regular cell (td).
	const TagName: "td" | "th" = isHeading ? "th" : "td"

	return (
		<TagName
			className={generateCN("sui-table__cell", {}, className)} // Use your utility function to generate classNames here if needed.
			{...(isHeading ? { scope: "col" } : {})}
			{...props}
			tabIndex={0}
			role="rowheader"
		>
			{hasDragIcon && <Grip className="sui-table__cell--drag" size="sm" />}{" "}
			{/* Replace "Grip" with the correct icon component */}
			{children}
		</TagName>
	)
}

export { TableCell }
