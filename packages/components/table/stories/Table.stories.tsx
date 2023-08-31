import React, { useState } from "react"

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
import { Box, BoxGroup } from "@wpmudev/sui-box"
import { Button } from "@wpmudev/sui-button"
import { Pagination } from "@wpmudev/sui-pagination"

// Import documentation main page
import docs from "./ReactTable.mdx"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Table",
	// component: SuiTable,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

const records = [
	{
		id: 1,
		title: "General Contact Form",
		tag: "Draft",
		submission: "April 20, 2022 11:00 am",
		status: "info",
	},
	{
		id: 2,
		title: "Customer Inquiry Form",
		tag: "Draft",
		submission: "March 20, 2021 11:00 am",
		status: "success",
	},
	{
		id: 3,
		title: "Support Request Form",
		tag: "Published",
		submission: "December 09, 2023 11:00 am",
		status: "warning",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 4,
		title: "Feedback Form",
		tag: "Draft",
		submission: "September 15, 2022 07:00 am",
		status: "error",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 5,
		title: "Product Inquiry Form",
		tag: "Draft",
		submission: "August 20, 2019 01:00 pm",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 6,
		title: "Job Application Form",
		tag: "Draft",
		submission: "May 14, 2022 11:00 am",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 7,
		title: "Event Registration Form",
		tag: "Draft",
		submission: "February 14, 2022 11:00 am",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 8,
		title: "Membership Registration Form",
		tag: "Draft",
		submission: "November 02, 2022 11:00 am",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
]

// Array numbers from 1 to n.
const createList = (topNumber: number) => {
	const listNumbers = []
	topNumber = topNumber + 1

	for (let i = 1; i < topNumber; i++) {
		listNumbers.push(i)
	}

	return listNumbers
}

const items = createList(100)

// Build "Field List" story
const Table = ({ example, ...args }) => {
	const [rows, setRows] = useState(records)

	const action = (id, content) => {
		return (
			<div
				style={{
					alignItems: "center",
					display: "flex",
					justifyContent: "end",
				}}
			>
				<Button
					icon="edit"
					color="black"
					appearance="tertiary"
					isSmall={true}
					iconOnly={true}
				/>
				<Button
					icon="settings"
					color="black"
					appearance="tertiary"
					isSmall={true}
					iconOnly={true}
				/>
				{content}
			</div>
		)
	}

	// console.log("rows", rows)

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<SUITable
					{...args}
					stickyCols={true}
					onAction={(actionType, data) => {
						let dRows = [...rows]

						switch (actionType) {
							case "search-item":
								dRows = dRows.filter((item) =>
									item.title.includes(data as string),
								)

								dRows = "" !== data ? dRows : records
								break
							case "column-sort":
								const { column, order } = data

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
						{rows.map((record, index) => (
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
									<Tag color={"Published" === record.tag ? "blue" : "default"}>
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
								<Pagination limit={5}>
									{
										// @todo: need improvement
									}
									<ul style={{ display: "none" }}>
										{items.map((item, key) => (
											<li key={key}>Item #{item}</li>
										))}
									</ul>
								</Pagination>
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
			id: "option-2",
			label: "Option 2",
		},
	],
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
			id: "lockout-type",
			type: "select",
			title: "Lockout type",
			value: "option-1",
			// Select component props
			props: {
				id: "lockout-type",
				isSmall: true,
				options: [
					{
						id: "option-1",
						label: "Option 1 is the option.",
					},
					{
						id: "option-2",
						label: "Option 2",
					},
				],
			},
		},
		{
			id: "ip-address",
			type: "text",
			title: "IP Address",
			value: "1",
			// Input component props
			props: {
				isSmall: true,
			},
		},
		{
			id: "banned-status",
			type: "text",
			title: "Banned status",
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
	},
	filtersPopover: {
		name: "Filter Popover",
		control: {
			type: "boolean",
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
