import React, { Fragment } from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"

import {
	SummaryBox,
	SummaryBoxBody,
	SummaryBoxItem,
	SummaryFooterBody,
} from "../src"

describe("@wpmudev/sui-summary-box", () => {
	const props = {
		title: "__TITLE__",
		primaryActions: "__PRIMARY_ACTIONS__",
		secondaryActions: "__SECONDARY_ACTIONS__",
		footer: "__FOOTER__",
		boxContent: "__BOX_CONTENT__",
	}

	it("render correctly", async () => {
		// Render the SummaryBox component with the specified props
		render(
			<SummaryBox
				icon="performance"
				title={props.title}
				hideMobileIcon={true}
				primaryActions={[<Fragment key={0}>{props.primaryActions}</Fragment>]}
				secondaryActions={[
					<Fragment key={0}>{props.secondaryActions}</Fragment>,
				]}
			>
				{/* SummaryBoxBody component with summary items */}
				<SummaryBoxBody
					summaryItems={[
						<SummaryBoxItem
							key={0}
							title="Browser Caching"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
							actionIcon="InfoAlt"
							actionIconColor="informative"
						/>,
						<SummaryBoxItem
							key={1}
							title="Gzip compression"
							titleUrl={"google.com"}
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
							tagTitle="10.33%"
							tagColor="green"
						/>,
					]}
				>
					{/* Content to be displayed in the SummaryBox */}
					{props.boxContent}
				</SummaryBoxBody>
				{/* Footer content */}
				<SummaryFooterBody>{props.footer}</SummaryFooterBody>
			</SummaryBox>,
		)

		// Validate that the SummaryBox and its content are visible
		expect(screen.getByTestId("summary-box")).toBeVisible()
		expect(screen.getByText(props.title)).toBeVisible()
		expect(screen.getByText(props.footer)).toBeVisible()
		expect(screen.getByText(props.primaryActions)).toBeVisible()
		expect(screen.getByText(props.secondaryActions)).toBeVisible()

		const boxItems = await screen.findAllByTestId("summary-box-item")
		expect(boxItems).toHaveLength(2)
	})
})
