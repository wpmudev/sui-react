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

export interface useStylesTypes extends CSSPropertiesTypes {
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

/**
 * These are supported breakpoints (check _breakpoints.scss)
 *
 * 	sm: 600
 * 	md: 1024
 * 	lg: 1200
 * 	xl: 1600
 * 	null: it applied value outside of @media
 */
export const breakpoints = [600, 1024, 1200, 1600, null]

// Shorthands for spacing params
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

/**
 * Build style object based on prop name and value
 *
 * @param {string}             propName CSS property name
 * @param {StringPropertyType} value    CSS property value
 */
export const buildStyleSheet = (
	propName: string,
	value: StringPropertyType,
): { [key: string]: string } => {
	// Convert to valid CSS property using shorthand maps if available
	propName = CSS_SHORTHAND_MAPS[propName] ?? propName

	switch (typeof value) {
		case "string":
			// for single string values, return a simple CSS property object
			return { [propName]: value }

		case "object":
			// for object values, create responsive CSS
			return value.reduce((acc, val, index) => {
				val = { [propName]: val }
				const size = breakpoints[index]
				const query = index === 4 ? "" : `@media(max-width:${size}px)`

				return {
					...acc,
					[query]: val,
				}
			}, {})

		default:
			return {}
	}
}

/**
 * SUI custom hook for generating className based on passed CSS properties
 *
 * @param {useStylesTypes} styleProps CSS Properties
 * @param {string}         attachWith Existing className
 */
export const useStyles = (styleProps: useStylesTypes, attachWith = "") => {
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
