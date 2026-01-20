import React, { useId } from "react"

import { Facebook, Twitter, Instagram } from "@wpmudev/sui-icons"
import { generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"

// Import required element(s)
import Logo from "./elements/Logo"

import {
	FooterLinkType,
	FooterProps,
	FooterSocialLinkType,
} from "./footer.types"
import { useStyles } from "@wpmudev/sui-hooks"

const socialIcons = {
	facebook: Facebook,
	instagram: Instagram,
	twitter: Twitter,
}

// Build footer component
const Footer: React.FC<FooterProps> = ({
	id,
	links,
	logoImageLink,
	logoHref,
	socialLinks,
	renderBlocks,
	removeBGColor = false,
	className,
	customFooter = false,
	_htmlProps,
	_style,
}) => {
	const generatedId = useId()
	const footerId = id || `sui_footer_${generatedId}`
	let blocks: React.ReactNode[] = []

	if (renderBlocks) {
		const builtWithText = <span>Made with ♡ by WPMU DEV</span>
		blocks = renderBlocks(builtWithText)
	}

	const { suiInlineClassname } = useStyles(_style, className)

	// footer classname
	const footerCN = generateCN(
		"sui-footer",
		{ transparent: removeBGColor },
		suiInlineClassname,
	)

	return (
		<div
			id={footerId}
			className={footerCN}
			data-testid="footer"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{blocks.length > 0 && (
				<div
					id={`${footerId}_credits`}
					className={`sui-footer__group sui-footer__group--credits${
						blocks.length === 1 ? " sui-footer__group--center" : ""
					}`}
				>
					{(blocks || [])?.map((block, index) => (
						<div
							id={`${footerId}_block_${index}`}
							className="sui-footer__block"
							key={index}
						>
							{block}
						</div>
					))}
				</div>
			)}
			{!customFooter && (
				<div
					id={`${footerId}_links_group`}
					className="sui-footer__group sui-footer__group--links"
				>
					<div id={`${footerId}_logo_block`} className="sui-footer__block">
						<a
							id={`${footerId}_logo_link`}
							href={logoHref || "https://wpmudev.com"}
							target="_blank"
							rel="noreferrer nofollow"
							aria-label="wpmudev-logo"
						>
							{logoImageLink ? (
								<img
									id={`${footerId}_logo_img`}
									src={logoImageLink}
									className="sui-footer__block--logo"
									alt="WPMU DEV"
								/>
							) : (
								<Logo id={`${footerId}_logo`} />
							)}
						</a>
					</div>
					{(links ?? []).length > 0 && (
						<div
							id={`${footerId}_pages_block`}
							className="sui-footer__block sui-footer__block--pages"
							data-testid="footer-links"
						>
							<ul id={`${footerId}_links`} className="sui-footer__links">
								{(links ?? [])?.map((list: FooterLinkType, index) => (
									<li
										id={`${footerId}_link_item_${index}`}
										key={index}
										className="sui-footer__links--item"
									>
										<a
											id={`${footerId}_link_${index}`}
											href={list.url}
											target={list?.target ?? "_blank"}
										>
											{list.title}
										</a>
									</li>
								))}
							</ul>
						</div>
					)}
					<div id={`${footerId}_social_block`} className="sui-footer__block">
						{(socialLinks ?? [])?.length > 0 && (
							<ul
								id={`${footerId}_social_links`}
								className="sui-footer__links sui-footer__links--social"
								data-testid="footer-social-links"
							>
								{(socialLinks ?? [])?.map(
									(socialLink: FooterSocialLinkType, index) => {
										const SocialIcon = socialIcons[socialLink?.type]
										return (
											<li
												id={`${footerId}_social_item_${index}`}
												key={index}
												className="sui-footer__links--item"
											>
												<a
													id={`${footerId}_social_link_${index}`}
													href={socialLink.url}
													target="_blank"
													rel="noopener noreferrer"
												>
													<SocialIcon
														id={`${footerId}_social_icon_${index}`}
														size="sm"
													/>
													{socialLink?.type && (
														<span
															id={`${footerId}_social_label_${index}`}
															className="sui-screen-reader-only"
														>
															{socialLink?.type}
														</span>
													)}
												</a>
											</li>
										)
									},
								)}
							</ul>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

// Publish component(s)
export { Footer }
