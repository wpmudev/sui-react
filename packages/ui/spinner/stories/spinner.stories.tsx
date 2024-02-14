import React, { useRef } from "react"

// Import required component
import { Spinner as SControl, useSpinner } from "../src"
import { Box, BoxGroup } from "@wpmudev/sui-box"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page
import docs from "./Spinner.mdx"

// Configure default options
export default {
	title: "SUI/Components/Core/Spinner",
	// component: Button,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Field List" story
const Spinner = ({ ...args }) => {
	const boxRef = useRef<HTMLDivElement>(null)

	const loader = useSpinner(boxRef, {
		color: args.color,
		size: args.size,
	})

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div
				className="sui-layout__content"
				style={{ backgroundColor: "white", padding: "20px 40px" }}
			>
				<h3>Two ways to use spinner</h3>
				<h5>
					1. Using useSpinner hook: Use this method when you want to block
					content with a spinner overlay.
				</h5>
				<Button
					appearance="secondary"
					color="black"
					isSmall={true}
					onClick={() => (loader.isVisible ? loader.hide() : loader.show())}
				>
					{loader.isVisible ? "Hide Loader" : "Show Loader"}
				</Button>
				<br />
				<br />
				<div
					ref={boxRef}
					style={{ maxWidth: "400px", border: "solid 2px black" }}
				>
					<Box>
						<BoxGroup>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry&apos;s standard
								dummy text ever since the 1500s, when an unknown printer took a
								galley of type and scrambled it to make a type specimen book. It
								has survived not only five centuries,
							</p>
						</BoxGroup>
					</Box>
				</div>
				<h5>
					2. Component: use this when you want use spinner as inline element
				</h5>
				<div
					style={{
						background: args.color === "dark" ? "rgba(0, 0, 0, 0.7)" : "#fff",
						padding: 20,
					}}
				>
					<SControl {...args} />
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Spinner.args = {
	isAbsolute: false,
	size: "lg",
	color: "primary",
	isContained: false,
}

// Set controls for story arguments.
Spinner.argTypes = {
	isAbsolute: {
		name: "Absolute",
		type: "boolean",
	},
	size: {
		name: "Size",
		options: ["lg", "sm"],
		control: {
			type: "select",
			labels: { sm: "Small", lg: "Large - lg ( default )" },
		},
	},
	color: {
		name: "Color",
		options: ["primary", "dark"],
		control: {
			type: "select",
			labels: { primary: "Primary", dark: "Dark" },
		},
	},
	isContained: {
		name: "Contained",
		type: "boolean",
	},
}

// Publish required stories.
export { Spinner }
