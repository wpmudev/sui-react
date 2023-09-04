import React, { HTMLProps } from "react"

interface SegmentedGroupProps extends HTMLProps<HTMLDivElement> {
	classNames?: string
	isFullWidth?: boolean
	children?: React.ReactNode
}

export type { SegmentedGroupProps }
