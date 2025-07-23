/**
 * External Dependencies
 */
import React from "react"
import { linkTo } from "@storybook/addon-links"

/**
 * Internal Dependencies
 */
import Button from "../button/button"
import { isEmpty } from "../../utils"
import "./banner.scss"

interface BannerProps {
	title: string
	subtitle: React.ReactNode
	action: {
		link: string
		label: string
	}
	image: {
		src: string
		src2x: string
		width?: string
		height?: string
		alt?: string
	}
}

const Banner: React.FunctionComponent<BannerProps> = ({
	title,
	subtitle,
	action,
	image,
}) => {
	const cta = Object.assign(
		{
			link: "",
			label: "",
		},
		action,
	)

	const fig = Object.assign(
		{
			alt: "Shared UI Developers Showcase",
			src: "",
			src2x: "",
			width: "",
			height: "",
		},
		image,
	)

	return (
		<div className="csb-banner">
			<div className="csb-banner__content">
				{!isEmpty(title) && <h1 className="csb-banner__title">{title}</h1>}

				<p className="csb-banner__subtitle">{subtitle}</p>

				{!isEmpty(cta.link) && !isEmpty(cta.label) && (
					<Button
						label={cta.label}
						style="primary"
						className="csb-banner__cta"
						onClick={linkTo(cta.link)}
						type="button"
					/>
				)}
			</div>

			{!isEmpty(fig.src) && (
				<div tabIndex={-1} className="csb-banner__image" aria-hidden="true">
					<img
						alt={fig.alt}
						src={fig.src}
						{...(!isEmpty(fig.src2x) && {
							srcSet: `${fig.src} 1x, ${fig.src2x} 2x`,
						})}
						{...(!isEmpty(fig.width) && { width: `${fig.width}` })}
						{...(!isEmpty(fig.height) && { height: `${fig.height}` })}
					/>
				</div>
			)}
		</div>
	)
}

export default Banner
