import React, { Fragment } from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-dev-utils"

import {
	SummaryBox,
	SummaryBoxBody,
	SummaryBoxItem,
	SummaryFooterBody,
} from "../src"

describe("@wpmudev/sui-summary-box", () => {
	const args = {
		title: "__TITLE__",
		primaryActions: "__PRIMARY_ACTIONS__",
		secondaryActions: "__SECONDARY_ACTIONS__",
		footer: "__FOOTER__",
		boxContent: "__BOX_CONTENT__",
	}

	const Component = () => (
		<SummaryBox
			icon="Performance"
			title={args.title}
			hideMobileIcon={true}
			primaryActions={[<Fragment key={0}>{args.primaryActions}</Fragment>]}
			secondaryActions={[<Fragment key={0}>{args.secondaryActions}</Fragment>]}
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
				{args.boxContent}
			</SummaryBoxBody>
			{/* Footer content */}
			<SummaryFooterBody>{args.footer}</SummaryFooterBody>
		</SummaryBox>
	)

	it("render correctly", async () => {
		// Render the SummaryBox component with the specified props
		render(<Component />)

		// Validate that the SummaryBox and its content are visible
		expect(screen.getByTestId("summary-box")).toBeVisible()
		expect(screen.getByText(args.title)).toBeVisible()
		expect(screen.getByText(args.footer)).toBeVisible()
		expect(screen.getByText(args.primaryActions)).toBeVisible()
		expect(screen.getByText(args.secondaryActions)).toBeVisible()

		const boxItems = await screen.findAllByTestId("summary-box-item")
		expect(boxItems).toHaveLength(2)
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component />)
	})
})
