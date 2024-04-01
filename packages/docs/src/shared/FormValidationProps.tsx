import React from "react"
import { Code, Section } from "../index"

const FormValidationProps = () => {
	return (
		<Section
			title="Validation"
			contained={true}
			style={{ paddingTop: 20, paddingBottom: 30, paddingLeft: 0 }}
		>
			For validating the value of this form component, use the{" "}
			<a href="/?path=/docs/sui-npm-packages-hooks--docs" target="_blank">
				useValidation
			</a>{" "}
			hook from the <Code small={true}>@wpmudev/sui-hooks</Code> package.
		</Section>
	)
}

export { FormValidationProps }
