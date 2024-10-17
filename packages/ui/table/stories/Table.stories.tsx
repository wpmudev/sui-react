import React, { useEffect, useState } from "react"
import { records } from "./records"

// Import required component
import {
	Table as SUITable,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableRow,
} from "../src"

import { Tag } from "@wpmudev/sui-tag"
import { Button } from "@wpmudev/sui-button"
import { Pagination } from "@wpmudev/sui-pagination"
import { chunkArray } from "@wpmudev/sui-utils"

// Import documentation main page
import docs from "./ReactTable.mdx"
import { Box, BoxGroup } from "@wpmudev/sui-box"

// Configure default options
export default {
	title: "SUI/Components/Modules/Table",
	// component: SuiTable,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

const itemsPerPage = 5
// break array into page chunks
const tableItems = chunkArray(records, itemsPerPage)

// Build "Field List" story
const Table = ({ ...args }) => {
	const [tempRows, setTempRows] = useState<Record<string, any>[]>([])
	const [rows, setRows] = useState<Record<string, any>[]>([])
	const [page, setPage] = useState<number>(1)

	useEffect(() => {
		setRows(tableItems?.[0])
		setTempRows(tableItems?.[0])
	}, [])

	useEffect(() => {
		setRows(tableItems?.[page - 1])
	}, [page])

	const action = (_id: string, content: React.ReactNode) => {
		return (
			<div
				style={{
					alignItems: "center",
					display: "flex",
					justifyContent: "end",
				}}
			>
				<Button
					icon="Edit"
					colorScheme="black"
					type="tertiary"
					isSmall={true}
					iconOnly={true}
				>
					Edit
				</Button>
				<Button
					icon="Settings"
					colorScheme="black"
					type="tertiary"
					isSmall={true}
					iconOnly={true}
				>
					Settings
				</Button>
				{content}
			</div>
		)
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<SUITable
					{...args}
					stickyCols={true}
					_htmlProps={{
						disabled: true,
					}}
					onAction={(actionType, data) => {
						let dRows: Record<string, any>[] = [...rows]

						switch (actionType) {
							case "bulk-action":
							case "apply-filters":
								break
							case "sort-rows":
								// @ts-ignore
								dRows = data.map((id) => rows.find((item) => item.id === id))

								break
							case "search-items":
								dRows = tempRows.filter((item) =>
									item.title.includes(data as string),
								)

								dRows = "" !== data ? dRows : tempRows
								break
							case "sort-columns":
								const { column, order } = data as {
									column: string | number
									order: string
								}

								// sort
								dRows.sort((a, b) =>
									"desc" === order
										? b[column]?.localeCompare(a[column])
										: a[column]?.localeCompare(b[column]),
								)

								break
						}

						// set state
						setRows([...dRows])
					}}
				>
					<TableHead>
						<TableRow actions={() => null}>
							<TableCell
								isHeading={true}
								isSortable={false}
								isPrimary={true}
								id="id"
							>
								ID
							</TableCell>
							<TableCell isHeading={true} isSortable={true} id="title">
								Form name
							</TableCell>
							<TableCell isHeading={true} id="tag" isSortable={true}>
								Status
							</TableCell>
							<TableCell isHeading={true} id="submission" isSortable={true}>
								Last Submission
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows?.map((record, index) => (
							<TableRow
								key={index}
								id={record.id}
								isExpandable={record?.props?.isExpandable}
								expandableContent={record?.props?.expandableContent}
								status={record?.status}
								actions={({ id, content }) => action(id, content)}
							>
								<TableCell>
									<strong>#{record.id}</strong>
								</TableCell>
								<TableCell isTrim={true}>
									<strong>{record.title}</strong>
								</TableCell>
								<TableCell>
									<Tag
										colorScheme={
											"Published" === record.tag ? "blue" : "default"
										}
									>
										{record.tag}
									</Tag>
								</TableCell>
								<TableCell>{record.submission}</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow id="0">
							<TableCell>
								<Pagination
									limit={itemsPerPage}
									numberOfItems={records.length}
									page={page}
									onChange={setPage}
								/>
							</TableCell>
						</TableRow>
					</TableFooter>
				</SUITable>
			</div>
		</div>
	)
}

// Set story arguments.
Table.args = {
	allowCheck: true,
	isDraggable: true,
	hasToolbar: true,
	ariaLabel: "",
	bulkActions: [
		{
			id: "delete",
			label: "Delete",
		},
		{
			id: "publish",
			label: "Publish",
		},
	],
	showFiltersBtn: true,
	showToggleBtn: false,
	toggleBtnProps: {
		label: "Show updates only",
		onClick: () => {},
	},
	filters: [
		{
			id: "sort-by",
			type: "select",
			title: "Sort By",
			value: "id",
			// Select component props
			props: {
				id: "sort-by",
				isSmall: true,
				options: [
					{
						id: "id",
						label: "ID",
					},
					{
						id: "form-name",
						label: "Form name",
					},
					{
						id: "status",
						label: "Status",
					},
					{
						id: "last-submission",
						label: "Last Submission",
					},
				],
			},
		},
		{
			id: "form-name",
			type: "select",
			title: "Form name",
			value: "option-1",
			// Select component props
			props: {
				id: "form-name",
				isSmall: true,
				options: records.map((record) => ({
					id: record.id,
					label: record.title,
				})),
			},
		},
		{
			id: "status",
			type: "select",
			title: "Status",
			value: "1",
			// Input component props
			props: {
				id: "sort-by",
				isSmall: true,
				options: [
					{
						id: "draft",
						label: "Draft",
					},
					{
						id: "published",
						label: "Published",
					},
				],
			},
		},
		{
			id: "last-submission",
			type: "text",
			title: "Last Submission",
			value: "1",
			// Input component props
			props: {
				isSmall: true,
			},
		},
	],
	filtersPopover: true,
	isStripped: false,
}

// Set controls for story arguments.
Table.argTypes = {
	ariaLabel: {
		name: "Aria Label",
		control: {
			type: "text",
		},
	},
	showFiltersBtn: {
		name: "Show Filter Button",
		control: {
			type: "boolean",
		},
		if: {
			arg: "hasToolbar",
			eq: true,
		},
	},
	showToggleBtn: {
		name: "Show Toggle Button",
		control: {
			type: "boolean",
		},
		if: {
			arg: "showFiltersBtn",
			eq: false,
		},
	},
	toggleBtnProps: {
		name: "Toggle Button Props",
		control: {
			type: "object",
		},
		if: {
			arg: "showToggleBtn",
			eq: true,
		},
	},
	allowCheck: {
		name: "Allow select",
		control: "boolean",
	},
	isDraggable: {
		name: "Allow drag",
		control: "boolean",
	},
	hasToolbar: {
		name: "Toolbar",
		control: "boolean",
	},
	bulkActions: {
		name: "Bulk Actions",
	},
	filters: {
		name: "Filters",
		if: {
			arg: "hasToolbar",
			eq: true,
		},
	},
	filtersPopover: {
		name: "Filter Popover",
		control: {
			type: "boolean",
		},
		if: {
			arg: "hasToolbar",
			eq: true,
		},
	},
	isStripped: {
		name: "Stripe",
		control: {
			type: "boolean",
		},
	},
}

// Publish required stories.
export { Table }
