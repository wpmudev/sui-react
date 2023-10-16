import React, { Fragment } from "react"

// Import required component
import { Footer as SuiFooter } from "../src"

import docs from "./Footer.mdx"

// Configure default options
export default {
	title: "SUI/Components/Collections/Footer",
	component: SuiFooter,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build footer story
const Footer = ({ example }: { example: string }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<SuiFooter
					renderBlocks={
						"free" === example
							? () => [
									<Fragment key={0}>
										Check our{" "}
										<a
											href="https://wpmudev.com"
											target="_blank"
											rel="noreferrer nofollow"
										>
											All in One WordPress Toolkit
										</a>
									</Fragment>,
									<Fragment key={2}>
										To get the most out of the plugin,{" "}
										<a
											href="https://wpmudev.com"
											target="_blank"
											rel="noreferrer nofollow"
										>
											see the Help section
										</a>
									</Fragment>,
							  ]
							: (content: React.ReactNode) => [content]
					}
					socialLinks={[
						{
							url: "#",
							type: "facebook",
						},
						{
							url: "#",
							type: "instagram",
						},
						{
							url: "#",
							type: "twitter",
						},
					]}
					links={[
						{
							url: "#",
							title: "Free Plugins",
						},
						{
							url: "#",
							title: "Membership",
						},
						{
							url: "#",
							title: "Roadmap",
						},
						{
							url: "#",
							title: "Support",
						},
						{
							url: "#",
							title: "Community",
						},
						{
							url: "#",
							title: "The Hub",
						},
						{
							url: "#",
							title: "Terms of Service",
						},
						{
							url: "#",
							title: "Privacy Policy",
						},
					]}
				/>
			</div>
		</div>
	)
}

// Set story arguments
Footer.args = {
	example: "free",
}

// Set controls for story arguments
Footer.argTypes = {
	example: {
		name: "Example",
		options: ["free", "pro"],
		control: {
			type: "select",
			labels: {
				free: "Free",
				pro: "Pro",
			},
		},
	},
}

// Publish required stories
export { Footer }
