import { HTMLProps, ReactNode } from "react"

export interface AdvancedBannerBasePros
	extends Omit<HTMLProps<HTMLSpanElement>, "title" | "children" | "className"> {
	/**
	 * Sets the headline text
	 */
	title?: ReactNode
	/**
	 * Adds an Explanatory text
	 */
	description?: ReactNode
	/**
	 * Represents the content of the Banner
	 */
	children?: ReactNode
	/**
	 * >Provides contextual text to enhance user understanding
	 */
	helper?: ReactNode
	/**
	 * The linkt to the image to be displayed on the banner
	 */
	imageUrl?: string
	/**
	 * Customizes the display of the Banner
	 */
	variation: "plugin" | "hub" | "newsletter" | "black-friday"
	/**
	 * Custon css className(s)
	 */
	className?: string
	/**
	 * Whether to allow the user to close the component
	 */
	allowClose?: boolean
	/**
	 * A callback function to be invoked when the component is closed
	 */
	onClose?(): void
}

// Props Specific for the black-friday variation
type AdvancedBannerBlackFridayProps = {
	/**
	 * Black Friday Variation
	 */
	variation: "plugin" | "hub" | "newsletter" | "black-friday"
	/**
	 * Represents the percentage value of a the discount applied
	 */
	discountPercentage?: number
	/**
	 * The text of the action button
	 */
	ctaTitle?: string
	/**
	 * a Call back functon to be invoked when the action button is clicked
	 */
	onCTAClick?(): void
} & AdvancedBannerBasePros

type AdvancedBannerProps = AdvancedBannerBlackFridayProps

export type { AdvancedBannerProps }
