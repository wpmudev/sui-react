import React from "react"
import { FormField } from "@wpmudev/sui-form-field"
import { Dropdown } from "../../../src"
import dedent from "dedent"

export const AsyncDropdownCode = dedent`
import { SelectBaseProps, Select } from "@wpmudev/sui-select"
import { FormField } from "@wpmudev/sui-form-field"

const AsyncSelect: React.FC<CustomSelectComponentProps> = ({}) => {
    
    const perPage = 10;

    return (
        <Dropdown
            type="select"
            isAsync={true}
            allowSearch={true}
            searchPlaceholder="Search..."
            asyncOptions={{
        	    perPage,
            }}
        	getOptions={async (
                search: string,
                { page }: any,
                prevLoadedItems = [],
        	) => {
                const skip = page * perPage - 10
                const items: any = []
                const baseAPI = "https://dummyjson.com/products/search"
                let total = 0

                await fetch(
                	baseAPI + "?limit=" + perPage + "&skip=" + skip + "&total=50&q=" + search,
                )
                .then((res) => res.json())
                .then((result) => {
                	total = result.total

                	result.products.forEach((item: any) => {
                        items.push({
                        	id: item?.id,
                        	label: item?.title,
                        	isSelected: false,
                        })
                	})
                })

                return {
                	items,
                	hasMore: [...items, ...prevLoadedItems].length < 100,
                }
        	}}
        />
    )
} 
`

export const AsyncDropdown = ({}) => {
	const perPage = 10

	return (
		<Dropdown
			type="select"
			isAsync={true}
			label="Async Options"
			allowSearch={true}
			searchPlaceholder="Search..."
			asyncOptions={{
				perPage,
			}}
			getOptions={async (
				search: string,
				{ page }: any,
				prevLoadedItems = [],
			) => {
				const skip = page * perPage - 10
				const items: any = []
				const baseAPI = `https://dummyjson.com/products/search`
				let total = 0

				await fetch(
					`${baseAPI}?limit=${perPage}&skip=${skip}&total=50&q=${search}`,
				)
					.then((res) => res.json())
					.then((result) => {
						total = result.total

						result.products.forEach((item: any) => {
							items.push({
								id: item?.id,
								label: item?.title,
								isSelected: false,
							})
						})
					})

				return {
					items,
					hasMore: [...items, ...prevLoadedItems].length < 100,
				}
			}}
		/>
	)
}
