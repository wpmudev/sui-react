import { Pagination } from "../../../src"
import { Box, BoxGroup } from "@wpmudev/sui-box"
import React, { useEffect, useState } from "react"
import { chunkArray } from "@wpmudev/sui-utils"
import dedent from "dedent"

const generateRecords = (n) => {
	const arrayOfObjects = []
	for (let i = 1; i <= n; i++) {
		const object = { id: i, title: "Item" + i }
		arrayOfObjects.push(object)
	}

	return arrayOfObjects
}

const records = generateRecords(60)

const limit = 3

export const BasicPagination = ({ skip = false }) => {
	const [tableItems, setTableItems] = useState(chunkArray(records, limit))
	const [rows, setRows] = useState([])
	const [page, setPage] = useState(1)

	useEffect(() => {
		setTableItems(chunkArray(records, limit))
	}, [limit])

	useEffect(() => {
		setRows(tableItems?.[0])
	}, [tableItems])

	useEffect(() => {
		setRows(tableItems?.[page - 1])
	}, [page, tableItems])

	return (
		<Box>
			<BoxGroup isInline={false}>
				<ul>
					{rows?.map((record, index) => (
						<li key={index}>{record.title}</li>
					))}
				</ul>
				<Pagination
					skip={skip}
					limit={limit}
					numberOfItems={records.length}
					onChange={setPage}
				/>
			</BoxGroup>
		</Box>
	)
}

export const BasicExampleCode = dedent`
import { Pagination } from "../../../src"
import { Box, BoxGroup } from "@wpmudev/sui-box"
import React, { useEffect, useState } from "react"
import { chunkArray } from "@wpmudev/sui-utils"
import dedent from "dedent"

export const generateRecords = (n) => {
    const arrayOfObjects = []
    for (let i = 1; i <= n; i++) {
        const object = { id: i, title: "Item" + i }
        arrayOfObjects.push(object)
    }

    return arrayOfObjects
}

const records = generateRecords(60)

const limit = 3

    export const BasicPagination = () => {
        const [tableItems, setTableItems] = useState(chunkArray(records, limit))
        const [rows, setRows] = useState([])
        const [page, setPage] = useState(1)

        useEffect(() => {
            setTableItems(chunkArray(records, limit))
        }, [limit])

        useEffect(() => {
            setRows(tableItems?.[0])
        }, [tableItems])

        useEffect(() => {
            setRows(tableItems?.[page - 1])
        }, [page, tableItems])

        return (
            <Box>
                <BoxGroup isInline={false}>
                    <ul>
                        {rows?.map((record, index) => (
                            <li key={index}>{record.title}</li>
                        ))}
                    </ul>
                    <Pagination
                        limit={limit}
                        numberOfItems={records.length}
                        onChange={setPage}
                    />
                </BoxGroup>
            </Box>
        )
    }
`

export const SkipButtonsExample = () => <BasicPagination skip={true} />

export const SkipButtonsCode = dedent`
    <Pagination skip={true} />
`
