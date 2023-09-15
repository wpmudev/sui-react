import { HTMLProps, ReactNode } from "react"

interface AdvancedBannerBasePros extends HTMLProps<HTMLSpanElement> {
	title?: ReactNode
	description?: ReactNode
	children?: ReactNode
	helper?: ReactNode
	imageUrl?: string
	variation: "plugin" | "hub" | "newsletter" | "black-friday"
	className?: string
	allowClose?: boolean
	onClose?(): void
}

type AdvancedBannerBlackFridayProps = {
	variation: "black-friday"
	discountPercentage?: number
	ctaTitle?: string
	onCTAClick?(): void
} & AdvancedBannerBasePros

type AdvancedBannerProps = AdvancedBannerBlackFridayProps

export type { AdvancedBannerProps }
