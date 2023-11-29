// @ts-nocheck
import React, { useRef } from "react"

import { Button } from "@wpmudev/sui-button"
import { generateCN, handleOnKeyDown, isEmpty } from "@wpmudev/sui-utils"
import { useDragAndDrop } from "@wpmudev/sui-hooks"
import { Upload } from "@wpmudev/sui-icons"

import { UploaderButtonProps } from "./uploader.types"

/**
 * The UploaderButton component represents the button for selecting/uploading files in the Uploader.
 *
 * @param {UploaderButtonProps} props                  - The properties for the UploaderButton component.
 * @param {boolean}             props.allowDragAndDrop - Determines whether to allow drag-and-drop functionality (default: false).
 * @param {Function}            props.onClick          - Callback function for button click event (default: () => {}).
 * @param {Function}            props.onDrag           - Callback function for drag event (default: () => {}).
 * @return {JSX.Element} The JSX representation of the UploaderButton component.
 */
const UploaderButton: React.FC<UploaderButtonProps> = ({
	btnTitle = "",
	allowDragAndDrop = false,
	onClick = () => {},
	onDrag = () => {},
}) => {
	// Ref for the div used to handle drag-and-drop
	const dragRef = useRef<HTMLDivElement | null>(null)

	// Custom hook to handle drag-and-drop functionality
	const [isDragging] = useDragAndDrop({
		containerRef: dragRef,
		methods: {
			onDrop: (e) => {
				const draggedData = e.dataTransfer
				if (onDrag) {
					// Call the onDrag callback with the dragged files
					onDrag(draggedData.files)
				}
			},
		},
	})

	if (isEmpty(btnTitle ?? "")) {
		btnTitle = "Upload File"
	}

	// Return the UploaderButton component with drag-and-drop or regular button appearance
	if (allowDragAndDrop) {
		return (
			<div
				tabIndex={0}
				role="button"
				ref={dragRef}
				// Apply a custom CSS class based on the isDragging state
				className={generateCN("sui-uploader__pick", {
					dragging: isDragging,
				})}
				onClick={onClick}
				onKeyDown={(e) => handleOnKeyDown(e, onClick)}
			>
				<span className="sui-uploader__pick--icon">
					<Upload size="sm" />
				</span>
				<span className="sui-uploader__pick--label">{btnTitle}</span>
			</div>
		)
	}

	return (
		<Button
			className="sui-uploader__button"
			appearance="primary"
			color="blue"
			icon="Upload"
			onClick={onClick}
		>
			{btnTitle}
		</Button>
	)
}

export { UploaderButton }
