import { createUseStyles, DefaultTheme } from "react-jss"
import { CSSProperties, useEffect, useState } from "react"
import hash from "@emotion/hash"

import {
	_isTestingMode,
	generateCN,
	isValidCSSProperty,
	isObjectEmpty,
} from "@wpmudev/sui-utils"

export type positionType = "default" | "sm" | "md" | "lg" | "xl"

export type objectValueType = Record<string, string>

export type PropertyValueType = string | objectValueType

// mapped type using the helper type
export type CSSPropertiesTypes = {
	[K in keyof CSSProperties]?:
		| CSSProperties[K]
		| ReadonlyArray<Extract<CSSProperties[K], string>>
		| objectValueType
}

export interface useStylesTypes extends CSSPropertiesTypes {
	// padding shorthands
	p?: PropertyValueType
	px?: PropertyValueType
	py?: PropertyValueType
	pt?: PropertyValueType
	pr?: PropertyValueType
	pb?: PropertyValueType
	pl?: PropertyValueType
	// margins
	m?: PropertyValueType
	mx?: PropertyValueType
	my?: PropertyValueType
	mt?: PropertyValueType
	mr?: PropertyValueType
	mb?: PropertyValueType
	ml?: PropertyValueType
}

/**
 * These are supported breakpoints (check _breakpoints.scss)
 *
 *  default: it applies value outside of @media
 * 	sm: 600
 * 	md: 1024
 * 	lg: 1200
 * 	xl: 1600
 *
 */
export const breakpointsMap = {
	default: null,
	sm: 600,
	md: 1024,
	lg: 1200,
	xl: 1600,
}

const getPreviousBrpSize = (pos: positionType) => {
	switch (pos) {
		case "xl":
			return breakpointsMap.lg

		case "lg":
			return breakpointsMap.md

		case "md":
			return breakpointsMap.sm

		default:
			return undefined
	}
}

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

// We need this to wrap inline styles to prioritize
const parentSelector: string = "body .sui-wrap &"

/**
 * Build style object based on prop name and value
 *
 * @param {string}            propName       CSS property name
 * @param {PropertyValueType} value          CSS property value
 * @param {Object}            existingStyles existing CSS
 */
export const buildStyleSheet = (
	propName: string,
	value: PropertyValueType,
	existingStyles: Record<string, any>,
) => {
	const shorthandPropName = CSS_SHORTHAND_MAPS[propName] ?? propName

	// Build single value
	const buildSingleValue = (val: string) => ({
		[shorthandPropName]: val,
	})

	// Build media queries
	const buildMediaQueries = (
		val: string,
		pos: positionType,
		acc: Record<string, any>,
	) => {
		// Current breakpoint size
		const size = breakpointsMap[pos]

		// Skip if value is null
		if (null === val) {
			return acc
		}

		const styleVal = buildSingleValue(val)

		// last breakpoint value is for default value
		if (null === size) {
			return {
				...acc,
				...styleVal,
			}
		}

		// Get previous breakpoint size
		const prevSize = getPreviousBrpSize(pos)

		const query =
			pos !== "default"
				? `@media(min-width:${(prevSize ?? 0) + 1}px) and (max-width:${size}px)`
				: `@media(max-width:${size}px)`

		return {
			...acc,
			[query]: {
				...acc[query],
				...(existingStyles?.[query] ?? {}),
				...styleVal,
			},
		}
	}

	switch (typeof value) {
		case "string":
			return buildSingleValue(value)
		case "object":
			return Object.keys(value).reduce(
				// Ex. value = { default: "purple", sm: "red", md: "green", lg: "yellow", xl: "orange" }
				(acc, pos: string) => ({
					...acc,
					...buildMediaQueries(value[pos], pos as positionType, acc), // TODO: Create a type for it.
				}),
				{},
			)

		default:
			return {}
	}
}

/**
 * Generate the class name internally based on the provided styles.
 */
const _createUseStyles = createUseStyles(
	{
		"*": (props) => {
			const cssProperties: Record<string, any> = {}
			let styles = (props as any)?.[parentSelector] ?? {}
			//
			if (Object.keys(props).length > 0) {
				styles = props
			}

			// Go through each of the CSS property
			Object.entries(styles).forEach(([prop, value]) => {
				cssProperties[prop] = value
			})

			return cssProperties
		},
	},
	{ generateId: (rule) => `sui-inline-${hash(rule.key)}` },
)

/**
 * Check if an object has valid CSSProperty
 *
 * @param {Object} props expected to be CSSProperties
 */
const isValidCSSPropExists = (props: object): boolean =>
	Object.keys(props).filter((p) => !!isValidCSSProperty(p)).length > 0

/**
 * SUI custom hook for generating className based on passed CSS properties
 *
 * @param {useStylesTypes} styleProps CSS Properties
 * @param {string}         attachWith Existing className
 */
export const useStyles = (
	styleProps: useStylesTypes = {},
	attachWith: string = "",
) => {
	const [calculatedStyles, setCalculatedStyles] = useState({})

	// generated classnames
	const classNames = _createUseStyles(
		calculatedStyles as { theme: DefaultTheme },
	)
	// use blank object in test mode as it causes unnecessary bugs
	const stringifiedStyles = JSON?.stringify(_isTestingMode() ? {} : styleProps)

	useEffect(() => {
		const styleObject = JSON.parse(stringifiedStyles)
		let generatedCSS: Record<string, any> = {}

		// process if styleProps has valid CSS properties
		if (!isObjectEmpty(styleObject) && isValidCSSPropExists(styleObject)) {
			// go through all props
			for (const name of Object.keys(styleObject)) {
				const val = styleObject[name as keyof CSSProperties]

				// build styles
				generatedCSS = {
					...generatedCSS,
					...buildStyleSheet(name, val, generatedCSS),
				}
			}

			setCalculatedStyles({ [parentSelector]: generatedCSS })
		}
	}, [stringifiedStyles])

	return {
		suiInlineClassname: generateCN(
			attachWith,
			{},
			Object.keys(calculatedStyles).length > 0 ? classNames[`*`] : "",
		),
	}
}
