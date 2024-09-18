import { useState, useEffect } from "react"
import {
	UpdateStatusType,
	ResetValidationType,
	ValidatorFunctionType,
	RulesObjectType,
} from "./use-validation.types"

export const useValidators = ({
	updateStatus,
	resetValidation,
	validators,
}: {
	updateStatus: UpdateStatusType
	resetValidation: ResetValidationType
	validators: Record<string, any>
}) => {
	const validatorsMap: Record<string, any> = {}

	/**
	 * function to register a single validator
	 *
	 * @param namespace
	 * @param validatorFunc
	 *
	 */
	const registerValidator = (
		namespace: string,
		validatorFunc: ValidatorFunctionType,
	) => {
		// Check if the validator already exists
		const existingValidator = validatorsMap.hasOwnProperty(namespace)

		if (existingValidator) {
			throw new Error(`Validator with namespace '${namespace}' is duplicated!.`)
		}

		// wrap the validator function
		const wrappedValidator: ValidatorFunctionType = (
			fieldValue,
			typeValue,
			message,
			next,
		) => {
			const validationResult = validatorFunc(fieldValue, typeValue, message)
			if (validationResult) {
				updateStatus(validationResult)
			} else if (next) {
				next()
			} else {
				resetValidation()
			}
		}

		// Register the validator
		validatorsMap[namespace] = wrappedValidator
	}

	// Registering predefined rules
	Object.entries(validators).forEach(([validatorType, validatorFunction]) => {
		registerValidator(validatorType, validatorFunction)
	})

	/**
	 * Get type of a single rule
	 *
	 * @param  ruleObject a single rule object
	 * @return {string | void} type of the rule
	 */
	const getRuleType = (ruleObject: RulesObjectType) => {
		const rulesObjKeys = new Set(Object.keys(ruleObject))

		return Object.keys(validatorsMap).find((namespace) =>
			rulesObjKeys.has(namespace),
		)
	}

	return { validatorsMap, getRuleType }
}

export default useValidators
