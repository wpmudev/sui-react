import { useState, useEffect } from "react"
import { isEmpty } from "@wpmudev/sui-utils"
import {
	RulesType,
	SettingsType,
	StatusType,
	validationPropsType,
	RulesObjectType,
	fieldValueType,
	UpdateStatusType,
	ResetValidationType,
} from "./use-validation.types"

import { validators } from "./validators"

import { useValidators } from "./use-validators"

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
	const updateStatus: UpdateStatusType = (message) => {
		const _status = { error: message, isError: !!message }
		setStatus(_status)
	}

	/**
	 * Reset validation status
	 *
	 * @return {void}
	 */
	const resetValidation: ResetValidationType = () => {
		setStatus({})
	}

	const { getRuleType, validatorsMap } = useValidators({
		updateStatus,
		resetValidation,
		validators,
	})

	/**
	 * Apply a single rule
	 *
	 * @param fieldValue form element value to be validated
	 * @param ruleObject single rule object
	 * @param nextRule   next rule object
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

		const typeValue = ruleObject[type]

		const message = ruleObject.message

		const matchedValidator = validatorsMap[type]

		// Invoke the corresponding validator
		if (nextRule) {
			matchedValidator?.(fieldValue, typeValue, message, () =>
				applySingleRule(fieldValue, nextRule),
			)
		} else {
			matchedValidator?.(fieldValue, typeValue, message)
		}
	}

	// The main validate function
	const validate = (fieldValue: unknown) => {
		// Check if rules is a function
		if (typeof rules === "function") {
			return validatorsMap.validator(fieldValue, rules)
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
