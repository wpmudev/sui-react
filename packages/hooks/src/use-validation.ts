import { useState } from "react"

/**
 * Types
 */
export interface SettingsType {
	validateOnMount?: boolean
}

export type RulesType = (value: any) => string | undefined

export interface StatusType {
	error?: string
	isError?: boolean
}

export interface validationPropsType {
	validate?: (value: unknown) => string | void
	validateOnMount?: boolean
	resetValidation?: () => void
}

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
	const [status, setStatus] = useState<StatusType>({})

	const validate = (value: unknown) => {
		if (typeof rules === "function") {
			const _status = { error: rules(value), isError: !!rules(value) }

			setStatus(_status)
		}
	}

	const resetValidation = () => {
		setStatus({})
	}

	const returnProps: validationPropsType = {
		validate,
		validateOnMount: settings.validateOnMount || false,
		resetValidation,
	}

	return [status, returnProps]
}

export { useValidation }
