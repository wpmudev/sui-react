import { ReactNode } from "react"

// Define the UpsellProps interface to specify the expected props for the Upsell component
interface UpsellNoticeProps {
	// Optional title of the upsell, can be a string
	title?: string

	tagTitle?: string

	// Optional description of the upsell, can be any ReactNode
	description?: ReactNode

	// Optional actions to be displayed, can be any ReactNode
	actions?: ReactNode

	// Optional features to be displayed, can be an array of ReactNodes or strings
	features?: (ReactNode | string)[]

	// Upsell size
	size?: "sm" | "lg"

	// Optional variation to specify the type of upsell, limited to specific string values
	variation?:
		| "hummingbird"
		| "smush"
		| "snapshot"
		| "smartcrawl"
		| "shipper"
		| "ivt"
		| "hustle"
		| "forminator"
		| "defender"
		| "branda"
		| "beehive"
}

export { UpsellNoticeProps }
