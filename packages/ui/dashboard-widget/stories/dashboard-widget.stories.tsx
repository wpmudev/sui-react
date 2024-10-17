import React, { Fragment, useState } from "react"

// Import required component(s)
import { DashboardWidget as SuiDashboardWidget } from "../src"
import { Button } from "@wpmudev/sui-button"
import { Notification } from "@wpmudev/sui-notification"
import {
	Accordion,
	AccordionItem,
	AccordionItemBody,
} from "@wpmudev/sui-accordion"

// Import documentation main page
import docs from "./dashboard-widget.mdx"
import { IconsName } from "@wpmudev/sui-icons"

export default {
	title: "SUI/Components/Modules/Dashboard Widget",
	component: SuiDashboardWidget,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const DashboardWidget = ({ ...props }) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(true)

	const actions = [
		<Button
			key={0}
			type="secondary"
			colorScheme="black"
			isSmall={true}
			// onClick={onApplyButton}
		>
			Primary
		</Button>,
		"Automatic scans are running weekly",
	]

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<SuiDashboardWidget
					{...props}
					actions={actions}
					isExpanded={isExpanded}
					onToggle={setIsExpanded}
				>
					<Accordion noBorderRadius={true} noSideBorders={true}>
						<AccordionItem title="Tab Title 1">
							<AccordionItemBody>BODY CONTENT</AccordionItemBody>
						</AccordionItem>
						<AccordionItem title="Tab Title 1">
							<AccordionItemBody>BODY CONTENT</AccordionItemBody>
						</AccordionItem>
					</Accordion>
				</SuiDashboardWidget>
			</div>
		</div>
	)
}

DashboardWidget.args = {
	title: "Malware Scanning",
	description: (
		<Fragment>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry&apos;s standard dummy text
				ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
			</p>
			<Notification
				id="notice"
				icon="InfoAlt"
				variation="info"
				size="fluid"
				message="11 events logged in the past 7 days."
			/>
		</Fragment>
	),
	tag: "PRO",
	tagProps: { isSmall: "sm" },
	canCollapse: false,
	isDisabled: false,
	isFullWidth: false,
	icon: "CheckAlt",
	statusIcon: "InfoAlt",
	statusProps: {
		color: "informative",
	},
}

DashboardWidget.argTypes = {
	title: {
		name: "Title",
		control: {
			type: "text",
		},
	},
	description: {
		name: "Description",
	},
	icon: {
		name: "Icon",
		options: IconsName,
		control: {
			type: "select",
		},
	},
	tag: {
		name: "Tag",
		control: {
			type: "text",
		},
	},
	tagProps: {
		name: "Tag Props",
		control: {
			type: "object",
		},
	},
	statusIcon: {
		name: "Status",
		options: IconsName,
		control: {
			type: "select",
		},
	},
	statusProps: {
		name: "Status Props",
		control: {
			type: "object",
		},
	},
	canCollapse: {
		name: "Collapse",
		control: {
			type: "boolean",
		},
	},
	isDisabled: {
		name: "Disabled",
		control: {
			type: "boolean",
		},
	},
	isFullWidth: {
		name: "Full Width",
		control: {
			type: "boolean",
		},
	},
}
