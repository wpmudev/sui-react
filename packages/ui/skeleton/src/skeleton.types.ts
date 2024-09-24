import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

interface SkeletonBaseProps extends SuiStyleType, SuiHTMLAttributes {
	key?: number
	type: string
	className?: string
	children?: JSX.Element
	isLoaded?: boolean
	isInline?: boolean
	isFluid?: boolean
	isGrayScale?: boolean
}

export type { SkeletonBaseProps }
