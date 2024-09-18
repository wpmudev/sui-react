import { ValidatorFunctionType } from "./use-validation.types"
import { isEmpty } from "@wpmudev/sui-utils"

export const validators: Record<string, ValidatorFunctionType> = {
	// Required rule
	required: (fieldValue, typeValue, message) => {
		if (typeof typeValue !== "boolean") {
			throw new Error(
				`SUI 3: "useValidation" hook, required rule value should be a boolean.`,
			)
		}

		// No validation if typeValue is false
		if (!typeValue) {
			return
		}

		// Remove trailing white spaces
		const val = fieldValue?.toString()?.trim() || ""

		if (typeof val === "string" && isEmpty(val)) {
			return message
		}
	},

	// Pattern rule
	pattern: (fieldValue, typeValue, message) => {
		if (typeof typeValue !== "string" || isEmpty(typeValue as string)) {
			throw new Error(
				`SUI 3: "useValidation" hook, pattern rule value should be a string and not empty.`,
			)
		}
		if (!new RegExp(typeValue, "gm").test(fieldValue as string)) {
			return message
		}
	},

	// Custom validator rule
	validator: (fieldValue, customValidator, _message) => {
		if (typeof customValidator !== "function") {
			throw new Error(
				`SUI 3: "useValidation" hook, "validator" rule value should be a function.`,
			)
		}
		return customValidator(fieldValue)
	},

	// URL rule
	url: (fieldValue, typeValue, message) => {
		if (typeof typeValue !== "boolean") {
			throw new Error(
				`SUI 3: "useValidation" hook, url rule value should be a boolean.`,
			)
		}

		// No validation if typeValue is false
		if (!typeValue) {
			return
		}

		// URL regex
		const urlRegex =
			"[(http(s)?):\\/\\/(www\\.)?a-zA-Z0-9-@:%._\\+~#=]{2,256}\\.[a-z]{2,20}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)"

		if (!new RegExp(urlRegex, "gm").test(fieldValue as string)) {
			return message
		}
	},
}
