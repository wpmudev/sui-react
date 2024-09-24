import React from "react"
import { Skeleton } from "./skeleton-base"

const SkeletonText = ({
	lines = 3,
	gap = "8",
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
				flexDirection: "column",
			}}
		>
			{rows}
		</div>
	)
}

export { SkeletonText }
