import { useEffect } from "react"

/**
 *
 * Trigger a browser-generated confirmation dialog that asks users to confirm if they really want to leave the page
 * when they try to close or reload it, or navigate somewhere else. This's intended to help prevent loss of unsaved
 * data or to wait for processies to finish
 *
 * Limitations:
 * - A mobile user visits your page.
 * - The user then switches to a different app.
 * - Later, the user closes the browser from the app manager.
 *
 * @param preventUnload boolean
 */
export const usePreventUnload = (preventUnload: boolean) => {
	useEffect(() => {
		const handleBeforeUnload = (event: BeforeUnloadEvent) => {
			if (preventUnload) {
				event.preventDefault()

				return null
			}
		}

		window.addEventListener("beforeunload", handleBeforeUnload)

		// Clean up the event listener when the component is unmounted
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload)
		}
	}, [preventUnload])
}
