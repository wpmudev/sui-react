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
	validate?: (value: fieldValueType) => string | void
	validateOnMount?: boolean
	resetValidation?: () => void
}

// Rule function type
export type ValidatorArgsType = (
	fieldValue: fieldValueType,
	typeValue: unknown,
	message?: string,
) => string | void

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

	// The "required" validator
	const required: ValidatorArgsType = (fieldValue, _typeValue, message) => {
		if (typeof fieldValue === "string" && isEmpty(fieldValue)) {
			updateStatus(message)
		} else {
			resetValidation()
		}
	}

	// The "pattern" validator
	const pattern: ValidatorArgsType = (fieldValue, typeValue, message) => {
		if (typeof typeValue !== "string" || isEmpty(fieldValue as string)) {
			throw new Error(
				`SUI 3: "useValidation" hook, pattern rule value should be a string and not empty.`,
			)
		}
		if (
			!new RegExp("^(?:^(?:(?!<[^>]*>).)*$)$", "gm").test(fieldValue as string)
		) {
			updateStatus(message)
		} else {
			resetValidation()
		}
	}

	// The custom validator
	const validator: ValidatorArgsType = (fieldValue, customValidator) => {
		if (typeof customValidator !== "function") {
			throw new Error(
				`SUI 3: "useValidation" hook, "validator" rule value should be a function.`,
			)
		}

		setStatus({
			error: customValidator(fieldValue),
			isError: !!customValidator(fieldValue),
		})
	}

	/*
	 * Validators Mapping
	 */
	const validators: Record<string, ValidatorArgsType> = {
		required,
		pattern,
		validator,
	}

	/**
	 * Apply a single rule
	 *
	 * @param fieldValue form element value to be validated
	 * @param ruleObject single rule object
	 */
	const applySingleRule = (
		fieldValue: fieldValueType,
		ruleObject: RulesObjectType,
	) => {
		// Through an error if the rule object is not an object
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
		matchedValidator(fieldValue, typeValue, message)
	}

	// The main validate function
	const validate = (fieldValue: any) => {
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
			return rules.forEach((rule) => {
				applySingleRule(fieldValue, rule)
			})
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
