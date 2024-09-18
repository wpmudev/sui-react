/*
 * The useDefaultChildren hook is defined as a functional component,
 * its role is to display a customized content when children prop is empty
 */
import { ReactNode } from "react"

const useDefaultChildren = (
	children: ReactNode, // the component children prop
	content?: ReactNode, // the default content to display
) => {
	return children || content || "{children content}"
}

export { useDefaultChildren }
