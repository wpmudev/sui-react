import React, { Fragment, useState } from "react"

// Import required component.
import { SummaryBox as SuiSummaryBox } from "../src"
import {
	SegmentedControl,
	SegmentedControlButton,
} from "@wpmudev/sui-segmented-control"
import { Button } from "@wpmudev/sui-button"
import { Notification } from "@wpmudev/sui-notification"
import { Score } from "@wpmudev/sui-score"

// Import documentation main page.
import docs from "./SummaryBox.mdx"
import { SummaryBoxBody } from "../src/summary-box-body"
import { SummaryBoxItem } from "../src/summary-box-item"
import { SummaryFooterBody } from "../src/summary-box-footer"

// Build "SummaryBox" story.
const SummaryBox = ({ color }) => {
	const [mode, setMode] = useState<string>("desktop")

	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		// background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiSummaryBox
						title="Test"
						primaryActions={[
							<SegmentedControl
								key={0}
								name="type"
								defaultValue={mode}
								onChange={(type: string) => setMode(type ?? "")}
							>
								<SegmentedControlButton value="visual" icon="Filter" />
								<SegmentedControlButton value="code" icon="Filter" />
							</SegmentedControl>,
						]}
						secondaryActions={[
							<Button
								key={0}
								appearance="secondary"
								color="black"
								isSmall={true}
							>
								Clear Cache
							</Button>,
							<Button
								key={2}
								appearance="primary"
								icon="add"
								color="blue"
								isSmall={true}
							>
								New test
							</Button>,
						]}
					>
						<SummaryBoxBody
							summaryItems={[
								<SummaryBoxItem
									key={0}
									title="Test 1"
									description="fdsfsdf"
									actionIcon="InfoAlt"
									actionState="green"
								/>,
								<SummaryBoxItem
									key={1}
									title="Test 1"
									titleUrl={"google.com"}
									description="fdsfsdf"
								/>,
								<SummaryBoxItem key={2} title="Test 1" description="fdsfsdf" />,
								<SummaryBoxItem key={3} title="Test 1" description="fdsfsdf" />,
							]}
						>
							<div
								style={{
									alignItems: "center",
									display: "flex",
									textAlign: "center",
									flexDirection: "column",
									justifyContent: "center",
								}}
							>
								<Score
									bar={95}
									isSmall={false}
									value={10}
									state="success"
									// state={state}
									// isPercentage={isPercentage}
								/>
								<h4 style={{ display: "inline", margin: 0 }}>
									Desktop Site Performance Score
								</h4>
								<p>Last Checked : May 14, 2023 at 08:24am</p>
							</div>
						</SummaryBoxBody>
						<SummaryFooterBody>
							<Notification
								id="notice"
								icon="InfoAlt"
								size="fluid"
								variation="info"
								desc={
									<Fragment>
										Your site performs better than 90 % sites out there. To
										boost the performance further, check the{" "}
										<a href="#">Pending Audits</a>
									</Fragment>
								}
							/>
						</SummaryFooterBody>
					</SuiSummaryBox>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
SummaryBox.args = {}

// Set controls for story arguments.
SummaryBox.argTypes = {
	bar: {
		name: "Circle Bar",
		description: "The SummaryBox circle.",
		control: {
			type: "range",
			min: 0,
			max: 100,
			step: 1,
		},
	},
	value: {
		name: "SummaryBox Value",
		description: "The SummaryBox value to display.",
		control: "number",
	},
	content: {
		name: "Content",
		description: "The SummaryBox content to display.",
		control: "text",
		if: {
			arg: "isSmall",
			eq: true,
		},
	},
	isPercentage: {
		name: "Show Percentage",
		description: "The percentage to display.",
	},
	state: {
		name: "Type",
		description: "The SummaryBoxs color variation according to type.",
		options: ["default", "error", "warning", "success"],
		control: {
			type: "select",
			labels: {
				default: "Type: Default",
				error: "Type: Error",
				warning: "Type: Warning",
				success: "Type: Success",
			},
		},
	},
	isSmall: {
		name: "Small",
		description: "The SummaryBoxs component size.",
	},
}

// Configure default options.
export default {
	title: "SUI/Components/Core/SummaryBox",
	component: SummaryBox,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Publish required stories.
export { SummaryBox }
