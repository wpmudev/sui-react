import React from "react"

// Import required component
import { Menu as SuiMenu } from "../src"
import { Box, BoxGroup } from "@wpmudev/react-box"

// Import documentation main page
import docs from "./ReactMenu.mdx"

// Configure default options
export default {
	title: "SUI/Components/Simple Elements/Menu",
	component: SuiMenu,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build menu story
const Menu = ({ example }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<Box>
					<BoxGroup>
						<SuiMenu>
							<span
								label="Free Plugins"
								{...("link" === example && { href: "#" })}
							/>
							<span
								label="Membership"
								{...("link" === example && { href: "#" })}
							/>
							<span
								label="Roadmap"
								{...("link" === example && { href: "#" })}
							/>
							<span
								label="Support"
								{...("link" === example && { href: "#" })}
							/>
							<span
								label="Community"
								{...("link" === example && { href: "#" })}
							/>
							<span
								label="The Hub"
								{...("link" === example && { href: "#" })}
							/>
							<span
								label="Terms of Service"
								{...("link" === example && { href: "#" })}
							/>
							<span
								label="Privacy Policy"
								{...("link" === example && { href: "#" })}
							/>
						</SuiMenu>
					</BoxGroup>
				</Box>
			</div>
		</div>
	)
}

// Set story arguments
Menu.args = {
	example: "default",
}

// Set controls for story arguments
Menu.argTypes = {
	example: {
		name: "Example",
		control: {
			type: "select",
			options: {
				"Example: Default": "default",
				"Example: Link": "link",
			},
		},
	},
}

// Publish required stories
export { Menu }
