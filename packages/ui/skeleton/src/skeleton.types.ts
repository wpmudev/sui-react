import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

interface SkeletonProps extends SuiStyleType, SuiHTMLAttributes {
	className?: string
	children?: JSX.Element
	isLoaded?: boolean
	size?: {
		width?: string
		height?: string
	}
}

// Skeleton base props.
interface SkeletonBaseProps extends SkeletonProps {
	key?: number
	type?: string
	isInline?: boolean
	isGrayScale?: boolean
}

// Skeleton text props.
interface SkeletonTextProps extends SkeletonProps {
	lines?: number
	gap?: number
	endLineWidth?: string
	_skeletonProps?: SkeletonBaseProps
}

// Skeleton circle props.
interface SkeletonCircleProps extends SkeletonProps {}

export type {
	SkeletonProps,
	SkeletonBaseProps,
	SkeletonTextProps,
	SkeletonCircleProps,
}
