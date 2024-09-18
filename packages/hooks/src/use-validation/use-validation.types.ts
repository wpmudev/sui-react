/**
 * Types
 */
export interface SettingsType {
	validateOnMount?: boolean
}

// Type for the form element value to be validated
export type fieldValueType = unknown

// Rules object type
export type RulesObjectType = {
	[type in string]?: unknown
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

// Update status type
export type UpdateStatusType = (message: string | undefined) => void

// Rest Validation Type
export type ResetValidationType = () => void

// All possible values for rules' types.
export const definedRules = ["required", "pattern", "validator"]
