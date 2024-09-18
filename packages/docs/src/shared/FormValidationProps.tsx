import React from "react"
import { Code, Section } from "../index"

const FormValidationProps = () => {
	return (
		<Section
			title="Validation"
			contained={true}
			style={{ paddingTop: 20, paddingBottom: 30, paddingLeft: 0 }}
		>
			Utilize the{" "}
			<a href="/?path=/docs/sui-npm-packages-hooks--docs" target="_blank">
				useValidation
			</a>{" "}
			hook from the <Code small={true}>@wpmudev/sui-hooks</Code> package to
			validate this form component&apos;s value.
		</Section>
	)
}

export { FormValidationProps }
