import React from "react"

import {
	PluginsSlug,
	SuiHTMLAttributes,
	SuiStyleType,
} from "@wpmudev/sui-utils"
import { useStylesTypes } from "@wpmudev/sui-hooks"

/**
 * SetupBannerProps interface defines the props accepted by the SetupBanner component.
 */
interface SetupBannerProps extends SuiStyleType, SuiHTMLAttributes {
	/**
	 * The title to be displayed in the empty state (optional).
	 */
	title?: string
	/**
	 * Subtitle or additional information for the banner.
	 */
	type?: PluginsSlug
	/**
	 * Description or content for the banner
	 */
	description?: React.ReactNode
	/**
	 * CSS class for styling the component
	 */
	className?: string
}

export type { SetupBannerProps }
