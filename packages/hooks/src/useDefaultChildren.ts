/*
 * The useDefaultChildren hook is defined as a functional component,
 * its role is to display a customized content when children prop is empty
 */
const useDefaultChildren = (
	children: React.ReactNode, // the component children prop
	content?: React.ReactNode, // the default content to display
) => {
	return children || content || "{children content}"
}

export { useDefaultChildren }
