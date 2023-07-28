import React, { Fragment } from "react"

// Import required component(s)
import { AlertBanner as SuiAlertBanner } from "../src"
import { Box, BoxGroup } from "@wpmudev/sui-box"

// Import documentation main page
import docs from "./ReactAlertBanner.mdx"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Alert Banner",
	component: SuiAlertBanner,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const AlertBanner = ({ ...props }) => {
	return (
		<Fragment>
			<div className="sui-layout">
				<SuiAlertBanner state="success" isVisible={true} {...props}>
					<strong>Important!</strong> This is example content for information.{" "}
					<a href="@wpmudev/alertbanner/stories/ReactAlertBanner.stories#">
						Add link
					</a>{" "}
					if necessary.
				</SuiAlertBanner>
			</div>
			<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
				<div className="sui-layout__content">
					<Box>
						<BoxGroup isInline={false}>
							<p>
								Cras mattis consectetur purus sit amet fermentum. Sed posuere
								consectetur est at lobortis. Duis mollis, est non commodo
								luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
								elit. Nullam quis risus eget urna mollis ornare vel eu leo. Cras
								mattis consectetur purus sit amet fermentum. Vestibulum id
								ligula porta felis euismod semper.
							</p>
						</BoxGroup>
					</Box>
				</div>
			</div>
		</Fragment>
	)
}

AlertBanner.argTypes = {
	state: {
		name: "Status",
		control: {
			type: "select",
			options: {
				Default: "info",
				Success: "success",
				Warning: "warning",
				Error: "error",
			},
		},
	},
}
