import React, { useEffect, useState } from "react"

// Import required component
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableRow,
} from "../../../src"

import { Tag } from "@wpmudev/sui-tag"
import { Button } from "@wpmudev/sui-button"
import { Pagination } from "@wpmudev/sui-pagination"
import { chunkArray } from "@wpmudev/sui-utils"

const records = [
	{
		id: 1,
		title: "Registration Form",
		tag: "Draft",
		submission: "April 20, 2022 11:00 am",
		status: "info",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 2,
		title: "Contact Us Form",
		tag: "Draft",
		submission: "April 21, 2022 10:30 am",
		status: "info",
	},
	{
		id: 3,
		title: "Feedback Form",
		tag: "Draft",
		submission: "April 22, 2022 10:45 am",
		status: "info",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 4,
		title: "Job Application",
		tag: "Published",
		submission: "April 23, 2022 9:15 am",
		status: "success",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 5,
		title: "Subscription Form",
		tag: "Draft",
		submission: "April 24, 2022 3:20 pm",
		status: "info",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 6,
		title: "Order Form",
		tag: "Published",
		submission: "April 25, 2022 2:00 pm",
		status: "success",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 7,
		title: "Support Request",
		tag: "Draft",
		submission: "April 26, 2022 4:45 pm",
		status: "info",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
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
		tag: "Published",
		submission: "April 28, 2022 5:10 pm",
		status: "success",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 10,
		title: "Survey Form",
		tag: "Draft",
		submission: "April 29, 2022 9:50 am",
		status: "info",
	},
	{
		id: 11,
		title: "Product Feedback",
		tag: "Published",
		submission: "April 30, 2022 3:30 pm",
		status: "success",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 12,
		title: "Volunteer Registration",
		tag: "Published",
		submission: "May 1, 2022 8:15 am",
		status: "success",
	},
	{
		id: 13,
		title: "Application Form",
		tag: "Draft",
		submission: "May 2, 2022 7:20 am",
		status: "info",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 14,
		title: "Membership Application",
		tag: "Draft",
		submission: "May 3, 2022 6:45 pm",
		status: "info",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 15,
		title: "Feedback Survey",
		tag: "Published",
		submission: "May 4, 2022 5:00 pm",
		status: "success",
	},
	{
		id: 16,
		title: "Contact Information Update",
		tag: "Draft",
		submission: "May 5, 2022 4:10 pm",
		status: "info",
	},
	{
		id: 17,
		title: "Event Feedback",
		tag: "Published",
		submission: "May 6, 2022 3:25 pm",
		status: "success",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 18,
		title: "Product Inquiry",
		tag: "Draft",
		submission: "May 7, 2022 2:40 pm",
		status: "info",
	},
	{
		id: 19,
		title: "Customer Support Request",
		tag: "Published",
		submission: "May 8, 2022 1:55 pm",
		status: "success",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 20,
		title: "Demo Request",
		tag: "Draft",
		submission: "May 9, 2022 11:30 am",
		status: "info",
	},
	{
		id: 21,
		title: "Quote Request",
		tag: "Published",
		submission: "May 10, 2022 10:45 am",
		status: "success",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 22,
		title: "Customer Feedback",
		tag: "Published",
		submission: "May 11, 2022 9:20 am",
		status: "success",
	},
	{
		id: 23,
		title: "Service Inquiry",
		tag: "Draft",
		submission: "May 12, 2022 8:00 am",
		status: "info",
	},
	{
		id: 24,
		title: "Product Review",
		tag: "Published",
		submission: "May 13, 2022 7:30 am",
		status: "success",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 25,
		title: "Bug Report",
		tag: "Draft",
		submission: "May 14, 2022 6:45 am",
		status: "info",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 26,
		title: "Feature Request",
		tag: "Draft",
		submission: "May 15, 2022 5:15 am",
		status: "info",
	},
	{
		id: 27,
		title: "Partnership Inquiry",
		tag: "Published",
		submission: "May 16, 2022 4:30 am",
		status: "success",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 28,
		title: "Content Submission",
		tag: "Draft",
		submission: "May 17, 2022 3:45 am",
		status: "info",
	},
	{
		id: 29,
		title: "Event RSVP",
		tag: "Published",
		submission: "May 18, 2022 3:00 am",
		status: "success",
	},
	{
		id: 30,
		title: "Product Warranty Claim",
		tag: "Draft",
		submission: "May 19, 2022 2:15 am",
		status: "info",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 31,
		title: "Technical Support Request",
		tag: "Published",
		submission: "May 20, 2022 1:30 am",
		status: "success",
	},
	{
		id: 32,
		title: "Survey Feedback",
		tag: "Draft",
		submission: "May 21, 2022 12:45 am",
		status: "info",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 33,
		title: "Product Recall Request",
		tag: "Draft",
		submission: "May 22, 2022 12:00 am",
		status: "info",
	},
	{
		id: 34,
		title: "Quote Inquiry",
		tag: "Published",
		submission: "May 23, 2022 11:15 pm",
		status: "success",
	},
	{
		id: 35,
		title: "Customer Satisfaction Survey",
		tag: "Draft",
		submission: "May 24, 2022 10:30 pm",
		status: "info",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 36,
		title: "Content Licensing Request",
		tag: "Draft",
		submission: "May 25, 2022 9:45 pm",
		status: "info",
	},
	{
		id: 37,
		title: "Product Inquiry",
		tag: "Draft",
		submission: "May 26, 2022 9:00 pm",
		status: "info",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 38,
		title: "Complaint Form",
		tag: "Draft",
		submission: "May 27, 2022 8:15 pm",
		status: "info",
	},
	{
		id: 39,
		title: "Membership Renewal",
		tag: "Published",
		submission: "May 28, 2022 7:30 pm",
		status: "success",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 40,
		title: "Product Return Request",
		tag: "Draft",
		submission: "May 29, 2022 6:45 pm",
		status: "info",
	},
	{
		id: 41,
		title: "Demo Request",
		tag: "Published",
		submission: "May 30, 2022 6:00 pm",
		status: "success",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 42,
		title: "Quote Request",
		tag: "Draft",
		submission: "May 31, 2022 5:15 pm",
		status: "info",
	},
	{
		id: 43,
		title: "Customer Feedback",
		tag: "Draft",
		submission: "June 1, 2022 4:30 pm",
		status: "info",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 44,
		title: "Service Inquiry",
		tag: "Draft",
		submission: "June 2, 2022 3:45 pm",
		status: "info",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 45,
		title: "Product Review",
		tag: "Published",
		submission: "June 3, 2022 3:00 pm",
		status: "success",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 46,
		title: "Bug Report",
		tag: "Published",
		submission: "June 4, 2022 2:15 pm",
		status: "success",
		props: {
			isExpandable: true,
			expandableContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,
		},
	},
	{
		id: 47,
		title: "Feature Request",
		tag: "Draft",
		submission: "June 5, 2022 1:30 pm",
		status: "info",
	},
]

const itemsPerPage = 5
// break array into page chunks
const tableItems = chunkArray(records, itemsPerPage)

// Build "Field List" story
export const TableExample = ({ ...props }) => {
	const [tempRows, setTempRows] = useState<Record<string, any>>([])
	const [rows, setRows] = useState<Record<string, any>>([])
	const [page, setPage] = useState<number>(1)

	useEffect(() => {
		setRows(tableItems?.[0])
		setTempRows(tableItems?.[0])
	}, [])

	useEffect(() => {
		setRows(tableItems?.[page - 1])
	}, [page])

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
				<Table
					stickyCols={true}
					onAction={(actionType, data) => {
						let dRows: Record<string, any> = [...rows]

						switch (actionType) {
							case "bulk-action":
							case "apply-filters":
								alert(
									`ACTION: ${actionType} \n\nData: \n${JSON.stringify(data)}`,
								)
								break
							case "sort-rows":
								break
							case "search-items":
								dRows = tempRows.filter((item) =>
									item.title.includes(data as string),
								)

								dRows = "" !== data ? dRows : tempRows
								break
							case "sort-columns":
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
					{...props}
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
								<Pagination
									limit={itemsPerPage}
									numberOfItems={records.length}
									onChange={setPage}
								/>
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</div>
		</div>
	)
}