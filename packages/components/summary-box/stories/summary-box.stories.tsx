import React, { Fragment, useState } from "react"

// Import required component.
import {
	SegmentedControl,
	SegmentedControlButton,
} from "@wpmudev/sui-segmented-control"
import { Button } from "@wpmudev/sui-button"
import { Notification } from "@wpmudev/sui-notification"
import { Score } from "@wpmudev/sui-score"

// Import documentation main page.
import docs from "./SummaryBox.mdx"
import {
	SummaryBox as SuiSummaryBox,
	SummaryBoxBody,
	SummaryBoxItem,
	SummaryFooterBody,
} from "../src"

// Build "SummaryBox" story.
const SummaryBox = ({ color }) => {
	const [mode, setMode] = useState<string>("desktop")

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div>
					<SuiSummaryBox
						icon="performance"
						title="Performance Summary"
						hideMobileIcon={true}
						primaryActions={[
							<SegmentedControl
								key={0}
								name="type"
								defaultValue={mode}
								onChange={(type: string) => setMode(type ?? "")}
							>
								<SegmentedControlButton value="visual" icon="Mobile" />
								<SegmentedControlButton value="code" icon="Desktop" />
							</SegmentedControl>,
							<div key={0}>
								<Button
									appearance="secondary"
									icon="trash"
									color="black"
									isSmall={true}
									isResponsive={true}
								>
									Clear Cache
								</Button>
							</div>,
						]}
						secondaryActions={[
							<Button
								key={2}
								appearance="primary"
								icon="add"
								color="blue"
								isSmall={true}
								isFullWidth={true}
							>
								New test
							</Button>,
						]}
					>
						<SummaryBoxBody
							summaryItems={[
								<SummaryBoxItem
									key={0}
									title="Browser Caching"
									description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									actionIcon="InfoAlt"
									actionState="green"
								/>,
								<SummaryBoxItem
									key={1}
									title="Gzip compression"
									titleUrl={"google.com"}
									description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									actionIcon={false}
									actionTitle="10.33%"
									actionState="green"
								/>,
								<SummaryBoxItem
									key={2}
									title="Assets Optimization"
									description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									actionIcon="CheckAlt"
									actionTitle="10.33%"
									actionState="success"
								/>,
							]}
						>
							<Score bar={95} isSmall={false} value={10} state="success" />
							<h4>Desktop Site Performance Score</h4>
							<p>Last Checked : May 14, 2023 at 08:24am</p>
						</SummaryBoxBody>
						<SummaryFooterBody>
							<Notification
								id="notice"
								icon="InfoAlt"
								size="fluid"
								variation="info"
								message={
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
SummaryBox.argTypes = {}

// Configure default options.
export default {
	title: "SUI/Components/Advanced/Summary Box",
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
