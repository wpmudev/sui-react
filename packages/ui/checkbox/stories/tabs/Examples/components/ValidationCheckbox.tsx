import { Checkbox } from "../../../../src"
import React, { useState, Fragment } from "react"
import { useValidation } from "@wpmudev/sui-hooks"
import dedent from "dedent"

export const ValidationCheckboxCode = dedent`
import { Checkbox } from "@wpmudev/sui-checkbox"
import React, { useState, Fragment } from "react"
import { useValidation } from "@wpmudev/sui-hooks"

const ValidationCheckbox = () => {
	const [isChecked, setIsChecked] = useState(false)
	const [status, validationProps] = useValidation((value: boolean) => {
		if (value !== true) {
			return "This checkbox is required"
		}
	})

	return (
		<Fragment>
			<Checkbox
				label="Required Checkbox"
				isChecked={isChecked}
				isError={status.isError}
				onChange={(e) => {
					const inputElement = e.target as HTMLInputElement
					setIsChecked(inputElement.checked)
				}}
				{...validationProps}
			/>
			{status.isError && (
				<div style={{ color: "red" }}>This field must be checked</div>
			)}
		</Fragment>
	)
}
`

// Basic Checkbox example
export const ValidationCheckbox = () => {
	const [isChecked, setIsChecked] = useState(false)
	const [status, validationProps] = useValidation((value: boolean) => {
		if (value !== true) {
			return "This checkbox is required"
		}
	})

	return (
		<Fragment>
			<Checkbox
				label="Required Checkbox"
				isChecked={isChecked}
				isError={status.isError}
				onChange={(e) => {
					const inputElement = e.target as HTMLInputElement
					setIsChecked(inputElement.checked)
				}}
				{...validationProps}
			/>
			{status.isError && (
				<div style={{ color: "red" }}>This field must be checked</div>
			)}
		</Fragment>
	)
}
