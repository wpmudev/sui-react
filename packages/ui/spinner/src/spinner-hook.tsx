import React, { Fragment, RefObject, useEffect, useId, useState } from "react"
import { createRoot } from "react-dom/client"

import { Spinner } from "./spinner"
import { SpinnerHook, SpinnerProps } from "./spinner.types"

const useSpinner = (
	targetRef: RefObject<HTMLDivElement>,
	{ colorScheme, loaderSize }: Pick<SpinnerProps, "loaderSize" | "colorScheme">,
): SpinnerHook => {
	// State to track spinner visibility
	const [isVisible, setIsVisible] = useState<boolean>(false)

	// Generate a unique ID for the spinner
	const id = useId()
	const spinnerId = `sui_spinner_${id}`

	useEffect(() => {
		const currentTargetRef = targetRef?.current

		if (!currentTargetRef) {
			return
		}

		// If spinner is not visible, remove it from DOM
		if (!isVisible) {
			const spinnerDiv = document.getElementById(spinnerId)

			if (!!spinnerDiv?.parentNode) {
				currentTargetRef.removeChild(spinnerDiv)
				currentTargetRef.classList.remove("sui-spinner__wrapper")
			}
			return
		}

		// Create a fake DOM element to render the spinner
		const fakeDiv = document.createElement("div")

		if (isVisible) {
			fakeDiv.id = spinnerId
			fakeDiv.classList.add("sui-spinner__fake")
			currentTargetRef.classList.add("sui-spinner__wrapper")

			// Render the spinner using React's createRoot API
			createRoot(fakeDiv!).render(
				<Fragment>
					<div
						className={`sui-spinner__overlay sui-spinner__overlay--${colorScheme}`}
					/>
					<Spinner
						colorScheme={colorScheme}
						loaderSize={loaderSize}
						isAbsolute={true}
					/>
				</Fragment>,
			)

			// Append the fake spinner to the targetRef's DOM
			targetRef.current.appendChild(fakeDiv)
		}

		return () => {
			if (fakeDiv) {
				const spinnerDiv = document.getElementById(spinnerId)
				if (!!spinnerDiv?.parentNode) {
					currentTargetRef?.removeChild(spinnerDiv)
					currentTargetRef?.classList.remove("sui-spinner__wrapper")
				}
			}
		}
	}, [colorScheme, loaderSize, targetRef, isVisible, spinnerId])

	// Function to show the spinner
	const show = () => setIsVisible(true)

	// Function to hide the spinner
	const hide = () => setIsVisible(false)

	// Return visibility status and show/hide functions
	return { show, hide, isVisible }
}

export { useSpinner }
