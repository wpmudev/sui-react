// @ts-nocheck
import React, {
	useState,
	useId,
	useCallback,
	useRef,
	useEffect,
	Fragment,
} from "react"

// import type
import { UploaderProps } from "./uploader.types"
import { UploaderFile } from "./uploader-file"
import { UploaderButton } from "./uploader-button"
import {
	NotificationRenderer,
	useNotifications,
} from "@wpmudev/sui-notification"

import {
	getFileImagePreview,
	isImageFile,
	getObjectFileFromUrl,
} from "./helper"
import { _renderRestPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"

// The Uploader component displays a file uploader with drag-and-drop support and file previews.
const Uploader: React.FC<UploaderProps> = ({
	btnTitle = "Upload File",
	multiple = true,
	accept = "",
	allowDragAndDrop = true,
	defaultFiles = [],
	onChange = () => {},
	maxSize,
	maxSizeText = "Message to appear when file size exeeds the max given",
	...props
}) => {
	// To display notifications
	const notification = useNotifications()

	// State to keep track of selected files
	const [files, setFiles] = useState<Record<string, any>[]>([])

	// Generate a unique ID for the uploader component
	const uniqueID = useId()
	const uploaderId = `sui-uploader-${uniqueID}`

	// load default files
	useEffect(() => {
		const initFiles = async () => {
			if (typeof defaultFiles === "array") {
				setFiles(defaultFiles)
			} else if (typeof defaultFiles === "string" && !isEmpty(defaultFiles)) {
				const fileObject = await getObjectFileFromUrl(defaultFiles)
				setFiles([fileObject])
			}
		}

		initFiles()
	}, [defaultFiles])

	// Ref to the hidden input element used to handle file selection
	const ref = useRef<HTMLInputElement | null>(null)

	// Empty the file input
	const emptyFileInput = () => {
		ref.current.value = ""
	}

	/**
	 * Check file size
	 *
	 * @param {File} file object
	 * @return {boolean} true if proper size
	 */
	const fileSizeExceedMax = (file: File): boolean => {
		if (maxSize) {
			return file.size > maxSize
		}
		return false
	}

	// Send files to parent component
	useEffect(() => {
		if (onChange) {
			onChange(files)
		}
	}, [files])

	// Callback to handle file selection
	const onSelectFile = useCallback(
		(filesOrEvent: unknown | Record<string, any>[]) => {
			let block = false
			let { files: selectedFiles } = filesOrEvent?.target ?? {}

			// Use param value directly if the files were passed directly
			if (!selectedFiles) {
				selectedFiles = filesOrEvent
			}

			const selectedFilesList = Array.from(selectedFiles)

			// Check files size
			selectedFilesList.forEach((file) => {
				// check file size
				if (fileSizeExceedMax(file)) {
					notification.push({
						message: maxSizeText,
						variation: "error",
						size: "lg",
						icon: "Warning",
						timeout: 3000,
					})
					block = true
				}
			})

			// Return if one of the files exceeds the max size
			if (block) {
				emptyFileInput()

				return
			}

			// Add a preview url for the file if it's an image
			const tempSelectedFiles = selectedFilesList.map((file) => {
				if (isImageFile(file?.type)) {
					file.previewUrl = getFileImagePreview(file)
				}

				return file
			})

			// Append new files to the existing files array
			setFiles([...files, ...tempSelectedFiles])
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

			emptyFileInput()
		},
		[files],
	)

	const { suiInlineClassname } = useStyles(props)

	return (
		<Fragment>
			<NotificationRenderer />
			<div
				className={generateCN("sui-uploader", {}, suiInlineClassname)}
				data-testid="uploader"
			>
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
					{..._renderRestPropsSafely(props)}
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
		</Fragment>
	)
}

export { Uploader }
