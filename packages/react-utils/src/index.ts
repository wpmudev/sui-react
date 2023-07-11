import classnames from "classnames"

const isNil = (element) => {
	if (null == element) {
		return true
	}

	return false
}

/**
 * Generate classnames
 *
 * @param {string} base
 * @param {Record<string, string | boolean>} variants
 * @param {string} extraClassNames extra class names
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
 * @param {any} content - The content to return if the condition is true.
 * @param {any} fallback - The fallback to return
 *
 * @return {any|undefined} - The content or undefined.
 */
export const condContent = (
	condition,
	content = null,
	fallback = undefined,
) => {
	// use condition as content if passed
	if (isNull(content)) {
		content = condition
	}

	return !!condition ? content : fallback
}

const isNull = (element) => {
	if (null === element) {
		return true
	}

	return false
}

const isUndefined = (element) => "undefined" === typeof element

const isObject = (element) => {
	const isObject = "object" === typeof element
	const isArray = Array.isArray(element)

	if (isObject && !isArray) {
		return true
	}

	return false
}

const isArray = (element) => {
	const isObject = "object" === typeof element
	const isArray = Array.isArray(element)

	if (isObject && isArray) {
		return true
	}

	return false
}

const isBoolean = (element) => {
	if ("boolean" === typeof element) {
		return true
	}

	return false
}

const isNumber = (element) => {
	if ("number" === typeof element) {
		return true
	} else {
		if (!Number.isNaN(element)) {
			return true
		}
	}

	return false
}

const isEmpty = (element) => {
	if ("" !== element) {
		return false
	}

	return true
}

const isFunction = (element) => {
	return "function" === typeof element
}

const isString = (element) => {
	if ("string" === typeof element) {
		return true
	}

	return false
}

// Publish required function(s).
export {
	isNil,
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
}
