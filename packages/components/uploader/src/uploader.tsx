import React, { useState, useId, useCallback, useRef, useEffect } from "react"

import { FormField } from "@wpmudev/sui-form-field"

// import type
import { UploaderProps } from "./uploader.types"
import { UploaderFile } from "./uploader.file"
import { UploaderButton } from "./uploader.button"

// The Uploader component displays a file uploader with drag-and-drop support and file previews.
const Uploader: React.FC<UploaderProps> = ({
	btnTitle,
	multiple = true,
	accept = "",
	allowDragAndDrop = true,
	fieldAttrs = {},
	onChange = () => {},
	...props
}) => {
	// State to keep track of selected files
	const [files, setFiles] = useState<Record<File, any>[]>([])

	// Generate a unique ID for the uploader component
	const uniqueID = useId()
	const uploaderId = `sui-uploader-${uniqueID}`

	// Ref to the hidden input element used to handle file selection
	const ref = useRef<HTMLInputElement | null>(null)

	// Send files to parent component
	useEffect(() => {
		onChange(files)
	}, [files, onChange])

	// Callback to handle file selection
	const onSelectFile = useCallback(
		(filesOrEvent: unknown | Record<File, any>[]) => {
			let { files: selectedFiles } = filesOrEvent?.target ?? {}

			// Use param value directly if the files were passed directly
			if (!selectedFiles) {
				selectedFiles = filesOrEvent
			}

			// Append new files to the existing files array
			setFiles([...files, ...Array.from(selectedFiles)])
		},
		[files],
	)

	// Callback to open the file selector dialog
	const openFileSelector = useCallback(() => {
		ref.current?.click()
	}, [ref])

	// Callback to remove a file from the selected files
	const onRemoveFile = useCallback(
		(fileIndex: number) => {
			setFiles(files.filter((file: File, index: number) => index !== fileIndex))
		},
		[files],
	)

	return (
		<FormField {...fieldAttrs}>
			<div className="sui-uploader">
				{/* Hidden input field to handle file selection */}
				<input
					type="file"
					id={uploaderId}
					ref={ref}
					onChange={onSelectFile}
					className="sui-uploader__input"
					multiple={multiple}
					accept={accept}
					hidden={true}
					{...props}
				/>

				{/* Render the uploader button when multiple selection is allowed or no files are selected */}
				{(multiple || (!multiple && files.length <= 0)) && (
					<UploaderButton
						btnTitle={btnTitle ?? ""}
						multiple={multiple ?? false}
						allowDragAndDrop={allowDragAndDrop ?? false}
						onClick={openFileSelector}
						onDrag={onSelectFile}
					/>
				)}
				{/* Render the file previews when there are selected files */}
				{!!files && files.length > 0 && (
					<div className="sui-uploader__preview">
						<div className="sui-uploader__files">
							{files?.map((file: File, index: number) => (
								<UploaderFile
									key={index}
									id={index}
									onRemove={onRemoveFile}
									file={file}
								/>
							))}
						</div>
					</div>
				)}
			</div>
		</FormField>
	)
}

export { Uploader }
