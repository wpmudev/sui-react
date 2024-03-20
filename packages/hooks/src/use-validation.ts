import { useState } from "react"
import { isEmpty } from "@wpmudev/sui-utils"

/**
 * Types
 */
export interface SettingsType {
	validateOnMount?: boolean
}

// Type for the form element value to be validated
export type fieldValueType = unknown

export type ruleType = "required" | "pattern" | "validator"

// Rules object type
export type RulesObjectType = {
	[type in ruleType]?: unknown
} & {
	message?: string
}

// Hook first argument type
export type RulesType =
	| RulesObjectType
	| RulesObjectType[]
	| ((fieldValue: any) => string | undefined)

// Status state type
export interface StatusType {
	error?: string
	isError?: boolean
}

// Hook return type
export interface validationPropsType {
	validate?: (value: fieldValueType) => string | null | void
	validateOnMount?: boolean
	resetValidation?: () => void
}

// Rule function type
export type ValidatorFunctionType = (
	fieldValue: fieldValueType,
	typeValue: unknown,
	message?: string,
	next?: () => void,
) => string | null | undefined | void

// All possible values for rules' types.
export const definedRules = ["required", "pattern", "validator"]

/**
 * Form Validation hook
 *
 * @param {rules}    rules    Validation rules
 * @param {settings} settings settings for the rule
 */
const useValidation = (
	rules: RulesType,
	settings: SettingsType = { validateOnMount: false },
): [StatusType, validationPropsType] => {
	// Status state
	const [status, setStatus] = useState<StatusType>({})

	/**
	 *
	 * Update the status with error message
	 *
	 * @param  message error message
	 *
	 * @return {void}
	 */
	const updateStatus = (message: undefined | string): void => {
		const _status = { error: message, isError: !!message }
		setStatus(_status)
	}

	/**
	 * Reset validation status
	 *
	 * @return {void}
	 */
	const resetValidation = (): void => {
		setStatus({})
	}

	/**
	 * Get type of a single rule
	 *
	 * @param  ruleObject a single rule object
	 * @return {string | void} rule type: "required", "pattern", "validator"
	 */
	const getRuleType = (ruleObject: RulesObjectType): string | void => {
		const rulesObjKeys = new Set(Object.keys(ruleObject))

		return definedRules.find((rule) => rulesObjKeys.has(rule))
	}

	/**
	 *  HOF for creating validators
	 *
	 * @param  validatorFunc
	 * @return {Function} validator function
	 */
	function createValidator(
		validatorFunc: ValidatorFunctionType,
	): ValidatorFunctionType {
		return (fieldValue, typeValue, message, next) => {
			const validationResult = validatorFunc(fieldValue, typeValue, message)
			if (validationResult) {
				updateStatus(validationResult)
			} else if (next) {
				next()
			} else {
				resetValidation()
			}
		}
	}

	// Required rule
	const required = createValidator((fieldValue, _typeValue, message) => {
		if (typeof fieldValue === "string" && isEmpty(fieldValue)) {
			return message
		}
	})

	// Pattern rule
	const pattern = createValidator((fieldValue, typeValue, message) => {
		if (typeof typeValue !== "string" || isEmpty(typeValue as string)) {
			throw new Error(
				`SUI 3: "useValidation" hook, pattern rule value should be a string and not empty.`,
			)
		}
		if (!new RegExp(typeValue, "gm").test(fieldValue as string)) {
			return message
		}
	})

	// Custom validator rule
	const validator = createValidator((fieldValue, customValidator, _message) => {
		if (typeof customValidator !== "function") {
			throw new Error(
				`SUI 3: "useValidation" hook, "validator" rule value should be a function.`,
			)
		}
		return customValidator(fieldValue)
	})

	/*
	 * Validators Mapping
	 */
	const validators: Record<string, ValidatorFunctionType> = {
		required,
		pattern,
		validator,
	}

	/**
	 * Apply a single rule
	 *
	 * @param fieldValue form element value to be validated
	 * @param ruleObject single rule object
	 * @param nextRule   next rule function
	 */
	const applySingleRule = (
		fieldValue: fieldValueType,
		ruleObject: RulesObjectType,
		nextRule?: RulesObjectType,
	) => {
		// Through an error if the rule is not an object
		if (typeof ruleObject !== "object") {
			throw new Error(
				`SUI 3: "useValidation" hook, the rule should be of type object.`,
			)
		}

		const type = getRuleType(ruleObject)

		// If no type found, throw an error
		if (!type)
			throw new Error(
				`SUI 3: "useValidation" hook, No rule type found in the rules object.`,
			)

		const typeValue = ruleObject[type as ruleType]

		const message = ruleObject?.message

		const matchedValidator = validators[type as ruleType]

		// Invoke the corresponding validator
		if (nextRule) {
			matchedValidator(fieldValue, typeValue, message, () =>
				applySingleRule(fieldValue, nextRule),
			)
		} else {
			matchedValidator(fieldValue, typeValue, message)
		}
	}

	// The main validate function
	const validate = (fieldValue: unknown) => {
		// Check if rules is a function
		if (typeof rules === "function") {
			return validator(fieldValue, rules)
		}

		// Check if we have a single rule object
		if (typeof rules === "object" && !Array.isArray(rules)) {
			return applySingleRule(fieldValue, rules as RulesObjectType)
		}

		// Check if we have an array of rules
		if (Array.isArray(rules)) {
			const index = 0 // index of the rule in the array
			const nextRule = rules[index + 1] // next rule in the array

			applySingleRule(fieldValue, rules[0], nextRule)
		}
	}

	const returnProps: validationPropsType = {
		validate,
		validateOnMount: settings.validateOnMount || false,
		resetValidation,
	}

	return [status, returnProps]
}

export { useValidation }
