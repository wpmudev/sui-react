import { ReactNode } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"

// Structure of a footer link.
type FooterLinkType = {
	url: string // URL associated with the link.
	title: string // Title or text to be displayed for the link.
}

// Structure of a social media link in the footer.
type FooterSocialLinkType = {
	url: string // URL of the social media profile or page.
	type: "facebook" | "twitter" | "instagram" // Type or platform of the social media link
}

// Defining an interface to specify the props that can be passed to a Footer component.
interface FooterProps extends useStylesTypes {
	/**
	 * An optional function that can be used to render additional blocks within the footer.
	 *
	 * @param builtWithText - "Made with <3 by WPMU DEV" to be rendered as additional blocks.
	 * @return ReactNode representing the additional blocks.
	 */
	renderBlocks?(builtWithText: ReactNode): ReactNode[]

	/**
	 * An optional array of footer links.
	 */
	links?: FooterLinkType[]

	/**
	 * An optional array of social media links.
	 */
	socialLinks?: FooterSocialLinkType[]

	/**
	 * When true, it removes background color
	 */
	removeBGColor?: boolean

	/**
	 * Additional className
	 */
	className?: string
	/**
	 * The link to the logo image
	 */
	logoImageLink?: string

	/**
	 * the url the logo points to
	 */
	logoHref?: string
}

export type { FooterProps, FooterLinkType, FooterSocialLinkType }
