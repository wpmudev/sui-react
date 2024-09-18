import React, { Fragment } from "react"
import { useValidation } from "@wpmudev/sui-hooks"
import { RadioGroup, Radio } from "../../../src"
import { FormField } from "@wpmudev/sui-form-field"
import dedent from "dedent"

export const ValidationRadioCode = dedent`
import React, { Fragment } from "react"
import { useValidation } from "@wpmudev/sui-hooks"
import { RadioGroup, Radio } from "../../../src"
import { FormField } from "@wpmudev/sui-form-field"

const ValidationRadio = () => {
	const [status, validationProps] = useValidation((value: string) => {
		if (value === "php") {
			return "You must choose JavaScript!"
		}
	})

	return (
		<Fragment>
			<FormField
				id="radio-group"
				label="Radio Group"
				helper="This is a description"
				error={status.error}
			>
				<RadioGroup
					isInline={true}
					onChange={(data) => {}}
					{...validationProps}
				>
					<Radio value="php" label="php" />
					<Radio value="javascript" label="JavaScript" />
				</RadioGroup>
			</FormField>
		</Fragment>
	)
}
`

// Basic Checkbox example
export const ValidationRadio = () => {
	const [status, validationProps] = useValidation((value: string) => {
		if (value === "php") {
			return "You must choose JavaScript!"
		}
	})

	return (
		<Fragment>
			<FormField
				id="radio-group"
				label="Radio Group"
				helper="This is a description"
				error={status.error}
			>
				<RadioGroup
					isInline={true}
					onChange={(data) => {}}
					{...validationProps}
				>
					<Radio value="php" label="php" />
					<Radio value="javascript" label="JavaScript" />
				</RadioGroup>
			</FormField>
		</Fragment>
	)
}
