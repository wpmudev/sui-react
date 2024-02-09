import { createUseStyles } from "react-jss"
import { CSSProperties } from "react"
import { generateCN } from "@wpmudev/sui-utils"

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
	const shorthandPropName = CSS_SHORTHAND_MAPS[propName] ?? propName

	// build single value
	const buildSingleValue = (val: string) => ({ [shorthandPropName]: val })

	// build media queries
	const buildMediaQueries = (val: string, pos: number, acc: object) => {
		// last breakpoint value is for default value
		if (pos === 4) {
			return buildSingleValue(val)
		}

		const prevSize = breakpoints[pos - 1]
		const size = breakpoints[pos]
		const styleVal = buildSingleValue(val)

		const query =
			pos > 0
				? `@media(min-width:${prevSize + 1}px) and (max-width:${size}px)`
				: `@media(max-width:${size}px)`

		return { ...acc, [query]: styleVal }
	}

	switch (typeof value) {
		case "string":
			return buildSingleValue(value)
		case "object":
			return value.reduce(
				(acc, val, index) => ({
					...acc,
					...buildMediaQueries(val, index, acc),
				}),
				{},
			)

		default:
			return {}
	}
}

type isValidCSSProperty<T, K extends string> = K extends keyof T ? true : false

/**
 * SUI custom hook for generating className based on passed CSS properties
 *
 * @param {useStylesTypes} styleProps CSS Properties
 * @param {string}         attachWith Existing className
 */
export const useStyles = (styleProps: useStylesTypes, attachWith = "") => {
	const styles: Record<string, any> = {}

	// go through all props
	for (const name of Object.keys(styleProps)) {
		// check if valid CSS property
		type isValid = isValidCSSProperty<CSSProperties, typeof name>

		// skip if not a valid CSS property
		if (false as isValid) {
			continue
		}

		// build styles
		styles[SUI_PREFIX] = {
			...styles[SUI_PREFIX],
			"body .sui-wrap &": {
				...buildStyleSheet(name, styleProps[name]),
			},
		}
	}

	// generated classnames
	const generatedCN = createUseStyles(styles)

	return {
		cssCN: generateCN(attachWith, {}, generatedCN()?.[SUI_PREFIX]),
	}
}
