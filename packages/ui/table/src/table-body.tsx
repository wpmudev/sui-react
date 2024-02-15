import React, {
	Children,
	forwardRef,
	Fragment,
	HTMLProps,
	ReactElement,
	ReactNode,
	Ref,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react"
import { ReactSortable as Sortable } from "react-sortablejs"

import { TableSectionProps } from "./table.types"
import { TableContext } from "./table-context"
import { useDetectBrowser } from "@wpmudev/sui-hooks"
import { _renderRestPropsSafely } from "@wpmudev/sui-utils"

/**
 * TableBody component represents the body section of a table.
 * It handles the rendering of rows and supports drag-and-drop reordering of rows if the table is draggable.
 *
 * @param {TableSectionProps} props - The properties for the TableBody component.
 * @return {JSX.Element} The JSX representation of the TableBody component.
 */
const TableBody: React.FC<TableSectionProps> = (props) => {
	const { children } = props
	// State to keep track of the table rows
	const [el, setEl] = useState<ReactNode | ReactNode[]>(
		Children.toArray(children),
	)
	const [rows, setRows] = useState<Record<string, any>[]>([])

	// Table context
	const ctx = useContext(TableContext)

	const { name } = useDetectBrowser()

	// Safari 3.0+ "[object HTMLElementConstructor]"
	const isSafari: boolean = "safari" === name

	useEffect(() => {
		setRows(
			Children.toArray(children).map((row) => (row as ReactElement)?.props?.id),
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [el])

	// Effect to update the rows array when children change
	useEffect(() => {
		setEl(Children.toArray(children))

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [children])

	// Effect to update the TableContext's rows when the rows array changes
	// useEffect(() => {
	// 	ctx?.setRows(
	// 		Children.toArray(children).map((row) => (row as ReactElement)?.props?.id),
	// 	)
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [children, rows])

	// Update order know the new and old indexes
	function updateOrder(array: any[], oldIndex: number, newIndex: number) {
		// Make a copy of the array to avoid mutating the original array
		const newArray = [...array]

		// Remove the element from the old index
		const [draggedElement] = newArray.splice(oldIndex, 1)

		// Insert the element at the new index
		newArray.splice(newIndex, 0, draggedElement)

		return newArray
	}

	// When dragging finished
	const onSortEnd = useCallback(
		(draggedEl: Record<string, any>) => {
			const { newIndex, oldIndex } = draggedEl
			const newRows = updateOrder(rows, oldIndex, newIndex)

			ctx?.setForceCollapse(false)

			ctx?.triggerAction("sort-rows", newRows)

			// set column order
			ctx?.setSortBy({
				column: "",
				order: "asc",
			})
		},
		[ctx, rows],
	)

	// If the table is not draggable, render the TableBodyTag with children
	if (!ctx?.isDraggable) {
		return (
			<TableBodyTag {...props} ref={props?.ref as Ref<HTMLTableSectionElement>}>
				{children}
			</TableBodyTag>
		)
	}

	// If the table is draggable, use the Sortable component for drag-and-drop support
	return (
		<Sortable
			tag={TableBodyTag}
			list={(el as ReactNode[]).map((x) => ({
				...(x as object),
				id: (x as ReactElement).props.id,
				chosen: true,
			}))}
			setList={(list) =>
				setEl(list?.filter((newEl) => !!newEl) as ReactNode | ReactNode[])
			}
			animation={150}
			handle=".sui-table__cell--drag"
			onStart={() => ctx?.setForceCollapse(true)}
			onEnd={onSortEnd}
			{...(isSafari && { forceFallback: true })}
		>
			{(el as ReactNode[])?.map((item: ReactNode) => (
				<Fragment key={(item as ReactElement)?.props?.id}>{item}</Fragment>
			))}
		</Sortable>
	)
}

// This is just like a normal component, but now has a ref.
// ForwardRef to forward the ref passed to this component to the underlying tbody element.
const TableBodyTag = forwardRef<
	HTMLTableSectionElement,
	Omit<
		HTMLProps<HTMLTableSectionElement>,
		"value" | "content" | "height" | "translate" | "width" | "color"
	>
>((props, ref) => (
	<tbody
		ref={ref}
		{..._renderRestPropsSafely(props)}
		className="sui-table__body"
	/>
))

TableBodyTag.displayName = "TableBodyTag"

export { TableBody }
