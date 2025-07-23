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

const generateRecords = (n: number) => {
	const arrayOfObjects = []
	for (let i = 1; i <= n; i++) {
		const object = { id: i, title: "Item" + i }
		arrayOfObjects.push(object)
	}

	return arrayOfObjects
}

const records = generateRecords(60)

// Build "Pagination" story
export const Pagination = (args: PaginationProps): React.ReactNode => {
	const [tableItems, setTableItems] = useState(
		chunkArray(records, args?.limit as number),
	)
	const [rows, setRows] = useState<Record<string, any>>([])
	const [page, setPage] = useState<number>(1)

	useEffect(() => {
		setTableItems(chunkArray(records, args?.limit as number))
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
							{rows?.map((record: Record<string, any>, index: number) => (
								<li key={index}>{record.title}</li>
							))}
						</ul>
						<SuiPagination
							{...args}
							page={page}
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
	previousLabel: "Previous page",
	nextLabel: "Next page",
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
