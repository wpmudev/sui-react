import { MouseEvent, KeyboardEvent } from "react"
import classnames from "classnames"

/**
 * Generate classnames based on the prop vars
 *
 * @param {string}                           base
 * @param {Record<string, string | boolean>} variants
 * @param {string}                           extraClassNames extra class names
 *
 * @return {string} classnames
 */
const generateCN = (base: string, variants = {}, extraClassNames = "") => {
	// append variant's class name
	const classes = Object.keys(variants).map((attr) => ({
		[`${base}--${attr}`]: !!variants[attr],
	}))

	return classnames(base, classes, extraClassNames)
}

/**
 * Returns the content if the condition is true, otherwise returns undefined.
 *
 * @param {boolean} condition - Condition to match.
 * @param {any}     content   - The content to return if the condition is true.
 * @param {any}     fallback  - The fallback to return
 *
 * @return {any|undefined} - The content or undefined.
 */
const condContent = (condition, content = null, fallback = undefined) => {
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
const isObject = (value: unknown) => {
	return "object" === typeof value && !Array.isArray(value)
}

/**
 * Check if value is an array
 *
 * @param {unknown} value value to be checked
 *
 * @return {boolean} returns True if value is an object type
 */
const isArray = (value: unknown) => !!(isObject(value) && Array.isArray(value))

/**
 * Check if value is boolean type
 *
 * @param {unknown} value Value to to be checked
 *
 * @return {boolean} Returns true if boolean
 */
const isBoolean = (value: unknown) => "boolean" === typeof value

/**
 * Check if value is number
 *
 * @param  value Value to be checked
 *
 * @return {boolean} Returns true if value is number
 */
const isNumber = (value: unknown) => {
	return "number" === typeof value || !Number.isNaN(value)
}

/**
 * Check if variable is function
 *
 * @param {unknown} value Value to be checked
 * @return {boolean} Returns true if variable is function
 */
const isFunction = (value: unknown) => "function" === typeof value

/**
 * Check if value is string
 *
 * @param {unknown} value Value to be checked
 * @return {boolean} Returns true if a variable is string
 */
const isString = (value: unknown) => "string" === typeof value

/**
 * Check if string is empty
 *
 * @param {string | undefined} value string to be checked
 * @return {boolean} Returns true if string is blank
 */
const isEmpty = (value: string | undefined) => "" === value

/**
 * Capitalize text
 *
 * @param {string} string Text to be capitalized
 *
 * @return {string} Capitalize text
 */
const capitalizeText = (string: string) => {
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
	callback?: (() => void) | undefined,
) => {
	if (event.key === "Enter" || event.key === " ") {
		if (callback) {
			callback()
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

// Publish required function(s).
export {
	isNull,
	isUndefined,
	isObject,
	isArray,
	isBoolean,
	isNumber,
	isEmpty,
	isFunction,
	isString,
	generateCN,
	condContent,
	capitalizeText,
	handleOnKeyDown,
	handleEventDefault,
}
