import React from "react"
import { FormField } from "@wpmudev/sui-form-field"
import { SelectBaseProps, Select } from "../../../src"
import dedent from "dedent"

export const AsyncSelectCode = dedent`
import { SelectBaseProps, Select } from "@wpmudev/sui-select"
import { FormField } from "@wpmudev/sui-form-field"

const AsyncSelect: React.FC<CustomSelectComponentProps> = ({}) => {
    
    const perPage = 10;

    return (
            <Select
                _dropdownProps={{
                    type: "select",
                    isAsync: true,
                    allowSearch: true,
                    searchPlaceholder: "Search...",
                    asyncOptions: {
                        perPage,
                    },
                    getOptions: async (
                        search: string,
                        { page }: any,
                        prevLoadedItems = [],
                    ) => {
                        const skip = page * perPage - 10
                        const items: SelectBaseProps["options"] = []
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
                    },
                }}
            />
    )
} 
`

interface CustomSelectComponentProps {
	errorMessage: string
	isSmall: boolean
	isDisabled: boolean
	customWidth: string
	isError: boolean
	perPage: number
}

export const AsyncSelect: React.FC<CustomSelectComponentProps> = ({}) => {
	const perPage = 10

	return (
		<Select
			_dropdownProps={{
				type: "select",
				isAsync: true,
				allowSearch: true,
				searchPlaceholder: "Search...",
				asyncOptions: {
					perPage,
				},
				getOptions: async (
					search: string,
					{ page }: any,
					prevLoadedItems = [],
				) => {
					const skip = page * perPage - 10
					const items: SelectBaseProps["options"] = []
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
				},
			}}
		/>
	)
}
