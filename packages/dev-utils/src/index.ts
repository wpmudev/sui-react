import React from "react"
import { render } from "@testing-library/react"
import { axe } from "jest-axe"

/**
 * It is a utility function for performing accessibility testing on a React component.
 *
 * Note: It only runs the test if an environment variable, `SUI_A11Y_TEST`, is turned on.
 * If the test is on, it checks the component for accessibility issues using the Axe library.
 *
 * @param {React.ReactElement} component - The React component to be tested for accessibility.
 * @param {Object}             config    - axe configuration
 */
const a11yTest = async (component: React.ReactElement, config?: object) => {
	if (process.env.SUI_A11Y_TEST) {
		const { container } = render(component)
		const results = await axe(container, config)
		expect(results).toHaveNoViolations()
	}
}

// Publish required function(s).
export { a11yTest }
