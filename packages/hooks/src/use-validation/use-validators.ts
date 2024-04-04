import { useState, useEffect } from "react"
import {
	UpdateStatusType,
	ResetValidationType,
	ValidatorFunctionType,
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

	return { validatorsMap }
}

export default useValidators
