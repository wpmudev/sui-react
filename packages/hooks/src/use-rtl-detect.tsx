import { useState, useEffect } from "react"

const useDetectRTL = () => {
	const [isRTL, setIsRTL] = useState(false)

	useEffect(() => {
		const updateRTL = () => {
			const rootElement = document.documentElement
			const isDocumentRTL = rootElement.getAttribute("dir") === "rtl"
			setIsRTL(isDocumentRTL)
		}

		// Initial check on component mount
		updateRTL()

		// Listen for changes to the "dir" attribute of the root element
		const mutationObserver = new MutationObserver(updateRTL)
		const observerConfig = { attributes: true, attributeFilter: ["dir"] }
		mutationObserver.observe(document.documentElement, observerConfig)

		// Cleanup the observer on component unmount
		return () => {
			mutationObserver.disconnect()
		}
	}, [])

	return isRTL
}

export { useDetectRTL }
