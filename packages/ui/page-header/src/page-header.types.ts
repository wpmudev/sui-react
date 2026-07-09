import React, { HTMLProps } from "react"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * PageHeaderProps is an interface that extends the HTMLDivElement interface
 * while allowing additional properties specific to the page header component.
 * It is used to define the set of properties that can be passed to the page header component.
 */
interface PageHeaderProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * Unique identifier for the page header.
	 */
	id?: string
	/**
	 * The page title
	 */
	title?: string
	/**
	 * Actions for the header to be displayed on the right hand side
	 */
	actions?: React.ReactNode[]
	/**
	 * Additional className
	 */
	className?: string
}

export type { PageHeaderProps }
