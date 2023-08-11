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
const Footer = ({ example }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<SuiFooter
					renderBlocks={(content: React.ReactNode) => [
						<Fragment key={0}>
							Check our{" "}
							<a href="#" target="_blank" rel="nofollow">
								All in One WordPress Toolkit
							</a>
						</Fragment>,
						content,
						<Fragment key={2}>
							To get the most out of the plugin,{" "}
							<a href="#" target="_blank" rel="nofollow">
								see the Help section
							</a>
						</Fragment>,
					]}
					socialLinks={[
						{
							url: "#",
							type: "twitter",
						},
						{
							url: "#",
							type: "instagram",
						},
						{
							url: "#",
							type: "facebook",
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
Footer.args = {}

// Set controls for story arguments
Footer.argTypes = {}

// Publish required stories
export { Footer }
