import React from "react"

type SetupBannerTypes =
	| "smush"
	| "defender"
	| "snapshot"
	| "hummingbird"
	| "forminator"
	| "beehive"
	| "hustle"
	| "smartcrawl"
	| "shipper"
	| "branda"

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
	type?: SetupBannerTypes
	/**
	 * Description or content for the banner
	 */
	description: React.ReactNode
	/**
	 * CSS class for styling the component
	 */
	className?: string
}

export { SetupBannerProps, SetupBannerTypes }
