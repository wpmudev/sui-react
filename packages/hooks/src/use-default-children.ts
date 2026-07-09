/*
 * The useDefaultChildren hook is defined as a functional component,
 * its role is to display a customized content when children prop is empty
 */
import { ReactNode } from "react"

const useDefaultChildren = (
	children: ReactNode, // the component children prop
	content?: ReactNode, // the default content to display
) => {
	// Explicitly check for null or undefined
	return children !== null ? children : content || "{children content}"
}

export { useDefaultChildren }
