import React, { useRef, Children as RChild } from "react"

import { isEmpty, generateCN } from "@wpmudev/sui-utils"

import { TableProps } from "./table.types"
import { TableContextProvider } from "./table-context"
import { TableToolbar } from "./table-toolbar"

// Table component to display a table with optional toolbar and context
const Table: React.FC<TableProps> = ({
	children,
	hasToolbar = true,
	ariaLabel = "",
	allowCheck,
	isDraggable,
	filtersPopover,
	filters,
	onAction,
	bulkActions,
	noBorderRadius,
	noSideBorder,
	isStripped = false,
	stickyCols = false,
	className = "",
	...props
}) => {
	// Reference to the table element
	const ref = useRef<HTMLTableElement | null>(null)
	const wrapperRef = useRef<HTMLDivElement | null>(null)

	// Define tag design
	// Limited to: solid (default) and outlined
	const classNames = generateCN(
		"sui-table",
		{
			"no-border-radius": noBorderRadius,
			"no-side-borders": noSideBorder,
			stripe: isStripped,
			sticky: stickyCols,
			draggable: isDraggable,
		},
		className,
	)

	// Component name to exclude from the children array
	const componentToExclude = "TableFooter"
	// Convert the children to an array
	const childrenArray = RChild.toArray(children)

	// Find the footer component within the array of children
	const TFooter = childrenArray.find(
		({ type: childType }: any) => childType.name === componentToExclude,
	)

	// Render the TableContextProvider to provide context with optional props
	return (
		<TableContextProvider
			props={{
				allowCheck,
				isDraggable,
				filters,
				onAction,
				bulkActions,
				filtersPopover,
				stickyCols,
				ref,
				wrapperRef,
			}}
		>
			<div className={classNames} data-testid="table">
				{/* Render the TableToolbar component if hasToolbar is true */}
				{hasToolbar && <TableToolbar />}
				<div className="sui-table__wrapper" ref={wrapperRef}>
					<table
						{...props}
						className="sui-table__table"
						ref={ref}
						// Ignore eslint here as the table have expandable elements which makes it interactive
						// eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
						role="treegrid"
						tabIndex={-1}
						cellSpacing="0"
						cellPadding="0"
						// Set the aria-label attribute if ariaLabel is provided and not empty
						{...(!isEmpty(ariaLabel ?? "") && { "aria-label": ariaLabel })}
					>
						{childrenArray?.filter(
							({ type: cType }: any) => componentToExclude !== cType.name,
						)}
					</table>
				</div>
				{!!TFooter && TFooter}
			</div>
		</TableContextProvider>
	)
}

export { Table }
