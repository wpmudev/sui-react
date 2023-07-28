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
	align?: Partial<Record<RowAlignments, "inline" | "stacked">>
	/**
	 * The content of the row.
	 */
	children?: React.ReactNode
}

export type { RowProps, RowAlignments }
