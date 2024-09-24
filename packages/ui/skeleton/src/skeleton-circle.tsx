import React from "react"
import { Skeleton } from "./skeleton-base"

const SkeletonCircle = ({
	lines = 3,
	gap = "20",
	isLoaded = false,
	children,
	_htmlProps = {},
}) => {
	// Render children when content is loaded
	if (isLoaded) {
		return children
	}

	const fakeRows = Array.from({ length: lines })

	// Generate text rows
	const rows = fakeRows.map((_, index) => <Skeleton key={index} type="text" />)

	return (
		<div
			style={{
				display: "flex",
				gap: `${gap}px`,
			}}
		>
			{rows}
		</div>
	)
}

export { SkeletonCircle }
