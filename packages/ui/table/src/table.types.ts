import React, { CSSProperties, HTMLProps, Ref, RefObject } from "react"

import { InputProps } from "@wpmudev/sui-input"
import { SelectBaseProps, SelectOptionType } from "@wpmudev/sui-select"
import { TableColumnType, TableSortBy } from "./table-context"
import {
	OmitNestedKey,
	SuiHTMLAttributes,
	SuiStyleType,
} from "@wpmudev/sui-utils"

/**
 * Interface representing the properties of a table section.
 */
interface TableSectionProps
	extends SuiHTMLAttributes<
			HTMLProps<HTMLTableSectionElement | HTMLDivElement>
		>,
		SuiStyleType {
	children?: React.ReactNode
	ref?: Ref<HTMLTableSectionElement>
}

/**
 * Interface representing the types of filters that can be used in the table toolbar.
 */
interface TableToolbarFilterTypes extends SuiStyleType {
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

type TableOnActionType = (action: TableExpectedAction, data: unknown) => void

/**
 * Interface representing the properties of a table.
 */
interface TableProps extends SuiHTMLAttributes, SuiStyleType {
	/**
	 * Custom css className(s)
	 */
	className?: string

	/**
	 * Children nodes of the table.
	 */
	children?: React.ReactNode

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
	filters?: TableToolbarFilterText[] | TableToolbarFilterSelect[]

	/**
	 * An array of bulk actions available in the table toolbar.
	 */
	bulkActions?: SelectOptionType[]

	/**
	 * Display table row in stripped design
	 */
	isStripped?: boolean

	/**
	 * Callback function triggered when an action is performed in the table toolbar.
	 */
	onAction?: TableOnActionType

	/**
	 * Make columns sticky
	 */
	stickyCols?: boolean

	/**
	 * Whether to show filters or not
	 */
	showFiltersBtn?: boolean
}

/**
 * Interface representing the properties of a table cell.
 */
type TableCellBaseProps = {
	/**
	 * Additional css className(s) for further styling
	 */
	className?: string
	/**
	 * Table Cell ID
	 */
	id?: string
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
	/**
	 * If table cell is under action cell column
	 */
	isAction?: boolean
	/**
	 * Display drag icon when true
	 */
	hasDragIcon?: boolean
	/**
	 * Specifies the number of columns a cell should span
	 */
	colSpan?: number
} & OmitNestedKey<
	SuiHTMLAttributes,
	"_htmlProps",
	"id" | "style" | "className"
> &
	SuiStyleType

type TableCellWithSortingProps = {
	isSortable: true
	id?: string
} & TableCellBaseProps

type TableCellWithoutSortingProps = {
	isSortable?: boolean
} & TableCellBaseProps

type TableCellProps = TableCellWithSortingProps | TableCellWithoutSortingProps

type TableHeadProps = TableSectionProps & {
	hasActions?: boolean
	children: React.ReactElement | React.ReactElement[]
}

/**
 * Interface representing the properties of a table row.
 */
interface TableRowProps
	extends OmitNestedKey<SuiHTMLAttributes, "_htmlProps", "id">,
		SuiStyleType {
	/**
	 * The unique ID of the table row.
	 */
	id?: number | string

	/**
	 * Determines if the row is under the table header.
	 */
	isUnderHeader?: boolean

	/**
	 * Determines if the tow is under the table footer.
	 */
	isUnderFooter?: boolean

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

	/**
	 * Specifies if the row is under the table footer
	 */
	actions?(options: Record<string, any>): React.ReactNode
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
	bulkActions?: SelectOptionType[]

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
	filtersPopover?: boolean

	/**
	 * Filters to be used in the table toolbar.
	 */
	filters?: Array<TableToolbarFilterText | TableToolbarFilterSelect>

	/**
	 * Values of the applied filters.
	 */
	filterValues: Record<
		string | number,
		Pick<TableToolbarFilterTypes, "id" | "value">
	>[]

	/**
	 * Function to set the filter value.
	 */
	setFilter(id: string, value: string | number): void

	/**
	 * Contains sort by object
	 */
	sortBy?: TableSortBy

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
	selected: Array<unknown>

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

	/**
	 * Indicates whether hasStickyCols or not.
	 */
	hasStickyCols: boolean

	/**
	 * Function to set the hasStickyCols state.
	 */
	setHasStickyCols(hasColumn: boolean): void

	/**
	 * Whether to show filters or not
	 */
	showFiltersBtn?: boolean
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
	props: {
		ref: RefObject<HTMLTableElement>
		wrapperRef: RefObject<HTMLDivElement>
		filtersPopover?: boolean
		filters?: TableToolbarFilterText[] | TableToolbarFilterSelect[]
		onAction?: TableOnActionType
	} & Pick<
		TableContextProps,
		| "allowCheck"
		| "isDraggable"
		| "bulkActions"
		| "stickyCols"
		| "showFiltersBtn"
	>
}

/**
 * Interface for the table toolbar content.
 */
interface TableToolbarContentProps
	extends OmitNestedKey<
			SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
			"_htmlProps",
			"id" | "className"
		>,
		SuiStyleType {
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

interface TableFieldsProps extends SuiStyleType {
	children: React.ReactNode
}

export type {
	TableProps,
	TableExpectedAction,
	TableSectionProps,
	TableCellProps,
	TableHeadProps,
	TableRowProps,
	TableFieldsProps,
	TableContextProps,
	TableContextProviderProps,
	TableToolbarContentProps,
	TableToolbarFilterTypes,
	TableToolbarFilterSelect,
	TableToolbarFilterText,
	TableOnActionType,
}
