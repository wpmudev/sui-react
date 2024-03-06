import React, { useState } from "react"
import { Code, Message, Section, Snippet } from "../index"

const CommonPropsNotice = () => {
	return (
		<Section
			title="Need further customization?"
			contained={true}
			style={{ paddingTop: 20, paddingBottom: 30 }}
		>
			<Message color="green" className="common-props-notice">
				All components share two common props: <Code small={true}>_style</Code>{" "}
				for inline styles, and <Code small={true}>_htmlProps</Code> for HTML
				attributes. These props are intended to enhance flexibility and
				customization across components.{" "}
				<a href="/?path=/docs/sui-common-props--docs" target="_blank">
					Learn More
				</a>
			</Message>
		</Section>
	)
}

export { CommonPropsNotice }
