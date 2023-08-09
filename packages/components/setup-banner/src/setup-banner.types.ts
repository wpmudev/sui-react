import React from "react"

/**
 * SetupBannerProps interface defines the props accepted by the SetupBanner component.
 */
interface SetupBannerProps {
	/**
	 * The title to be displayed in the empty state (optional).
	 */
	title?: string
	/**
	 * Subtitle or additional information for the banner.
	 */
	type?: string
	/**
	 * Description or content for the banner
	 */
	description: React.ReactNode
	/**
	 * CSS class for styling the component
	 */
	className?: string
}

export { SetupBannerProps }
