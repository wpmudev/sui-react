import React from "react"
import { Skeleton } from "./skeleton-base"
import { SkeletonCircleProps } from "./skeleton.types"
import { useStyles } from "@wpmudev/sui-hooks"

const SkeletonCircle: React.FC<SkeletonCircleProps> = ({
	size = {
		width: "50px",
		height: "50px",
	},
	className = "",
	isLoaded = false,
	children,
	_style = {},
	_htmlProps = {},
}) => {
	const { suiInlineClassname } = useStyles(_style, className)

	return (
		<Skeleton
			type="circle"
			isLoaded={isLoaded}
			className={suiInlineClassname}
			{...(size && {
				size,
			})}
			_htmlProps={_htmlProps}
		>
			{children}
		</Skeleton>
	)
}

export { SkeletonCircle }
