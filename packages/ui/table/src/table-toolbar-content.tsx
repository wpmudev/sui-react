import React, { ChangeEvent, Fragment, useContext } from "react"
import {
	TableToolbarContentProps,
	TableToolbarFilterSelect,
	TableToolbarFilterText,
} from "./table.types"

import { Box, BoxGroup } from "@wpmudev/sui-box"
import { generateCN } from "@wpmudev/sui-utils"
import { Input } from "@wpmudev/sui-input"
import { Row, Col } from "@wpmudev/sui-grid"
import { FormField } from "@wpmudev/sui-form-field"
import { Select, SelectOptionType } from "@wpmudev/sui-select"
import { Button } from "@wpmudev/sui-button"

import { TableContext } from "./table-context"
import { useStyles } from "@wpmudev/sui-hooks"

// Table toolbar content component displays filter options and actions.
const TableToolbarContent: React.FC<TableToolbarContentProps> = ({
	id,
	filterBtnId,
	isExpanded,
	...props
}) => {
	// Get table context
	const ctx = useContext(TableContext)
	// Get filters from context
	const filters = ctx?.filters
	const { suiInlineClassname } = useStyles(props)

	// If there are no filters, return null to hide the toolbar content
	if (!filters) {
		return null
	}

	/**
	 * Render filter field
	 *
	 * @param {TableToolbarFilterSelect | TableToolbarFilterText} filter
	 * @param {number}                                            index
	 *
	 * @return {JSX.Element} FormField
	 */
	const renderField = (
		filter: TableToolbarFilterSelect | TableToolbarFilterText,
		index: number,
	) => (
		<FormField
			key={index}
			id={filter?.id ?? ""}
			label={filter?.title ?? ""}
			isSmall={true}
		>
			{
				{
					select: (
						// @ts-ignore
						<Select
							onChange={(optionID: SelectOptionType) =>
								ctx?.setFilter(filter?.id ?? "", optionID as string)
							}
							id={filter?.id}
							{...filter?.props}
							// @ts-ignore
							selected={ctx?.filterValues?.[filter?.id]}
						/>
					),
					text: (
						<Input
							id={filter?.id ?? ""}
							{...(filter?.props as any)}
							// @ts-ignore
							defaultValue={ctx?.filterValues?.[filter?.id]}
							onChange={(
								e: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
							) => {
								if (typeof e !== "string") {
									ctx?.setFilter(filter?.id ?? "", e.target?.value)
								}
							}}
						/>
					),
				}[filter.type]
			}
		</FormField>
	)

	const filterActions = (
		<div className="sui-table__toolbar-cta">
			<Button
				type="tertiary"
				color="black"
				isSmall={true}
				isDisabled={ctx?.filterValues?.length <= 0}
				onClick={() => ctx?.clearFilters()}
			>
				Clear filters
			</Button>
			<Button
				type="secondary"
				color="black"
				isSmall={true}
				isDisabled={ctx?.filterValues?.length <= 0}
				onClick={() => ctx?.triggerAction("apply-filters", ctx?.filterValues)}
			>
				Apply filters
			</Button>
		</div>
	)

	return (
		<div
			id={id}
			aria-labelledby={filterBtnId}
			className={generateCN(
				"sui-table__toolbar-body",
				{
					expanded: isExpanded || !!ctx?.filtersPopover,
					inline: !ctx?.filtersPopover,
				},
				suiInlineClassname,
			)}
		>
			{ctx?.filtersPopover ? (
				<Fragment>
					{filters?.map((filter, index) => renderField(filter, index))}
					{filterActions}
				</Fragment>
			) : (
				<Box>
					<BoxGroup>
						<Row align={{ sm: "inline" }}>
							{(filters ?? [])?.map((filter, index) => (
								<Col size={3} key={index}>
									{renderField(filter, index)}
								</Col>
							))}
						</Row>
					</BoxGroup>
					<BoxGroup isInline={false} isFooter={true}>
						{filterActions}
					</BoxGroup>
				</Box>
			)}
		</div>
	)
}

export { TableToolbarContent }
