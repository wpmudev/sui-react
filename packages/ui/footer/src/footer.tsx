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
	const footerId = id || `sui-footer-${generatedId}`
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
					id={`${footerId}-credits`}
					className={`sui-footer__group sui-footer__group--credits${
						blocks.length === 1 ? " sui-footer__group--center" : ""
					}`}
				>
					{(blocks || [])?.map((block, index) => (
						<div
							id={`${footerId}-block-${index}`}
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
					id={`${footerId}-links-group`}
					className="sui-footer__group sui-footer__group--links"
				>
					<div id={`${footerId}-logo-block`} className="sui-footer__block">
						<a
							id={`${footerId}-logo-link`}
							href={logoHref || "https://wpmudev.com"}
							target="_blank"
							rel="noreferrer nofollow"
							aria-label="wpmudev-logo"
						>
							{logoImageLink ? (
								<img
									id={`${footerId}-logo-img`}
									src={logoImageLink}
									className="sui-footer__block--logo"
									alt="WPMU DEV"
								/>
							) : (
								<Logo id={`${footerId}-logo`} />
							)}
						</a>
					</div>
					{(links ?? []).length > 0 && (
						<div
							id={`${footerId}-pages-block`}
							className="sui-footer__block sui-footer__block--pages"
							data-testid="footer-links"
						>
							<ul id={`${footerId}-links`} className="sui-footer__links">
								{(links ?? [])?.map((list: FooterLinkType, index) => (
									<li
										id={`${footerId}-link-item-${index}`}
										key={index}
										className="sui-footer__links--item"
									>
										<a
											id={`${footerId}-link-${index}`}
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
					<div id={`${footerId}-social-block`} className="sui-footer__block">
						{(socialLinks ?? [])?.length > 0 && (
							<ul
								id={`${footerId}-social-links`}
								className="sui-footer__links sui-footer__links--social"
								data-testid="footer-social-links"
							>
								{(socialLinks ?? [])?.map(
									(socialLink: FooterSocialLinkType, index) => {
										const SocialIcon = socialIcons[socialLink?.type]
										return (
											<li
												id={`${footerId}-social-item-${index}`}
												key={index}
												className="sui-footer__links--item"
											>
												<a
													id={`${footerId}-social-link-${index}`}
													href={socialLink.url}
													target="_blank"
													rel="noopener noreferrer"
												>
													<SocialIcon
														id={`${footerId}-social-icon-${index}`}
														size="sm"
													/>
													{socialLink?.type && (
														<span
															id={`${footerId}-social-label-${index}`}
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
