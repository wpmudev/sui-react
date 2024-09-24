import React from "react"
import { SkeletonText as SuiSkeleton } from "../src/index"
// Import documentation main page
// import docs from "./skeleton.mdx"

// Configure default options
export default {
	title: "SUI/Components/Core/Skeleton",
	component: SuiSkeleton,
	parameters: {
		layout: "fullscreen",
		docs: {
			// page: docs,
		},
	},
}

// Build story
export const Skeleton = ({ ...props }) => {
	const styles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={styles}>
					<SuiSkeleton>
						<p>
							This is a test. This is a test.This is a test.This is a test.This
							is a test.This is a test.This is a test.This is a test.This is a
							test.This is a test.This is a test.This is a test.This is a test.
						</p>
					</SuiSkeleton>
				</div>
			</div>
		</div>
	)
}

Skeleton.args = {}

// Set controls for story arguments.
Skeleton.argTypes = {}
