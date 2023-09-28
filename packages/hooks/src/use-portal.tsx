import React, { ReactNode, useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom"

// Function to create a new wrapper element and append it to the body
const createWrapperAndAppendToBody = (wrapperId: string) => {
	const wrapperElement = document.createElement("div")
	wrapperElement.setAttribute("id", wrapperId)
	document.body.appendChild(wrapperElement)
	return wrapperElement
}

const usePortal = (wrapperId?: string) => {
	// State to hold the wrapper element
	const [wrapperElement, setWrapperElement] = useState<Element | null>(null)

	// Use default wrapper if not passed.
	wrapperId = wrapperId ?? ".sui-wrap"

	// useLayoutEffect is used to handle side effects like manipulating the DOM
	useLayoutEffect(() => {
		// Try to find an existing element with the given wrapperId
		let el = document.querySelector(wrapperId as string)
		let systemCreated = false

		// If the element is not found with the wrapperId or wrapperId is not provided,
		// create and append a new wrapper element to the body.
		if (!el) {
			systemCreated = true
			el = createWrapperAndAppendToBody(wrapperId as string)
		}

		// Update the wrapperElement state with the found or newly created element.
		setWrapperElement(el)

		return () => {
			// Clean up: Remove the programmatically created element if it was created by the hook.
			if (systemCreated && el?.parentNode) {
				el.parentNode.removeChild(el)
			}
		}
	}, [wrapperId])

	// The render function takes children ReactNode and renders them into the portal (wrapperElement).
	const render = (children: ReactNode) => {
		// The wrapperElement state will be null on the very first render.
		// In that case, we return null and don't render anything until the useLayoutEffect updates it.
		if (wrapperElement === null) return null
		return createPortal(children, wrapperElement)
	}

	// Returning the render function along with a tuple as const.
	// The returned array has only one element, the render function.
	// The tuple is used to ensure that TypeScript infers the correct types for this hook.
	return [render] as const
}

export { usePortal }
