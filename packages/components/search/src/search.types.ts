import React from "react"

type SearchOptionType = {
	label: string
	title: string
}

interface SearchBaseProps {
	id?: string
	className?: string
	defaultValue?: string
	onChange?(value: string): void
}

type SearchSmartType = {
	variation: "smart"
	options: SearchOptionType[]
	searchMinChars?: number
	searchHint?: string
	allowClear?: boolean
} & SearchBaseProps

type SearchBasicType = {
	variation?: "" | "basic"
} & SearchBaseProps

type SearchProps = SearchSmartType | SearchBasicType

interface SearchOptionItemProps {
	children?: React.ReactNode
	option: SearchOptionType
	onClick(option: SearchOptionType): void
}

interface SearchOptionsProps {
	options: SearchOptionType[]
	value: string
	setValue(label: string): void
	setIsPopoverVisible(isVisible: boolean): void
}

export type { SearchProps, SearchOptionItemProps, SearchOptionsProps }
