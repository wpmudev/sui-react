import React from "react"

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
		title: "Contact Form Contact Form Contact Form Contact Form Contact Form Contact Form Contact Form Contact Form Contact Form",
		tag: <Tag>Draft</Tag>,
		submission: "April 20, 2022 11:00 am",
		status: "info",
	},
	{
		id: 2,
		title: "Contact Form",
		tag: <Tag>Draft</Tag>,
		submission: "April 20, 2022 11:00 am",
		status: "success",
	},
	{
		id: 3,
		title: "Contact Form",
		tag: <Tag color="blue">Published</Tag>,
		submission: "April 20, 2022 11:00 am",
		status: "warning",
		props: {
			isExpandable: true,
			expandableContent: (
				<Box>
					<BoxGroup isInline={false}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry standard dummy text ever
						since the 1500s
					</BoxGroup>
				</Box>
			),
		},
	},
	{
		id: 4,
		title: "Contact Form",
		tag: <Tag>Draft</Tag>,
		submission: "April 20, 2022 11:00 am",
		status: "error",
		props: {
			isExpandable: true,
			expandableContent: (
				<Box>
					<BoxGroup isInline={false}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry standard dummy text ever
						since the 1500s
					</BoxGroup>
				</Box>
			),
		},
	},
	{
		id: 5,
		title: "Contact Form",
		tag: <Tag>Draft</Tag>,
		submission: "April 20, 2022 11:00 am",
		props: {
			isExpandable: true,
			expandableContent: (
				<Box>
					<BoxGroup isInline={false}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry standard dummy text ever
						since the 1500s
					</BoxGroup>
				</Box>
			),
		},
	},
	{
		id: 6,
		title: "Contact Form",
		tag: <Tag>Draft</Tag>,
		submission: "April 20, 2022 11:00 am",
		props: {
			isExpandable: true,
			expandableContent: (
				<Box>
					<BoxGroup isInline={false}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry standard dummy text ever
						since the 1500s
					</BoxGroup>
				</Box>
			),
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

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<SUITable
					{...args}
					stickyCols={true}
					onAction={(actionType, data) => {
						console.log("ACTION FIRED:", actionType, data)
					}}
				>
					<TableHead>
						<TableRow actions={() => null}>
							<TableCell isHeading={true} isSortable={false}>
								ID
							</TableCell>
							<TableCell isHeading={true} isSortable={true}>
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
						{records.map((record, index) => (
							<TableRow
								key={index}
								id={record.id}
								isExpandable={record?.props?.isExpandable}
								expandableContent={record?.props?.expandableContent}
								status={record?.status}
								actions={({ id, content }) => {
									return action(id, content)
								}}
							>
								<TableCell>
									<strong>#{record.id}</strong>
								</TableCell>
								<TableCell isTrim={true}>
									<strong>{record.title}</strong>
								</TableCell>
								<TableCell>{record.tag}</TableCell>
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
	type: "",
	allowCheck: true,
	isDraggable: true,
	hasToolbar: true,
	ariaLabel: "",
	bulkActions: [
		{
			id: "option-1",
			label: "Option 1",
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
	type: {
		name: "Type",
		options: ["", "stripe"],
		control: {
			type: "select",
			labels: {
				"": "Default",
				stripe: "Stripe",
			},
		},
	},
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
