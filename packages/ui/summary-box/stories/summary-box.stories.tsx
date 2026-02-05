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
	SummaryBoxContent,
	SummaryBoxRow,
} from "../src"
import { IconsName } from "@wpmudev/sui-icons"

const SummaryBoxStory = (props: Record<string, any>) => {
	const [mode, setMode] = useState<string>("desktop")
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div>
					<SuiSummaryBox
						{...props}
						primaryActions={
							<>
								<SegmentedControl
									key={0}
									name="type"
									defaultValue={mode}
									onChange={(type: string) => setMode(type ?? "")}
								>
									<SegmentedControlButton value="visual" icon="Mobile" />
									<SegmentedControlButton value="code" icon="Desktop" />
								</SegmentedControl>
								<div key={0}>
									<Button
										type="secondary"
										icon="Trash"
										colorScheme="black"
										isSmall={true}
										isResponsive={true}
									>
										Clear Cache
									</Button>
								</div>
							</>
						}
						secondaryActions={
							<Button
								key={2}
								type="primary"
								icon="Add"
								colorScheme="blue"
								isSmall={true}
								isFullWidth={true}
							>
								New test
							</Button>
						}
					>
						<SummaryBoxBody
							summaryItems={[
								<SummaryBoxItem
									key={0}
									title="Browser Caching"
									description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									actionIcon="InfoAlt"
								/>,
								<SummaryBoxItem
									key={1}
									title="Gzip compression"
									titleUrl={"google.com"}
									description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									tagTitle="10.33%"
									tagColor="green"
								/>,
								<SummaryBoxItem
									key={2}
									title="Assets Optimization"
									description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
									tagTitle="10.33%"
									actionIcon="CheckAlt"
									actionIconColor="success"
								/>,
							]}
						>
							{props.children}
						</SummaryBoxBody>
						<SummaryFooterBody>
							<Notification
								id="notice"
								icon="InfoAlt"
								size="fluid"
								variation="info"
								isFluid={true}
								message={
									<Fragment>
										Your site performs better than 90 % sites out there. To
										boost the performance further, check the{" "}
										<a
											href="https://wpmudev.com"
											target="_blank"
											rel="noreferrer"
										>
											Pending Audits
										</a>
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

// Build "SummaryBox" story.
const SummaryBox = (props: Record<string, any>) => {
	const { layout } = props

	const renderLayout = () => {
		if ("basic" === layout) {
			return (
				<SummaryBoxContent span="full">
					<Score bar={95} isSmall={false} value={10} state="success" />
					<h4>Desktop Site Performance Score</h4>
					<p>Last Checked : May 14, 2023 at 08:24am</p>
				</SummaryBoxContent>
			)
		}

		if ("stack" === layout) {
			return (
				<SummaryBoxRow>
					<SummaryBoxContent span="full">
						<Score bar={95} isSmall={false} value={10} state="success" />
						<h4>Desktop Site Performance Score</h4>
						<p>Last Checked : May 14, 2023 at 08:24am</p>
					</SummaryBoxContent>
					<SummaryBoxContent span="full" padding="md">
						Last refresh: May 14, 2023 at 08:24 am
					</SummaryBoxContent>
				</SummaryBoxRow>
			)
		}

		if ("grid" === layout) {
			return (
				<SummaryBoxRow>
					<SummaryBoxContent>
						<h3>Custom Heading</h3>
						<p>Custom Sub Heading</p>
					</SummaryBoxContent>
					<SummaryBoxContent>
						<h3>Custom Heading</h3>
						<p>Custom Sub Heading</p>
					</SummaryBoxContent>
					<SummaryBoxContent span="full" padding="md">
						Last refresh: May 14, 2023 at 08:24 am
					</SummaryBoxContent>
				</SummaryBoxRow>
			)
		}
	}

	return <SummaryBoxStory {...props}>{renderLayout()}</SummaryBoxStory>
}

// Set story arguments.
SummaryBox.args = {
	icon: "Performance",
	title: "Performance Summary",
	hideMobileIcon: true,
	layout: "basic",
}

// Set controls for story arguments.
SummaryBox.argTypes = {
	icon: {
		name: "Icon",
		options: IconsName,
		control: {
			type: "select",
		},
	},
	title: {
		name: "Title",
		control: "text",
	},
	hideMobileIcon: {
		name: "Hide icon on mobile",
		control: "boolean",
	},
	layout: {
		name: "Layout",
		options: ["basic", "stack", "grid"],
		control: {
			type: "select",
		},
	},
}

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
