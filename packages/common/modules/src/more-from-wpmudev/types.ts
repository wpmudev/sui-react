import {
	SuiHTMLAttributes,
	SuiStyleType,
	PluginsSlug,
} from "@wpmudev/sui-utils"
import { DropdownProps } from "@wpmudev/sui-dropdown"

/**
 * Represents a plugin's details.
 */
type Plugin = {
	plugin: PluginsSlug
	title: string
	description: string
	link: string
	props?: SuiHTMLAttributes
}

/**
 * Represents the properties for a dropdown component.
 */
interface WPMUDEVProps extends DropdownProps, SuiStyleType {
	title?: string
	plugins?: Plugin[]
	upsell?: {
		link: string
		title: string
		description: string
		props?: SuiHTMLAttributes
	}
	filter?: PluginsSlug[]
}

export type { WPMUDEVProps }
