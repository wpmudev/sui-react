/**
 * Represents the alignment options for a row component.
 */
type RowAlignments = "xs" | "sm" | "md" | "lg" | "xl"

/**
 * Represents the properties for a row component.
 */
interface RowProps {
	/**
	 * The alignment of the row.
	 */
	align?: Record<RowAlignments, string>[]
	/**
	 * The content of the row.
	 */
	children?: React.ReactNode
	/**
	 * custom classname for further styling
	 */
	className?: string
}

export type { RowProps, RowAlignments }
