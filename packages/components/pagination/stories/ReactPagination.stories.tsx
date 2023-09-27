import React, { useEffect, useState } from "react"

// Import required component(s)
import { Pagination as SuiPagination } from "../src/pagination"
import { Box, BoxGroup } from "@wpmudev/sui-box"
import { chunkArray } from "@wpmudev/sui-utils"

import { PaginationProps } from "../src"

// Import documentation main page
import docs from "./ReactPagination.mdx"

export default {
	title: "SUI/Components/Advanced/Pagination",
	component: SuiPagination,
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
		title: "Registration Form",
	},
	{
		id: 2,
		title: "Contact Us Form",
	},
	{
		id: 3,
		title: "Feedback Form",
	},
	{
		id: 4,
		title: "Job Application",
	},
	{
		id: 5,
		title: "Subscription Form",
	},
	{
		id: 6,
		title: "Order Form",
	},
	{
		id: 7,
		title: "Support Request",
	},
	{
		id: 8,
		title: "Contact Information",
		tag: "Draft",
		submission: "April 27, 2022 11:30 am",
		status: "info",
	},
	{
		id: 9,
		title: "Event Registration",
	},
	{
		id: 10,
		title: "Survey Form",
	},
	{
		id: 11,
		title: "Product Feedback",
	},
	{
		id: 12,
		title: "Volunteer Registration",
	},
	{
		id: 13,
		title: "Application Form",
	},
	{
		id: 14,
		title: "Membership Application",
	},
	{
		id: 15,
		title: "Feedback Survey",
	},
	{
		id: 16,
		title: "Contact Information Update",
	},
	{
		id: 17,
		title: "Event Feedback",
	},
	{
		id: 18,
		title: "Product Inquiry",
	},
	{
		id: 19,
		title: "Customer Support Request",
	},
	{
		id: 20,
		title: "Demo Request",
	},
	{
		id: 21,
		title: "Quote Request",
	},
	{
		id: 22,
		title: "Customer Feedback",
	},
	{
		id: 23,
		title: "Service Inquiry",
	},
	{
		id: 24,
		title: "Product Review",
	},
]

// Build "Pagination" story
export const Pagination = (args: PaginationProps): React.ReactNode => {
	const [tableItems, setTableItems] = useState(chunkArray(records, args?.limit))
	const [rows, setRows] = useState<Record<string, any>>([])
	const [page, setPage] = useState<number>(1)

	useEffect(() => {
		setTableItems(chunkArray(records, args?.limit))
	}, [args.limit])

	useEffect(() => {
		setRows(tableItems?.[0])
	}, [tableItems])

	useEffect(() => {
		setRows(tableItems?.[page - 1])
	}, [page, tableItems])

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<Box>
					<BoxGroup isInline={false}>
						<ul>
							{rows?.map((record, index) => (
								<li key={index}>{record.title}</li>
							))}
						</ul>
						<SuiPagination
							{...args}
							numberOfItems={records.length}
							onChange={setPage}
						/>
					</BoxGroup>
				</Box>
			</div>
		</div>
	)
}

// Set story arguments.
Pagination.args = {
	limit: 5,
	skip: false,
	previousLabel: "Go to previous page",
	nextLabel: "Go to next page",
}

// Set controls for story arguments.
Pagination.argTypes = {
	limit: {
		name: "Number of items(per page)",
		type: {
			required: true,
		},
		description:
			"Use this property to set a maximum number of items per page. If empty or zero, the pagination won't show.",
		table: {
			type: {
				summary: "number",
			},
		},
		control: {
			type: "number",
		},
	},
	skip: {
		name: "Skip Buttons",
		description:
			"Enable this property to show skip buttons on pagination. Those will help you move directly to first and last page.",
		table: {
			type: {
				summary: "boolean",
			},
		},
		control: {
			type: "boolean",
		},
	},
	previousLabel: {
		name: "Previous Button(Label)",
		description:
			'By default, the "previous" button will have as label **"Go to previous page"**. You can change that using this property.',
		table: {
			type: {
				summary: "string",
			},
		},
		control: {
			type: "text",
		},
	},
	nextLabel: {
		name: "Next Button(Label)",
		description:
			'By default, the "next" button will have as label **"Go to next page"**. You can change that using this property.',
		table: {
			type: {
				summary: "string",
			},
		},
		control: {
			type: "text",
		},
	},
}
