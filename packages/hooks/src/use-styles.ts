import { createUseStyles } from "react-jss"
import { CSSProperties, useId } from "react"
import {
	_isTestingMode,
	generateCN,
	isValidCSSProperty,
} from "@wpmudev/sui-utils"

// custom classname prefix
const SUI_PREFIX = "sui-inline"

export type StringPropertyType = string | Array<string>

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

const parentSelector: string = "body .sui-wrap &"

/**
 * Build style object based on prop name and value
 *
 * @param {string}             propName CSS property name
 * @param {StringPropertyType} value    CSS property value
 */
export const buildStyleSheet = (
	propName: string,
	value: StringPropertyType,
) => {
	const shorthandPropName = CSS_SHORTHAND_MAPS[propName] ?? propName

	// build single value
	const buildSingleValue = (val: string) => ({
		[shorthandPropName]: val,
	})

	// build media queries
	const buildMediaQueries = (
		val: string,
		pos: number,
		acc: Record<string, any>,
	) => {
		const prevSize = breakpoints[pos - 1]
		const size = breakpoints[pos]
		const styleVal = buildSingleValue(val)

		// last breakpoint value is for default value
		if (null === size) {
			return {
				...acc,
				[parentSelector.replace("body ", "")]: {
					...acc[parentSelector as string],
					...styleVal,
				},
			}
		}

		const query =
			pos > 0
				? `@media(min-width:${(prevSize ?? 0) + 1}px) and (max-width:${size}px)`
				: `@media(max-width:${size}px)`

		return {
			...acc,
			[query]: {
				[parentSelector as string]: styleVal,
			},
		}
	}

	switch (typeof value) {
		case "string":
			return {
				[parentSelector as string]: buildSingleValue(value),
			}
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

/**
 * SUI custom hook for generating className based on passed CSS properties
 *
 * @param {useStylesTypes} styleProps CSS Properties
 * @param {string}         attachWith Existing className
 */
export const useStyles = (styleProps: useStylesTypes, attachWith = "") => {
	const styles: Record<string, any> = {}
	const id = useId()
	const prefix = `${SUI_PREFIX}-${id}`

	// disabled on test mode as it causes unecessary bugs
	if (_isTestingMode()) {
		return { suiInlineClassname: attachWith }
	}

	// go through all props
	for (const name of Object.keys(styleProps)) {
		// skip if not a valid CSS property
		if (!isValidCSSProperty(name)) {
			continue
		}

		// build styles
		styles[prefix] = {
			...styles[prefix],
			...buildStyleSheet(
				name,
				styleProps[name as keyof CSSProperties] as StringPropertyType,
			),
		}
	}

	// generated classnames
	const generatedCN = createUseStyles(styles)

	return {
		suiInlineClassname: generateCN(attachWith, {}, generatedCN()?.[prefix]),
	}
}
