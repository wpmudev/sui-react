import React, { ReactNode, useRef } from "react"

import { isEmpty } from "@wpmudev/sui-utils"

import { TableProps } from "./table.types"
import { TableContextProvider } from "./table-context"
import { TableToolbar } from "./table-toolbar"

/**
 * The Table component represents a table with optional features like checkable rows and drag-and-drop support.
 *
 * @param {TableProps} props             - The properties for the Table component.
 * @param {ReactNode}  props.children    - The children nodes of the table.
 * @param {boolean}    props.hasToolbar  - Display Toolbar when true.
 * @param {string}     props.ariaLabel   - ARIA label for the table (default: empty string).
 * @param {boolean}    props.allowCheck  - Determines if the table allows checkable rows with checkboxes.
 * @param {boolean}    props.isDraggable - Determines if the table supports drag-and-drop reordering of rows.
 * @return {JSX.Element} The JSX representation of the Table component.
 */
const Table: React.FC<TableProps> = ({
	children,
	hasToolbar = true,
	ariaLabel = "",
	allowCheck,
	isDraggable,
	...props
}) => {
	// Reference to the table element
	const ref = useRef<HTMLTableElement | null>(null)

	return (
		// TableContextProvider to provide context
		<TableContextProvider value={{ allowCheck, isDraggable }}>
			<div className="sui-table">
				{hasToolbar && <TableToolbar />}
				<table
					{...props}
					className="sui-table__table"
					ref={ref}
					role="grid"
					tabIndex={-1}
					cellSpacing="0"
					cellPadding="0"
					// Set the aria-label attribute if ariaLabel is provided and not empty
					{...(!isEmpty(ariaLabel ?? "") && { "aria-label": ariaLabel })}
				>
					{children}
				</table>
			</div>
		</TableContextProvider>
	)
}

export { Table }
