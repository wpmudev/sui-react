import React from "react"

// Import required component(s)
import { PageHeader as SuiPageHeader, PageHeaderProps } from "../src"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page
import docs from "./page-header.mdx"

export default {
	title: "SUI/Components/Modules/Page Header",
	component: SuiPageHeader,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const PageHeader = ({ ...props }: PageHeaderProps) => {
	let backgroundColor = "#fff"

	// @ts-ignore
	if ("secondary" === props?.theme) {
		backgroundColor = "#0059FF"
	}

	const box = {
		margin: "0 0 20px",
		padding: "30px",
		border: "1px solid #E6E6E6",
		borderRadius: "4px",
		background: backgroundColor,
	}

	const actions = [
		<Button key={0} type="primary" colorScheme="blue">
			Primary Action
		</Button>,
		<Button key={1} type="secondary" colorScheme="black">
			Secondary Action
		</Button>,
	]

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={box}>
					<SuiPageHeader {...props} actions={actions} />
				</div>
			</div>
		</div>
	)
}

PageHeader.args = {
	title: "Page Title",
}

PageHeader.argTypes = {}
