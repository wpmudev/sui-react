import { IconsNamesType } from "@wpmudev/sui-icons"

/**
 * Represents the properties for an icon component.
 */
interface IconPropsTypes {
	/**
	 * The name of the icon.
	 */
	name: IconsNamesType
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
