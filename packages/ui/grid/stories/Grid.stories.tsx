import React from "react"

// Import modules
import { Row, Col } from "../src"
import { Box, BoxGroup } from "@wpmudev/sui-box"

// Import documentation
import docs from "./Grid.mdx"

// Configure default options
export default {
	title: "SUI/Components/Core/Grid",
	component: Row,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const Grid = ({ align }: { align: string }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<Row align={{ md: align }}>
					<Col size="4">
						<Box>
							<BoxGroup>
								<p>Column 1</p>
							</BoxGroup>
						</Box>
					</Col>
					<Col size="4">
						<Box>
							<BoxGroup>
								<p>Column 2</p>
							</BoxGroup>
						</Box>
					</Col>
					<Col size="4">
						<Box>
							<BoxGroup>
								<p>Column 3</p>
							</BoxGroup>
						</Box>
					</Col>
				</Row>
			</div>
		</div>
	)
}

// Set story arguments
Grid.args = {
	align: "inline",
}

// Set controls for story arguments
Grid.argTypes = {
	align: {
		name: "Align",
		options: ["inline", "stacked"],
		control: {
			type: "select",
			labels: { inline: "Inline", stacked: "Stacked" },
		},
	},
}
