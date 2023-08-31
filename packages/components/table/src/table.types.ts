import React, { CSSProperties, HTMLProps, RefObject } from "react"

import { InputProps } from "@wpmudev/sui-input"
import { SelectBaseProps } from "@wpmudev/sui-select"
import { TableColumnType, TableSortBy } from "./table-context"

/**
 * Interface representing the properties of a table section.
 */
interface TableSectionProps extends HTMLProps<HTMLTableSectionElement> {}

/**
 * Interface representing the types of filters that can be used in the table toolbar.
 */
interface TableToolbarFilterTypes {
	id: string // Unique ID for the filter
	type: "text" | "select" // Type of the filter, either "text" or "select"
	value: number | string // The current value of the filter
	title: string // Title or label for the filter
}

/**
 * Interface representing a text filter that can be used in the table toolbar.
 */
interface TableToolbarFilterText extends TableToolbarFilterTypes {
	type: "text" // Filter type is "text"
	props?: InputProps // Additional props for the text input
}

/**
 * Interface representing a select filter that can be used in the table toolbar.
 */
interface TableToolbarFilterSelect extends TableToolbarFilterTypes {
	type: "select" // Filter type is "select"
	props: SelectBaseProps // Props for the select input
}

/**
 * Interface representing the properties of a table.
 */
interface TableProps extends HTMLProps<HTMLTableElement> {
	/**
	 * Children nodes of the table.
	 */
	children?: React.ReactNode

	/**
	 * Stripe table style.
	 */
	type?: string

	/**
	 * ARIA label for the table.
	 */
	ariaLabel?: string

	/**
	 * Determines if the table allows checkable rows with checkboxes.
	 */
	allowCheck?: boolean

	/**
	 * Determines if the table supports drag-and-drop reordering of rows.
	 */
	isDraggable?: boolean

	/**
	 * Determines if the table has a toolbar.
	 */
	hasToolbar?: boolean

	/**
	 * Remove border-radius when true
	 */
	noBorderRadius?: boolean

	/**
	 * Remove border from sides
	 */
	noSideBorder?: boolean

	/**
	 * Display filters in popover
	 */
	filtersPopover?: boolean

	/**
	 * An array of filters that can be used in the table toolbar.
	 */
	filters?: Array<TableToolbarFilterText | TableToolbarFilterSelect>

	/**
	 * An array of bulk actions available in the table toolbar.
	 */
	bulkActions?: Record<Pick<SelectBaseProps, "options">, any>[]

	/**
	 * Display table row in stripped design
	 */
	isStripped?: boolean

	/**
	 * Callback function triggered when a row is checked/unchecked (used in checkable tables).
	 */
	onCheck?: () => void

	/**
	 * Callback function triggered when an action is performed in the table toolbar.
	 */
	onAction?(action: TableExpectedAction, data: unknown): void
}

/**
 * Interface representing the properties of a table cell.
 */
type TableCellBaseProps = {
	/**
	 * Children nodes of the table cell.
	 */
	children?: React.ReactNode
	/**
	 * Render table cell as header cell "th"
	 */
	isHeading?: boolean
	/**
	 * Make cell sticky
	 */
	isSticky?: boolean

	/**
	 * Make cell text single line and trimmable
	 */
	isTrim?: boolean
	/**
	 * Make table cell primary
	 */
	isPrimary?: boolean
	/**
	 * Style
	 */
	style?: CSSProperties
} & Omit<HTMLProps<HTMLTableCellElement | HTMLTableHeaderCellElement>, "id">

type TableCellWithSortingProps = {
	isSortable: true
	id?: string
} & TableCellBaseProps

type TableCellWithoutSortingProps = {
	isSortable?: boolean
} & TableCellBaseProps

type TableCellProps = TableCellWithSortingProps | TableCellWithoutSortingProps

/**
 * Interface representing the properties of a table row.
 */
interface TableRowProps extends Omit<HTMLProps<HTMLTableRowElement>, "id"> {
	/**
	 * The unique ID of the table row.
	 */
	id?: number | string

	/**
	 * Determines if the row is under the table header.
	 */
	isUnderHeader?: boolean

	/**
	 * Determines if the row is expandable (can show additional content when expanded).
	 */
	isExpandable?: boolean

	/**
	 * Content to display when the row is expanded (if isExpandable is true).
	 */
	expandableContent?: React.ReactNode

	/**
	 * Children nodes of the table row.
	 */
	children?: React.ReactNode

	/**
	 * Status color to appear on the table row.
	 */
	status?: string
}

/**
 * Type representing expected actions in the table toolbar.
 */
type TableExpectedAction =
	| "apply-filters"
	| "clear-filters"
	| "search-items"
	| "bulk-action"
	| "sort-rows"
	| "sort-columns"

/**
 * Interface for the table context.
 */
interface TableContextProps {
	/**
	 * Allows row selection with checkboxes.
	 */
	allowCheck?: boolean

	/**
	 * Make columns sticky
	 */
	stickyCols?: boolean

	/**
	 * Supports drag-and-drop reordering.
	 */
	isDraggable?: boolean

	/**
	 * Array of bulk actions available in the table toolbar.
	 */
	bulkActions?: Record<Pick<SelectBaseProps, "options">, any>[]

	/**
	 * Array of table rows with additional data.
	 */
	rows: Record<string, any>[]

	/**
	 * Function to set the table rows.
	 */
	setRows(rows: Record<string, any>[]): void

	/**
	 * Array of table columns
	 */
	columns: TableColumnType[]

	/**
	 * Functions to store columns in state
	 */
	setColumns(columns: TableColumnType[]): void

	/**
	 * Display filters in popover
	 */
	filtersPopover: Pick<TableProps, "filtersPopover">

	/**
	 * Filters to be used in the table toolbar.
	 */
	filters: Pick<TableProps, "filters">

	/**
	 * Values of the applied filters.
	 */
	filterValues: Record<string, Pick<TableToolbarFilterTypes, "id" | "value">>[]

	/**
	 * Function to set the filter value.
	 */
	setFilter(id: string, value: string | number): void

	/**
	 * Contains sort by object
	 */
	sortBy: TableSortBy

	/**
	 * Set sort by data
	 */
	setSortBy(data: TableSortBy): void

	/**
	 * Function to apply the filters.
	 */
	applyFilters(): void

	/**
	 * Function to clear the filters.
	 */
	clearFilters(): void

	/**
	 * Array of selected row IDs.
	 */
	selected: Array<number | string>

	/**
	 * Function to handle row selection.
	 */
	onSelect: (
		id: number | string,
		isChecked: boolean,
		isSelectAll?: boolean,
	) => void

	/**
	 * Indicates whether to force collapse in drag-and-drop reordering.
	 */
	forceCollapse: boolean

	/**
	 * Function to set the forceCollapse state.
	 */
	setForceCollapse(collapse: boolean): void

	/**
	 * Function to trigger an action in the table toolbar.
	 */
	triggerAction(action: TableExpectedAction, data: unknown): void
}

/**
 * Interface for the table context provider.
 */
interface TableContextProviderProps {
	/**
	 * Children components to be wrapped by the context provider.
	 */
	children: React.ReactNode

	/**
	 * Props to be provided to the table context.
	 */
	props: Pick<
		TableContextProps,
		| "allowCheck"
		| "isDraggable"
		| "filtersPopover"
		| "filters"
		| "bulkActions"
		| "stickyCols"
	> &
		Pick<TableProps, "onAction"> & {
			ref: RefObject<HTMLTableElement>
		}
}

/**
 * Interface for the table toolbar content.
 */
interface TableToolbarContentProps {
	/**
	 * ID of the table toolbar content.
	 */
	id: string

	/**
	 * ID of the filter button in the table toolbar.
	 */
	filterBtnId: string

	/**
	 * Indicates whether the table toolbar content is expanded.
	 */
	isExpanded: boolean
}

interface TableFieldsProps {
	children: React.ReactNode
}

export {
	TableProps,
	TableExpectedAction,
	TableSectionProps,
	TableCellProps,
	TableRowProps,
	TableFieldsProps,
	TableContextProps,
	TableContextProviderProps,
	TableToolbarContentProps,
	TableToolbarFilterTypes,
}
