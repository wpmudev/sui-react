import React, {
	Children,
	cloneElement,
	Fragment,
	useCallback,
	useContext,
	useEffect,
	useId,
	useState,
} from "react"

import { TableRowProps } from "./table.types"

import { Checkbox } from "@wpmudev/sui-checkbox"
import { useInteraction } from "@wpmudev/sui-hooks"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import { Box, BoxGroup } from "@wpmudev/sui-box"

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
 * @param {boolean}         props.isUnderFooter     - Specifies if the row is under the table footer.
 * @param {any}             props...                - Additional props for the TableRow component.
 * @return {JSX.Element} The JSX representation of the TableRow component.
 */
const TableRow: React.FC<TableRowProps> = ({
	id,
	children,
	actions = false,
	isUnderHeader = false,
	isExpandable = false,
	expandableContent = null,
	status,
	isUnderFooter = false,
	...props
}) => {
	// State for row expansion
	const [isExpanded, setIsExpanded] = useState<boolean>(false)
	// Get table context
	const ctx = useContext(TableContext)
	// State for row hover and focus
	const [isHovered, isFocused, methods] = useInteraction({})

	// Generate unique IDs for accessibility
	const uniqueID = useId()
	const rowId = `sui-table-row-${uniqueID}${!!id ? `-${id}` : ``}`
	const rowContentId = `${rowId}-content`

	// Handle row checkbox toggle
	const onCheckToggle = useCallback(
		(e) => {
			const isChecked = e?.target?.checked ?? false
			ctx?.onSelect(id ?? "", isChecked, !isUnderHeader ? undefined : isChecked)
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
	let isChecked = ctx?.selected?.indexOf(parseInt(`${id}`)) > -1

	// if its select all checkbox
	if (isUnderHeader) {
		isChecked = ctx?.rows?.length === ctx?.selected.length
	}

	// Generate class names
	const classNames = generateCN("sui-table__row", {
		focus: !isUnderFooter && !isUnderHeader && isFocused,
		hover: !isUnderFooter && !isUnderHeader && isHovered,
		expandable: isExpandable,
		expanded: isExpanded,
		[status]: !isEmpty(status ?? ""),
	})

	// Generate toggle button
	const toggleBtn = isExpandable && (
		<Button
			icon={isExpanded ? "chevron-up" : "chevron-down"}
			color="black"
			appearance="tertiary"
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
		const p: Record<string, any> = { hasDragIcon: false, colSpan: undefined }

		if (0 === index) {
			// Make column sticky
			p.isSticky = !!ctx?.stickyCols

			// Add drag icon
			if (!ctx?.allowCheck && !isUnderFooter) {
				p.hasDragIcon = true
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

		return <Fragment key={index}>{cloneElement(child, p)}</Fragment>
	})

	// A11y props for expandable rows
	const a11yProps: any = {}

	if (isExpandable) {
		a11yProps.id = rowId
		a11yProps["aria-expanded"] = isExpanded
		a11yProps["aria-controls"] = rowContentId
	}

	return (
		<>
			<tr
				role="row"
				className={classNames}
				{...methods}
				{...props}
				{...a11yProps}
			>
				{ctx?.allowCheck && !isUnderFooter && (
					<TableCell
						className="sui-table__cell--selection"
						isSticky={!!ctx?.stickyCols}
						hasDragIcon={ctx?.isDraggable && !isUnderHeader}
					>
						<Checkbox onChange={onCheckToggle} defaultValue={isChecked} />
					</TableCell>
				)}
				{children}
				{(!!actions || toggleBtn) && !isUnderFooter && (
					<TableCell
						className="sui-table__cell--actions"
						isSticky={!!ctx?.stickyCols}
					>
						{!!actions && actions({ id, content: toggleBtn })}
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
						[status]: !isEmpty(status ?? ""),
					})}
					id={rowContentId}
					aria-labelledby={rowId}
					tabIndex={isExpanded ? 0 : -1}
				>
					<td colSpan={numberOfCols}>
						<Box>
							<BoxGroup isInline={false}>
								<TableFields>{children}</TableFields>
								{expandableContent}
							</BoxGroup>
						</Box>
					</td>
				</tr>
			)}
		</>
	)
}

export { TableRow }
