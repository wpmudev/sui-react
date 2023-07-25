import { useEffect, useState, RefObject } from "react"

/**
 * Custom hook for adding drag-and-drop functionality to a container element.
 *
 * @param {Object}    options              - The options for the hook.
 * @param {RefObject} options.containerRef - The reference to the container element where drag-and-drop should be enabled.
 * @param {Object}    options.methods      - An object containing optional callback methods.
 *
 * @return {Array} A boolean state indicating whether an element is being dragged.
 */
const useDragAndDrop = ({ containerRef, methods }) => {
	// State to keep track of the container node
	const [node, setNode] = useState()

	// State to indicate whether an element is being dragged
	const [isDragging, setIsDragging] = useState<boolean>(false)

	useEffect(() => {
		// Update the node state when the containerRef changes
		setNode(containerRef?.current)
	}, [containerRef])

	useEffect(() => {
		// Event listener for dragover event
		const onDragOver = (e) => {
			e.preventDefault()
			e.stopPropagation()

			// Set the isDragging state to true when an element is dragged over the container
			setIsDragging(true)

			// Call the onDragOver callback if provided in the methods object
			if (methods?.onDragOver) {
				methods?.onDragOver(e)
			}
		}

		// Event listener for drop event
		const onDrop = (e) => {
			e.preventDefault()
			e.stopPropagation()

			// Set the isDragging state to false when the element is dropped
			setIsDragging(false)

			// Call the onDrop callback if provided in the methods object
			if (methods?.onDrop) {
				methods?.onDrop(e)
			}
		}

		// Add event listeners when the node is available
		node?.addEventListener("dragover", onDragOver, false)
		node?.addEventListener("drop", onDrop, false)

		// Clean up by removing event listeners when the component unmounts or when the node changes
		return () => {
			node?.removeEventListener("dragover", onDragOver, false)
			node?.removeEventListener("drop", onDrop, false)
		}
	}, [containerRef, node, methods])

	// Return the isDragging state
	return [isDragging]
}

export { useDragAndDrop }
