/**
 * External Dependencies
 */
import React from "react"
import { linkTo } from "@storybook/addon-links"
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames"

/**
 * Internal Dependencies
 */
import { Row, Col } from "../grid/grid"
import Code from "../code/code"
import Button from "../button/button"
import { isEmpty } from "../../utils"
import "./card.scss"

/*********************************************
 *
 * Simple Card
 *
 *********************************************/

interface CardSimple {
	title: string
	description: string
	image: {
		src: string
		src2x: string
		width?: string
		height?: string
		alt?: string
	}
	action: string
	theme: "dark" | "light"
}

const Simple: React.FunctionComponent<CardSimple> = ({
	title,
	description,
	image,
	action,
	theme,
	...props
}) => {
	const cardClass = classnames({
		"csb-card csb-card--center": true,
		[`csb-card--${theme}`]: !!theme,
	})

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
		<div className={cardClass} {...props}>
			{!isEmpty(fig.src) && (
				<div className="csb-card__image" aria-hidden="true">
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

			<div className="csb-card__info">
				{!isEmpty(title) && <h3 className="csb-card__title">{title}</h3>}
				{!isEmpty(description) && (
					<p className="csb-card__description">{description}</p>
				)}
				{!isEmpty(action) && (
					<Button
						type="button"
						label="Learn More"
						style="secondary"
						{...("light" === theme && { color: "black" })}
						{...("dark" === theme && { color: "white" })}
						className="csb-banner__cta"
						onClick={linkTo(action)}
					/>
				)}
			</div>
		</div>
	)
}

/*********************************************
 *
 * Color Card
 *
 *********************************************/
interface ColorProps {
	theme: "light" | "dark"
	overWhite?: boolean
	content?: {
		palette?: string
		shade?: string
		prefix?: string
		hex?: string
		variables?: boolean
	}
}

const Color: React.FunctionComponent<
	ColorProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ content, theme, overWhite, ...props }) => {
	const cardClass = classnames({
		"csb-card csb-card--color": true,
		[`csb-card--${theme}`]: !!theme,
	})

	const objContent = Object.assign(
		{
			palette: "",
			shade: "",
			prefix: "",
			hex: "#000000",
			variables: true,
		},
		content,
	)

	// Check if `objContent` variables are empty or null.
	const hasPalette = !isEmpty(objContent.palette)
	const hasShade = !isEmpty(objContent.shade)
	const hasPrefix = !isEmpty(objContent.prefix)
	const hasHex = !isEmpty(objContent.hex)
	const hasVariables = objContent.variables

	return (
		<div
			className={cardClass}
			{...(overWhite && { style: { background: "#F8F8F8" } })}
			{...props}
		>
			<div
				className="csb-card__preview"
				style={{
					background: objContent.hex,
				}}
			>
				{(hasShade || hasPrefix) && (
					<h3>
						{objContent.prefix}
						{hasShade && hasPrefix ? " / " : ""}
						{objContent.shade}
					</h3>
				)}
			</div>
			<div className="csb-card__info">
				{hasPalette && hasShade && hasVariables && (
					<Row>
						<Col size="6">
							<h4>SCSS Variable</h4>
							<Code theme="ghost" fullWidth={true}>
								$color-{objContent.palette}-{objContent.shade}
							</Code>
						</Col>
					</Row>
				)}

				{hasHex && (
					<Row>
						<Col size="3">
							<h4>HEX</h4>
							<Code theme="ghost" fullWidth={true}>
								{objContent.hex}
							</Code>
						</Col>
						<Col size="3">
							<h4>HSLA</h4>
							<Code theme="ghost" fullWidth={true}>
								{getHsl(objContent.hex)}, 1
							</Code>
						</Col>
					</Row>
				)}
			</div>
		</div>
	)
}

// Convert HEX to RGB
const getRgb = (value: string) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value)
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: { r: 0, g: 0, b: 0 }
}

// Convert RGB to HSL
const getHsl = (value: string) => {
	const limitDecimals = (number: number) => {
		return Math.round(number * 100) / 100
	}

	const roundValue = (number: number) => {
		return Math.floor(number)
	}

	// Extract RGB values from HEX.
	let red = getRgb(value).r
	let green = getRgb(value).g
	let blue = getRgb(value).b

	// Convert the RGB values to the range 0-1.
	red /= 255
	green /= 255
	blue /= 255

	red = limitDecimals(red)
	green = limitDecimals(green)
	blue = limitDecimals(blue)

	// Find the minimum and maximum values of R, G and B.
	const min = Math.min(red, green, blue)
	const max = Math.max(red, green, blue)

	// Calculate the luminance value.
	const lum = limitDecimals(((min + max) / 2) * 100)

	// Calculate the saturation.
	let hue, sat

	if (min === max) {
		// There is no saturation.
		hue = 0
		sat = 0
	} else {
		// There is saturation in the color.
		if (50 <= limitDecimals(lum)) {
			sat = limitDecimals(((max - min) / (2.0 - max - min)) * 100)
		} else {
			sat = limitDecimals(((max - min) / (max + min)) * 100)
		}

		switch (max) {
			case red:
				hue = (green - blue) / (max - min)
				break

			case green:
				hue = 2.0 + (blue - red) / (max - min)
				break

			case blue:
				hue = 4.0 + (red - green) / (max - min)
				break

			default:
				hue = 0
				break
		}

		hue = limitDecimals(hue * 60)
	}

	return `${roundValue(hue)}, ${roundValue(sat)}%, ${roundValue(lum)}%`
}

const Card = { Simple, Color }

// Publish required component(s).
export default Card
