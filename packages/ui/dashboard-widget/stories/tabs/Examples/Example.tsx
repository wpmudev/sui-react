import React, { useState } from "react"
import { DashboardWidget } from "../../../src"
import { DashboardWidgetProps } from "../../../src/dashboard-widget.types"
import {
	Accordion,
	AccordionItem,
	AccordionItemBody,
} from "@wpmudev/sui-accordion"
import { Button } from "@wpmudev/sui-button"
import { Notification } from "@wpmudev/sui-notification"

const actions = [
	<Button
		key={0}
		type="secondary"
		color="black"
		isSmall={true}
		// onClick={onApplyButton}
	>
		Primary
	</Button>,
	"Automatic scans are running weekly",
]

export const DashboardWidgetExample: React.FunctionComponent<
	DashboardWidgetProps
> = (props) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(true)
	return (
		<div style={{ backgroundColor: "#f0f0f1", padding: 40 }}>
			<DashboardWidget
				{...props}
				title="Malware Scanning"
				isExpanded={isExpanded}
				onToggle={setIsExpanded}
				description={
					<>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard dummy
							text ever since the 1500s, when an unknown printer took a galley
							of type and scrambled it to make a type specimen book.
						</p>
						<Notification
							id="notice"
							icon="InfoAlt"
							variation="info"
							size="fluid"
							message="11 events logged in the past 7 days."
						/>
					</>
				}
				tag="Tag"
				icon="CheckAlt"
				statusIcon="Bell"
				statusProps={{
					color: "success",
				}}
				actions={actions}
			>
				<Accordion noBorderRadius={true} noSideBorders={true}>
					<AccordionItem title="Tab Title 1">
						<AccordionItemBody>BODY CONTENT</AccordionItemBody>
					</AccordionItem>
					<AccordionItem title="Tab Title 1">
						<AccordionItemBody>BODY CONTENT</AccordionItemBody>
					</AccordionItem>
				</Accordion>
			</DashboardWidget>
		</div>
	)
}
