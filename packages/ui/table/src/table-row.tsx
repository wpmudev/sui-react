import React, {
	ChangeEvent,
	Children,
	cloneElement,
	CSSProperties,
	Fragment,
	ReactElement,
	useCallback,
	useContext,
	useEffect,
	useId,
	useState,
} from "react"

import { TableRowProps } from "./table.types"

import { Checkbox } from "@wpmudev/sui-checkbox"
import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import { _renderRestPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"

import { TableCell } from "./table-cell"
import { TableContext } from "./table-context"
import { TableFields } from "./table-fields"

/**
 * TableRow component represents a row within a table.
 * It can have an optional ID, children nodes, actions, expandable content, and additional props.
 *
 * @param {TableRowProps}   props                   - The properties for the TableRow component.
 * @param {number|string}   props.id                - The unique ID of the table row.
 * @param {React.ReactNode} props.children          - The content of the table row.
 * @param {boolean}         props.actions           - Determines if the row has actions.
 * @param {boolean}         props.isUnderHeader     - Specifies if the row is under the table header.
 * @param {boolean}         props.isExpandable      - Specifies if the row is expandable.
 * @param {React.ReactNode} props.expandableContent - Content to display when the row is expanded.
 * @param {string}          props.status            - Table Row status
 * @param {boolean}         props.isUnderFooter     - Specifies if the row is under the table footer.
 * @param {any}             props...                - Additional props for the TableRow component.
 * @return {JSX.Element} The JSX representation of the TableRow component.
 */
const TableRow: React.FC<TableRowProps> = ({
	id,
	children,
	actions,
	isUnderHeader = false,
	isExpandable = false,
	expandableContent = null,
	status,
	isUnderFooter = false,
	_htmlProps = {},
	_style = {},
	...props
}) => {
	// State for row expansion
	const [isExpanded, setIsExpanded] = useState<boolean>(false)
	// Get table context
	const ctx = useContext(TableContext)
	// State for row hover and focus
	const [isHovered, isFocused, methods] = useInteraction({})
	const { suiInlineClassname } = useStyles(_style)

	// Generate unique IDs for accessibility
	const uniqueID = useId()
	const rowId = `sui-table-row-${uniqueID}${!!id ? `-${id}` : ``}`
	const rowContentId = `${rowId}-content`

	// Handle row checkbox toggle
	const onCheckToggle = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const isChecked = e?.target?.checked ?? false
			const checkBoxId: number | string =
				(isUnderHeader ? "select-all" : id) ?? ""

			ctx?.onSelect(checkBoxId, isChecked)
		},
		[ctx, id, isUnderHeader],
	)

	// Handle force collapse effect
	useEffect(() => {
		if (ctx?.forceCollapse) {
			setIsExpanded(false)
		}
	}, [ctx?.forceCollapse])

	// @todo: need improvement
	let isChecked = (ctx?.selected ?? [])?.indexOf(parseInt(`${id}`)) > -1
	let isIndeterminate = false

	// if its select all checkbox
	if (isUnderHeader) {
		const isAllSelected = ctx?.rows?.length === ctx?.selected.length
		isIndeterminate = (ctx?.selected ?? [])?.length > 0 && !isAllSelected
		isChecked = isAllSelected && (ctx?.selected ?? []).length > 0
	}

	// Generate class names
	const classNames = generateCN(
		"sui-table__row",
		{
			focus: !isUnderFooter && !isUnderHeader && isFocused,
			hover: !isUnderFooter && !isUnderHeader && isHovered,
			expandable: isExpandable,
			expanded: isExpanded,
			[status as string]: !isEmpty(status ?? ""),
		},
		suiInlineClassname,
	)

	// Generate toggle button
	const toggleBtn = isExpandable && (
		<Button
			icon={isExpanded ? "ChevronUp" : "ChevronDown"}
			colorScheme="black"
			type="tertiary"
			isSmall={true}
			iconOnly={true}
			onClick={() => setIsExpanded(!isExpanded)}
		>
			{`${isExpanded ? "Collapse" : "Expand"} Row`}
		</Button>
	)

	// Calculate number of columns
	let numberOfCols = Children.count(children)

	if (ctx?.allowCheck) {
		numberOfCols += 1
	}

	if (!!actions) {
		numberOfCols += 1
	}

	const primaryColIndex = ctx?.columns?.findIndex((col) => col.isPrimary)

	// Handle children nodes and add drag icon if needed
	children = Children.toArray(children).map((child, index) => {
		const p: Record<string, any> = {
			hasDragIcon: false,
			colSpan: (child as React.ReactElement).props.colSpan || undefined,
		}

		if (0 === index) {
			// Make column sticky
			p.isSticky = !!ctx?.stickyCols

			// Add drag icon
			if (
				ctx?.isDraggable &&
				!ctx?.allowCheck &&
				!isUnderFooter &&
				!isUnderHeader
			) {
				p.hasDragIcon = true
			}

			if (!ctx?.allowCheck) {
				p.style = {
					left: 0,
					paddingRight: "16px",
					...(!ctx?.isDraggable ? { paddingLeft: "32px" } : {}),
				}
			}
		}

		if (isUnderFooter) {
			p.isSticky = false
			p.hasDragIcon = false
			p.colSpan = "100%"
		}

		// Mark as primary column
		if (primaryColIndex === index) {
			p.isPrimary = true
		}

		return (
			<Fragment key={index}>{cloneElement(child as ReactElement, p)}</Fragment>
		)
	})

	// A11y props for expandable rows
	const a11yProps: any = {}

	if (isExpandable) {
		a11yProps.id = rowId
		a11yProps["aria-expanded"] = isExpanded
		a11yProps["aria-controls"] = rowContentId
	}

	/**
	 * Update width state variable for table body content
	 */
	// const updateWidth = () => {
	// 	const tableWrapper = ctx?.ref?.current
	//
	// 	// Example: Change background color
	// 	setTimeout(() => {
	// 		setStyle({
	// 			minWidth: `${tableWrapper?.clientWidth - 68}px`,
	// 			maxWidth: `${tableWrapper?.clientWidth - 68}px`,
	// 			marginLeft: `${tableWrapper?.scrollLeft}px`,
	// 		})
	// 	}, 10) // Adjust the delay as needed
	// }

	// useEffect(() => {
	// 	window.addEventListener("resize", updateWidth)
	// 	window.addEventListener("load", updateWidth)
	// 	ctx?.ref?.current.addEventListener("scroll", updateWidth)
	//
	// 	return () => {
	// 		window.removeEventListener("resize", updateWidth)
	// 		window.removeEventListener("load", updateWidth)
	// 		ctx?.ref?.current.removeEventListener("scroll", updateWidth)
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [])

	return (
		<Fragment>
			<tr
				role="row"
				className={classNames}
				{...methods}
				{..._renderRestPropsSafely(_htmlProps)}
				{...a11yProps}
			>
				{ctx?.allowCheck && !isUnderFooter && (
					<TableCell
						className="sui-table__cell--selection"
						isSticky={!!ctx?.stickyCols}
						hasDragIcon={ctx?.isDraggable && !isUnderHeader}
					>
						<Checkbox
							name={rowId}
							id={`${rowId}-checkbox`}
							onChange={onCheckToggle}
							isChecked={isChecked}
							isIndeterminate={isIndeterminate}
						/>
					</TableCell>
				)}
				{children}
				{(!!actions || toggleBtn) && !isUnderFooter && (
					<TableCell
						className="sui-table__cell--actions"
						isSticky={!!ctx?.stickyCols}
						isAction={true}
					>
						{"function" === typeof actions &&
							actions({ id, content: toggleBtn })}
						{!actions && toggleBtn}
					</TableCell>
				)}
			</tr>
			{isExpandable && !!expandableContent && isExpanded && (
				<tr
					role="row"
					className={generateCN("sui-table__row", {
						content: true,
						"content-expanded": isExpanded,
						[status as string]: !isEmpty(status ?? ""),
					})}
					id={rowContentId}
					aria-labelledby={rowId}
					tabIndex={isExpanded ? 0 : -1}
				>
					<td colSpan={numberOfCols}>
						<TableFields>{children}</TableFields>
						{expandableContent}
					</td>
				</tr>
			)}
		</Fragment>
	)
}

export { TableRow }
