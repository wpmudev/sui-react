import React from "react"

// Import required component.
import {
	Tabs as SuiTab,
	TabNav,
	TabNavItem,
	TabPanel,
	TabPanelItem,
} from "../src"

// Import documentation main page.
import docs from "./Tab.mdx"
import { InfoAlt, Bell, Calendar } from "@wpmudev/sui-icons"
import { Tag } from "@wpmudev/sui-tag"

// Build "Tabs" story.
const Tabs = ({ color, state }: any) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		// background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiTab state={state}>
						<TabNav>
							<TabNavItem icon={<Calendar size="sm" />}>
								Image Compression
							</TabNavItem>
							<TabNavItem stateIcon="InfoAlt" stateIconColor="critical">
								Tools & Settings
							</TabNavItem>
							<TabNavItem
								icon={<Bell size="sm" />}
								stateIcon="CheckAlt"
								stateIconColor="success"
							>
								Smush Pro
							</TabNavItem>
							<TabNavItem>
								CDN <Tag isSmall={true}>Pro</Tag>
							</TabNavItem>
							<TabNavItem>Local Webp</TabNavItem>
						</TabNav>
						<TabPanel>
							<TabPanelItem>
								<h3>Image Compression</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</TabPanelItem>
							<TabPanelItem>
								<h3>Tools & Settings</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</p>
							</TabPanelItem>
							<TabPanelItem>
								<h3>Smush Pro</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a lishing software like Aldus PageMaker including
									versions of Lorem Ipsum.
								</p>
							</TabPanelItem>
							<TabPanelItem>
								<h3>CDN</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</TabPanelItem>
							<TabPanelItem>
								<h3>Local Webp</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever sinc
								</p>
							</TabPanelItem>
						</TabPanel>
					</SuiTab>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Tabs.args = {
	state: "",
}

// Set controls for story arguments.
Tabs.argTypes = {
	state: {
		options: ["neutral", "informative", "success", "warning", "critical"],
		control: {
			type: "select",
		},
	},
}

// Configure default options.
export default {
	title: "SUI/Components/Advanced/Tabs",
	component: Tabs,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Publish required stories.
export { Tabs }
