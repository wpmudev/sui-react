import React from "react"
import { Skeleton } from "./skeleton-base"

const SkeletonBlock = ({ children }) => {
	return (
		<Skeleton
			type="block"
			isLoaded={false}
			isInline={false}
			isFluid={false}
			isGrayScale={false}
			_style={{
				height: "200px",
				width: "100px",
			}}
		>
			{children}
		</Skeleton>
	)
}

export { SkeletonBlock }
