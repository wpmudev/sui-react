import React, { Fragment } from "react"

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

// Import documentation main page
import docs from "./ReactTable.mdx"
import { TableToolbar } from "../src/table-toolbar"

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
		title: "Contact Form",
		tag: <Tag isSmall={true}>Published</Tag>,
		submission: "April 20, 2022 11:00 am",
	},
	{
		id: 2,
		title: "Contact Form",
		tag: <Tag isSmall={true}>Published</Tag>,
		submission: "April 20, 2022 11:00 am",
	},
	{
		id: 3,
		title: "Contact Form",
		tag: (
			<Tag isSmall={true} color="blue">
				Published
			</Tag>
		),
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
		id: 4,
		title: "Contact Form",
		tag: <Tag isSmall={true}>Published</Tag>,
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
		id: 5,
		title: "Contact Form",
		tag: <Tag isSmall={true}>Published</Tag>,
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
		tag: <Tag isSmall={true}>Published</Tag>,
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

// Build "Field List" story
const Table = ({ example, ...args }) => {
	const action = (id, content) => {
		return (
			<div
				style={{
					alignItems: "center",
					display: "flex",
					gap: "2px",
					justifyContent: "end",
				}}
			>
				<Button
					icon="edit"
					color="black"
					appearance="secondary"
					isSmall={true}
					iconOnly={true}
				/>
				<Button
					icon="settings"
					color="black"
					appearance="secondary"
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
				<SUITable {...args}>
					<TableHead>
						<TableRow actions={() => null}>
							<TableCell isHeading={true}>ID</TableCell>
							<TableCell isHeading={true}>Form name</TableCell>
							<TableCell isHeading={true}>Status</TableCell>
							<TableCell isHeading={true}>Last Submission</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{records.map((record, index) => (
							<TableRow
								key={index}
								id={record.id}
								isExpandable={record?.props?.isExpandable}
								expandableContent={record?.props?.expandableContent}
								actions={({ id, content }) => {
									return action(id, content)
								}}
							>
								<TableCell>#{record.id}</TableCell>
								<TableCell>{record.title}</TableCell>
								<TableCell>{record.tag}</TableCell>
								<TableCell>{record.submission}</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow id="0">
							<TableCell>FOOTER</TableCell>
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
}

// Set controls for story arguments.
Table.argTypes = {
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
}

// Publish required stories.
export { Table }
