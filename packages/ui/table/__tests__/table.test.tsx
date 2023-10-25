import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"

import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableProps,
	TableRow,
} from "../src"

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
]
// Need more tests
describe("@wpmudev/sui-table", () => {
	const TableComponent = (props: TableProps) => {
		return (
			<Table {...props}>
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
					{records?.map((record, index) => (
						<TableRow
							key={index}
							id={record.id}
							isExpandable={record?.props?.isExpandable}
							expandableContent={record?.props?.expandableContent}
							status={record?.status ?? ""}
							// actions={({ id, content }) => content}
						>
							<TableCell>
								<strong>#{record.id}</strong>
							</TableCell>
							<TableCell isTrim={true}>
								<strong>{record.title}</strong>
							</TableCell>
							<TableCell>Something</TableCell>
							<TableCell>{record.submission}</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow id="0">
						<TableCell>fff</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		)
	}

	it("render correctly", () => {
		render(<TableComponent />)
		expect(screen.getByTestId("table")).toBeInTheDocument()
	})

	it("stripped works fine", () => {
		render(<TableComponent isStripped={true} />)
		const table = screen.getByTestId("table")
		expect(table).toHaveClass("sui-table--stripe")
	})

	it("isDraggable works fine", () => {
		render(<TableComponent isDraggable={true} />)
		const table = screen.getByTestId("table")
		expect(table).toHaveClass("sui-table--draggable")
	})

	it("stickyCols works fine", () => {
		render(<TableComponent stickyCols={true} />)
		const table = screen.getByTestId("table")
		expect(table).toHaveClass("sui-table--sticky")
	})
})
