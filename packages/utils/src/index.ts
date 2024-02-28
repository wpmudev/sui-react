import React, { MouseEvent, KeyboardEvent } from "react"
import classnames from "classnames"
import { render } from "@testing-library/react"
import { axe } from "jest-axe"
import { CSS_SHORTHAND_MAPS, useStylesTypes } from "@wpmudev/sui-hooks"

type DataAttributeKey = `data-${string}`

// HTMLAttributes with data-* attribute
type SuiHTMLAttributes<T = any> = {
	_htmlProps?: T & { [dataAttribute: DataAttributeKey]: any }
}

// HTMLAttributes with data-* attribute
type SuiStyleType = {
	_style?: useStylesTypes
}

// Removes key from nested types
type OmitNestedKey<T, K extends keyof T, NK extends keyof NonNullable<T[K]>> = {
	[P in keyof T]: P extends K
		? NonNullable<T[P]> extends Record<NK, any>
			? Omit<NonNullable<T[P]>, NK>
			: T[P]
		: T[P]
}

/**
 * Check if a key is valid CSS property
 *
 * @param {string}  name             prop key
 * @param {boolean} includeShorthand include shorthand props
 */
const isValidCSSProperty = (name: string, includeShorthand: boolean = true) => {
	let cssProps = Object.keys(document?.body?.style)

	// include shorthand css properties
	if (includeShorthand) {
		cssProps = [...cssProps, ...Object.keys(CSS_SHORTHAND_MAPS)]
	}

	return cssProps?.indexOf(name) > -1
}

/**
 * Generate class names based on the prop variables.
 *
 * @param {string}              base
 * @param {Record<string, any>} variants
 * @param {string}              extraClassNames extra class names
 *
 * @return {string} - The generated class names.
 */
const generateCN = (
	base: string,
	variants: Record<string, any> = {},
	extraClassNames: string = "",
): string => {
	// append variant's class name
	const classes = Object.keys(variants).map((attr: string) => ({
		[`${base}--${attr}`]: !!variants?.[attr],
	}))

	return classnames(base, classes, extraClassNames)
}

/**
 * Returns the content if the condition is true, otherwise returns undefined.
 *
 * @param {any} condition - Condition to match.
 * @param {any} content   - The content to return if the condition is true.
 * @param {any} fallback  - The fallback to return
 *
 * @return {any|undefined} - The content or undefined.
 */
const condContent = (
	condition: unknown,
	content: unknown = null,
	fallback: any = undefined,
): any | undefined => {
	// use condition as content if passed
	if (isNull(content)) {
		content = condition
	}

	return !!condition ? content : fallback
}

/**
 * Check if value is null
 *
 * @param {unknown} value value to be checked
 *
 * @return {boolean} Returns true if value is null
 */
const isNull = (value: unknown) => null === value

/**
 * Check if value is undefined
 *
 * @param {unknown} value
 *
 * @return {boolean} True if value is undefined
 */
const isUndefined = (value: unknown) => "undefined" === typeof value

/**
 * Check if value is an object
 *
 * @param {unknown} value value to be checked
 *
 * @return {boolean} returns True if value is an object type
 */
const isObject = (value: unknown): boolean => {
	return "object" === typeof value && !Array.isArray(value)
}

/**
 * Check if value is an array
 *
 * @param {unknown} value value to be checked
 *
 * @return {boolean} returns True if value is an object type
 */
const isArray = (value: unknown): boolean => Array.isArray(value)

/**
 * Check if value is boolean type
 *
 * @param {unknown} value Value to to be checked
 *
 * @return {boolean} Returns true if boolean
 */
const isBoolean = (value: unknown): boolean => "boolean" === typeof value

/**
 * Check if value is number
 *
 * @param  value Value to be checked
 *
 * @return {boolean} Returns true if value is number
 */
const isNumber = (value: unknown): boolean => {
	return "number" === typeof value || !Number.isNaN(value)
}

/**
 * Check if variable is function
 *
 * @param {unknown} value Value to be checked
 * @return {boolean} Returns true if variable is function
 */
const isFunction = (value: unknown): boolean => "function" === typeof value

/**
 * Check if value is string
 *
 * @param {unknown} value Value to be checked
 * @return {boolean} Returns true if a variable is string
 */
const isString = (value: unknown): boolean => "string" === typeof value

/**
 * Check if string is empty
 *
 * @param {string | undefined} value string to be checked
 * @return {boolean} Returns true if string is blank
 */
const isEmpty = (value?: string): boolean => "" === value

/**
 * Check if object is empty
 *
 * @param {object | undefined} obj object to be checked
 * @return {boolean} Returns true if object is empty
 */
const isObjectEmpty = (obj?: object): boolean => {
	if (!obj) return false

	return Object.keys(obj).length === 0
}

/**
 * Capitalize text
 *
 * @param {string} string Text to be capitalized
 *
 * @return {string} Capitalize text
 */
const capitalizeText = (string: string): string => {
	return string?.charAt(0)?.toUpperCase() + string?.slice(1)
}

/**
 * Use this for onKeyDown callback when making a div or span element clickable
 *
 * @param {KeyboardEvent} event
 * @param {() => void}    callback
 */
const handleOnKeyDown = (
	event: React.KeyboardEvent<HTMLDivElement | HTMLSpanElement>,
	// @todo: fix <any>
	callback?: ((event?: any) => void) | undefined,
) => {
	if (event.key === "Enter" || event.key === " ") {
		if (callback) {
			callback(event)
		}
	}
}

/**
 * Handles common event operations like stopping propagation and preventing default behavior.
 *
 * @param {MouseEvent<unknown> | KeyboardEvent<unknown>} e               - The event object.
 * @param {boolean}                                      stopPropagation - If true, stops the event from further propagation in the event chain.
 * @param {boolean}                                      preventDefault  - If true, prevents the default behavior associated with the event.
 */
const handleEventDefault = (
	e: MouseEvent<unknown> | KeyboardEvent<unknown>,
	stopPropagation?: boolean,
	preventDefault?: boolean,
) => {
	if (stopPropagation) {
		e?.stopPropagation()
	}

	if (preventDefault) {
		e?.preventDefault()
	}
}

export type PluginsSlug =
	| "smush"
	| "defender"
	| "snapshot"
	| "hummingbird"
	| "forminator"
	| "beehive"
	| "hustle"
	| "smartcrawl"
	| "shipper"
	| "branda"
	| "blc"
	| "thc"

export type PluginIconTypes = {
	bg?: string
	color?: string
	icon: string
}

const PluginsIcons: Record<PluginsSlug, PluginIconTypes> = {
	smush: {
		bg: "#2dc4e0",
		color: "#FFF",
		icon: "PluginSmush",
	},
	defender: {
		bg: "#282a2c",
		color: "#FFF",
		icon: "PluginDefender",
	},
	snapshot: {
		bg: "#1a325e",
		color: "#FFF",
		icon: "PluginSnapshot",
	},
	hummingbird: {
		bg: "#ff8e3c",
		color: "#FFF",
		icon: "PluginHummingbird",
	},
	forminator: {
		bg: "#1f2852",
		color: "#FFF",
		icon: "PluginForminator",
	},
	beehive: {
		bg: "#013aa9",
		color: "#FFF",
		icon: "PluginBeehive",
	},
	hustle: {
		bg: "#1a1a1a",
		color: "#FFF",
		icon: "PluginHustle",
	},
	smartcrawl: {
		bg: "#de240a",
		color: "#FFF",
		icon: "PluginSmartcrawl",
	},
	shipper: {
		bg: "#7b5499",
		color: "#FFF",
		icon: "PluginShipper",
	},
	branda: {
		bg: "#ff8184",
		color: "#FFF",
		icon: "PluginBranda",
	},
	blc: {
		bg: "#03bfa5",
		color: "#FFF",
		icon: "PluginBlc",
	},
	thc: {
		bg: "#F36056",
		color: "#FFF",
		icon: "PluginThc",
	},
}

/**
 * Break an array into chunks of a specified size
 *
 * @param {any[]}  arr  - The array to be chunked
 * @param {number} size - The size of each chunk
 *
 * @return {any[][]} - An array of arrays containing the chunks
 */
const chunkArray = (arr: any[], size: number): any[][] => {
	const chunkedArray = []

	// Iterate through the input array, creating chunks of the specified size
	for (let i = 0; i < arr.length; i += size) {
		// Use Array.slice to extract a chunk of the array
		const chunk = arr.slice(i, i + size)

		// Add the chunk to the result array
		chunkedArray.push(chunk)
	}

	return chunkedArray
}

/**
 * It is a utility function for performing accessibility testing on a React component.
 *
 * Note: It only runs the test if an environment variable, `SUI_A11Y_TEST`, is turned on.
 * If the test is on, it checks the component for accessibility issues using the Axe library.
 *
 * @param {React.ReactElement} component - The React component to be tested for accessibility.
 * @param {Object}             config    - axe configuration
 */
const a11yTest = async (component: React.ReactElement, config?: object) => {
	if (process.env.SUI_A11Y_TEST) {
		const { container } = render(component)
		const results = await axe(container, config)
		expect(results).toHaveNoViolations()
	}
}

/**
 * Use this method to detect if code is executed by Jest (test runner)
 */
const _isTestingMode = () => {
	try {
		return process?.env?.JEST_WORKER_ID !== undefined
	} catch {
		return false
	}
}
/**
 * It is an internal method to render rest props list safely
 *
 * @param {Record<string, any>} propsList     props list
 * @param {boolean}             componentName component name
 */
const _renderHTMLPropsSafely = (
	propsList?: Record<string, any>,
	componentName: string = "",
) => {
	return propsList
}

// Publish required function(s).
export {
	isNull,
	isUndefined,
	isObject,
	isArray,
	isBoolean,
	isNumber,
	isEmpty,
	isObjectEmpty,
	isFunction,
	isString,
	generateCN,
	condContent,
	capitalizeText,
	handleOnKeyDown,
	handleEventDefault,
	PluginsIcons,
	chunkArray,
	isValidCSSProperty,
	_renderHTMLPropsSafely,
	// jest utilities
	a11yTest,
	_isTestingMode,
}

export type { SuiHTMLAttributes, SuiStyleType, OmitNestedKey }
