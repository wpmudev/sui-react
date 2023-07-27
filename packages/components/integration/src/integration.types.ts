import React from "react"

/**
 * This interface defines the props for the Integration component.
 */
interface IntegrationProps {
	/** The title of the integration. */
	title?: string

	/** The description of the integration. */
	description?: string

	/** Additional information related to the integration. */
	additionalInfo?: string

	/** URL of the image representing the integration. */
	image?: string

	/** Whether the integration is disabled or not. */
	isDisabled?: boolean

	/** Whether the integration is active or not. */
	isActive?: boolean

	/** Whether the integration has settings or not. */
	isSettings?: boolean

	/** Whether the integration requires a Pro account. */
	isPro?: boolean

	/** Event handler for when the settings button is clicked. */
	onSettingsClick: (e: React.MouseEvent) => void

	/** Event handler for when the integration is clicked. */
	onClick: (e: React.MouseEvent) => void
}

export type { IntegrationProps }
