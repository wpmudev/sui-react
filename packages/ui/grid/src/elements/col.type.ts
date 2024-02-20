import { useStylesTypes } from "@wpmudev/sui-hooks"

/**
 * Represents the properties for a column component.
 */
interface ColProps extends useStylesTypes {
	/**
	 * The size of the column.
	 */
	size?: number | string
	/**
	 * The content of the column.
	 */
	children?: React.ReactNode
	/**
	 * Custom className(s) for further styling
	 */
	className?: string
}

export type { ColProps }
