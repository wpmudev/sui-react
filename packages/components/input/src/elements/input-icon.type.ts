/**
 * Represents the properties for an icon component.
 */
interface IconPropsTypes {
	/**
	 * The name of the icon.
	 */
	name?: string
	/**
	 * The size of the icon.
	 */
	size?: "sm" | "md" | "lg"
	/**
	 * Icon position
	 */
	position: "start" | "end"
}

export type { IconPropsTypes }
