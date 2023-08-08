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
	subTitle?: string
	/**
	 * Background color for the banner.
	 */
	bgColor?: string
	/**
	 * Icon name to be displayed in the banner.
	 */
	icon?: string
	/**
	 * Background color for the icon container
	 */
	iconBGColor?: string
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
