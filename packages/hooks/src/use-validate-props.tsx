// Importing the isEmpty function from "@wpmudev/sui-utils"
import { isEmpty } from "@wpmudev/sui-utils"
import { ComponentType } from "react"

// Interface to define the props expected by the useError hook
interface UseValidatePropsTypes {
	propsToCheck: any // An array of props to be checked
	component: ComponentType // The component to which the props belong
}

// The useError hook is defined as a functional component (FC) with UseValidateProps as its props
const useValidateProps = ({
	propsToCheck,
	component,
}: UseValidatePropsTypes) => {
	// Get the component name
	const componentName =
		component?.displayName || (component as Record<string, any>)?.name

	// Go through each of the props to check
	Object.keys(propsToCheck)?.forEach((propKey: string, index: number) => {
		// Check if the prop is empty using the isEmpty function
		const isValid = !isEmpty(propsToCheck?.[propKey] ?? "")
		// If the prop is not valid (empty), throw an error with details about the component and the empty prop.
		if (!isValid) {
			throw new Error(
				`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 SUI 3 React - Components: ${componentName}\n\nThe "${propKey}" argument requires some value to be passed to it.\n\n`,
			)
		}
	})
}

export { useValidateProps }
