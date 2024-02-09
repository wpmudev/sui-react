import { IconsNamesType } from "@wpmudev/sui-icons"
import { useStylesTypes } from "@wpmudev/sui-hooks"

/**
 * Represents the properties for an icon component.
 */
interface IconPropsTypes extends Omit<useStylesTypes, "position"> {
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
	/**
	 * Whether the cursor to be pointer on hover
	 */
	onClick?: (event: React.MouseEvent) => void
}

export type { IconPropsTypes }
