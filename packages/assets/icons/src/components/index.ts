import "../scss/sui-icons.scss"

import * as Icons from "./exports"
import { IconProps } from "@wpmudev/sui-icon"

export type IconsNamesType = keyof typeof Icons

export type IconsModule = Record<IconsNamesType, React.ComponentType<IconProps>>

// Usefull to get icons by name
export default Icons as IconsModule

// Usefull for importing Icons individually, ex. import { ExternalLink } from "@wpmudev/sui-icons"
export * from "./exports"

// Exporting keys of Icons as IconsName
export const IconsName: IconsNamesType[] = Object.keys(
	Icons,
) as IconsNamesType[]
