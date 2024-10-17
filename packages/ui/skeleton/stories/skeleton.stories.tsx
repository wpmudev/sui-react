import React from "react"
import {
	SkeletonCircle,
	SkeletonText,
	Skeleton as SuiSkeleton,
} from "../src/index"

// Import required assets
import image from "./images/unreal-person.jpg"

// Import documentation main page
import docs from "./skeleton.mdx"

// Configure default options
export default {
	title: "SUI/Components/Core/Skeleton",
	component: SuiSkeleton,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const Skeleton = ({
	type = "default",
	...props
}: {
	type: "default" | "text" | "circle"
}) => {
	const styles = {
		display: "block",
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={styles}>
					{"default" === type && (
						<>
							<SuiSkeleton
								size={{ width: "300px", height: "100px" }}
								{...props}
							>
								<span>Content inside skeleton.</span>
							</SuiSkeleton>
							<span>Content after skeleton.</span>
						</>
					)}
					{"text" === type && (
						<>
							<SkeletonText lines={8} endLineWidth="65%" {...props}>
								<span>Content inside skeleton.</span>
							</SkeletonText>
							Content after skeleton.
						</>
					)}
					{"circle" === type && (
						<>
							<SkeletonCircle
								size={{
									width: "50px",
									height: "50px",
								}}
								{...props}
							>
								<img
									src={image}
									style={{
										borderRadius: "100%",
										height: "50px",
										width: "50px",
									}}
									alt="Unreal Person avatar"
								/>
							</SkeletonCircle>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

Skeleton.args = {
	type: "default",
	isLoaded: false,
	isInline: false,
	isGrayscale: false,
}

// Set controls for story arguments.
Skeleton.argTypes = {
	type: {
		name: "Variations",
		options: ["default", "text", "circle"],
		control: {
			type: "select",
			labels: {
				default: "Default",
				text: "Text",
				circle: "Circle",
			},
		},
	},
	isLoaded: {
		name: "Loaded",
		control: {
			type: "boolean",
		},
	},
	isInline: {
		name: "Inline",
		control: {
			type: "boolean",
		},
		if: {
			arg: "isLoaded",
			eq: false,
		},
	},
	isGrayscale: {
		name: "Grayscale",
		control: {
			type: "boolean",
		},
		if: {
			arg: "isLoaded",
			eq: false,
		},
	},
}
