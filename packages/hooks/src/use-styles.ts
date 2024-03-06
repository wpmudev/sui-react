import { createUseStyles, DefaultTheme } from "react-jss"
import { CSSProperties, useEffect, useState } from "react"
import hash from "@emotion/hash"

import {
	_isTestingMode,
	generateCN,
	isValidCSSProperty,
	isObjectEmpty,
} from "@wpmudev/sui-utils"

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

// We need this to wrap inline styles to prioritize
const parentSelector: string = "body .sui-wrap &"

/**
 * Build style object based on prop name and value
 *
 * @param {string}             propName       CSS property name
 * @param {StringPropertyType} value          CSS property value
 * @param {Object}             existingStyles existing CSS
 */
export const buildStyleSheet = (
	propName: string,
	value: StringPropertyType,
	existingStyles: Record<string, any>,
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

		// skip if value is null
		if (null === val) {
			return acc
		}

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
