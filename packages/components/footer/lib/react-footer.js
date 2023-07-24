import React from "react"

// Import required component(s)
import { Menu } from "@wpmudev/sui-menu"

// Import required element(s)
import Logo from "./elements/logo.svg"

// Build footer component
const Footer = () => {
	return (
		<div className="sui-footer">
			<div className="sui-footer__group">
				<div className="sui-footer__block">
					<p>
						Check our{" "}
						<a
							href="@wpmudev/footer/lib/react-footer#"
							target="_blank"
							rel="nofollow"
						>
							All in One WordPress Toolkit
						</a>
					</p>
				</div>
				<div className="sui-footer__block">
					<p>
						To get the most out of the plugin,{" "}
						<a
							href="@wpmudev/footer/lib/react-footer#"
							target="_blank"
							rel="nofollow"
						>
							see the Help section
						</a>
					</p>
				</div>
			</div>
			<div className="sui-footer__group">
				<div className="sui-footer__block">
					<a
						href="@wpmudev/footer/lib/react-footer"
						target="_blank"
						rel="nofollow"
					>
						<img src={Logo} alt="WPMU DEV" />
					</a>
				</div>
				<div className="sui-footer__block">
					<Menu>
						<span label="Free Plugins" href="#" />
						<span label="Membership" href="#" />
						<span label="Roadmap" href="#" />
						<span label="Support" href="#" />
						<span label="Community" href="#" />
						<span label="The Hub" href="#" />
						<span label="Terms of Service" href="#" />
						<span label="Privacy Policy" href="#" />
					</Menu>
				</div>
			</div>
		</div>
	)
}

// Publish component(s)
export { Footer }
