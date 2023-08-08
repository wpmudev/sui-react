import React from "react"

import { Facebook, Twitter, Instagram } from "@wpmudev/sui-icons"

// Import required element(s)
import Logo from "./elements/logo.svg"
import {
	FooterLinkType,
	FooterProps,
	FooterSocialLinkType,
} from "./footer.types"

const socialIcons = {
	facebook: Facebook,
	instagram: Instagram,
	twitter: Twitter,
}

// Build footer component
const Footer: React.FC<FooterProps> = ({
	links,
	socialLinks,
	renderBlocks,
}) => {
	let blocks = []

	if (renderBlocks) {
		const builtWithText = <span>Made with ︎ by WPMU DEV</span>
		blocks = renderBlocks(builtWithText)
	}

	return (
		<div className="sui-footer">
			{blocks.length > 0 && (
				<div className="sui-footer__group">
					{(blocks || [])?.map((block, index) => (
						<div className="sui-footer__block" key={index}>
							{block}
						</div>
					))}
				</div>
			)}
			<div className="sui-footer__group">
				<div className="sui-footer__block">
					<a href="#" target="_blank" rel="nofollow">
						<img src={Logo} alt="WPMU DEV" />
					</a>
				</div>
				<div className="sui-footer__block">
					<ul className="sui-footer__links">
						{(links ?? [])?.map((list: FooterLinkType, index) => (
							<li key={index} className="sui-footer__links-item">
								<a href={list.url}>{list.title}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="sui-footer__block">
					{socialLinks?.length > 0 && (
						<ul className="sui-footer__links sui-footer__links--social">
							{socialLinks?.map((socialLink: FooterSocialLinkType, index) => {
								const SocialIcon = socialIcons[socialLink?.type]
								return (
									<li key={index} className="sui-footer__links-item">
										<a
											href={socialLink.url}
											target="_blank"
											rel="noopener noreferrer"
										>
											<SocialIcon size="sm" />
										</a>
									</li>
								)
							})}
						</ul>
					)}
				</div>
			</div>
		</div>
	)
}

// Publish component(s)
export { Footer }
