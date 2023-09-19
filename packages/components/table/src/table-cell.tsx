import React, { Fragment, useCallback, useContext, useRef } from "react"

import { generateCN, handleOnKeyDown, isEmpty } from "@wpmudev/sui-utils"
import * as Icons from "@wpmudev/sui-icons"
import { useInteraction } from "@wpmudev/sui-hooks"

import { TableCellProps } from "./table.types"
import { TableContext } from "./table-context"

/**
 * TableCell component represents a cell within a table row, either a regular cell (td) or a heading cell (th).
 * It can display content, optionally have a drag icon, and accepts additional classNames and props.
 *
 * @param {TableCellProps} props             - The properties for the TableCell component.
 * @param {string}         props.id          - Table Cell ID
 * @param {boolean}        props.children    - The body
 * @param {boolean}        props.isHeading   - Determines if the cell is a heading cell (th).
 * @param {string}         props.className   - Additional classNames to apply to the cell.
 * @param {boolean}        props.hasDragIcon - Determines if the cell should display a drag icon (Grip icon).
 * @param {boolean}        props.isSortable  - Makes cell sortable
 * @param {boolean}        props.isSticky    - Freeze first and last columns
 * @param {boolean}        props.isTrim      - Trim table cell content when there isn't enough space
 * @param {boolean}        props.isPrimary   - Make column primary (note: only one column can be primary)
 * @param {boolean}        props.style       - CSS
 *
 * @return {JSX.Element} The JSX representation of the TableCell component.
 */
const TableCell: React.FC<TableCellProps> = ({
	id,
	children,
	isHeading,
	className = "",
	hasDragIcon = false,
	isAction = false,
	isSortable = false,
	isSticky = false,
	isTrim = false,
	isPrimary = false,
	style = {},
	...props
}) => {
	// Define element tag name based on whether it's a heading cell (th) or a regular cell (td).
	const TagName: "td" | "th" = isHeading ? "th" : "td"

	const [hovered, focused, methods] = useInteraction({})

	// Table context
	const { sortBy, setSortBy, triggerAction, hasStickyCols } =
		useContext(TableContext)

	const ref = useRef<HTMLTableCellElement>()

	const sortBtnClassNames = generateCN("sui-table__cell-btn", {
		hovered,
		focused,
	})

	// Current order
	const order = id === sortBy.column ? sortBy.order : ""

	/**
	 * When column sort heading clicked
	 *
	 * @type {() => void}
	 */
	const onSortClick = useCallback(() => {
		const sortData = { column: id, order: "desc" === order ? "asc" : "desc" }
		setSortBy(sortData)
		// Pass to parent component
		triggerAction("sort-columns", sortData)
	}, [id, order, setSortBy, triggerAction])

	// Default sort icon
	let SortIcon = Icons.CaretUpDown

	// Icon based on the sorting
	if (!isEmpty(order) && sortBy.column === id) {
		SortIcon = order === "desc" ? Icons.CaretDown : Icons.CaretUp
	}

	// Sorting button props
	let sortBtnProps: Record<string, any> = {}

	if (isSortable) {
		sortBtnProps.role = "button"
		sortBtnProps.tabIndex = 0
		sortBtnProps.className = sortBtnClassNames
		sortBtnProps.onClick = onSortClick
		sortBtnProps.onKeyDown = (e) => handleOnKeyDown(e, onSortClick)
		sortBtnProps = { ...sortBtnProps, ...methods }
	}

	return (
		<TagName
			ref={ref}
			className={generateCN(
				"sui-table__cell",
				{
					sortable: isSortable,
					sticky: isSticky,
					trim: isTrim,
					primary: isPrimary,
					"is-sticky-active": hasStickyCols && isSticky,
				},
				className,
			)}
			{...(isHeading ? { scope: "col" } : {})}
			{...props}
			role="rowheader"
			style={style}
		>
			{hasDragIcon && (
				<Icons.Grip className="sui-table__cell--drag" size="sm" />
			)}
			{!isAction ? (
				<div {...sortBtnProps}>
					<span>{children}</span>
					{isSortable && <SortIcon size="xs" />}
				</div>
			) : (
				<Fragment>
					{children}
					{isSortable && <SortIcon size="xs" />}
				</Fragment>
			)}
		</TagName>
	)
}

export { TableCell }
