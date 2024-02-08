import jss, { createGenerateId } from "jss"
import preset from "jss-preset-default"
import { CSSProperties } from "react"
import { generateCN } from "@wpmudev/sui-utils"

// one time setup with default plugins and settings.
jss.setup(preset())

// create a custom generateId function that generates random class names
const generateId = createGenerateId({
	minify: true,
})

// custom classname prefix
const SUI_PREFIX = "sui-custom"

export type StringPropertyType = string | [...string]

// mapped type using the helper type
export type CSSPropertiesTypes = {
	[K in keyof CSSProperties]?:
		| CSSProperties[K]
		| ReadonlyArray<Extract<CSSProperties[K], string>>
}

export interface StylesTypes extends CSSPropertiesTypes {
	// padding shorthands
	p?: StringPropertyType
	px?: StringPropertyType
	py?: StringPropertyType
	pt?: StringPropertyType
	pr?: StringPropertyType
	pb?: StringPropertyType
	pl?: StringPropertyType
	// margins
	m?: StringPropertyType
	mx?: StringPropertyType
	my?: StringPropertyType
	mt?: StringPropertyType
	mr?: StringPropertyType
	mb?: StringPropertyType
	ml?: StringPropertyType
}

// check _breakpoints.scss
export const breakpoints = [600, 1024, 1200, 1600]

export const CSS_SHORTHAND_MAPS: Record<string, string> = {
	// paddings
	p: "padding",
	px: "padding",
	py: "padding",
	pt: "paddingTop",
	pr: "paddingRight",
	pb: "paddingBottom",
	pl: "paddingLeft",
	// margins
	m: "margin",
	mx: "margin",
	my: "margin",
	mt: "marginTop",
	mr: "marginRight",
	mb: "marginBottom",
	ml: "marginLeft",
}

export const buildStyleSheet = (
	propName: string,
	value: StringPropertyType,
) => {
	// convert to valid css property
	propName = CSS_SHORTHAND_MAPS[propName] ?? propName

	switch (typeof value) {
		case "string":
			return { [propName]: value }
		// css for breakpoints
		case "object":
			return value.reduce((acc, val, index) => {
				acc[`@media(min-width:${breakpoints[index]}px)`] = { [propName]: val }
				return acc
			}, {})
		default:
			return {}
	}
}

export const useStyles = (styleProps: StylesTypes, attachWith = "") => {
	const styles: Record<string, any> = { [`${SUI_PREFIX}`]: {} }

	// go through all props
	for (const name of Object.keys(styleProps)) {
		// build styles
		styles[SUI_PREFIX] = {
			...styles[SUI_PREFIX],
			"body .sui-wrap &": {
				...buildStyleSheet(name, styleProps[name]),
			},
		}
	}

	// create classnames
	const { classes } = jss?.createStyleSheet(styles, { generateId })?.attach()
	return { cssCN: generateCN(attachWith, {}, classes?.[SUI_PREFIX]) }
}
