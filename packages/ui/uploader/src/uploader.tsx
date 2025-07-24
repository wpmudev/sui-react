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
import { _renderHTMLPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"
import { useInteraction, useStyles } from "@wpmudev/sui-hooks"

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
	ariaAttrs = {},
	onClick,
	_htmlProps = {},
	_style = {},
	...props
}) => {
	// To display notifications
	const notification = useNotifications()

	// State to keep track of selected files
	const [files, setFiles] = useState<Record<string, any>[]>([])

	const [isHovered, isFocused, methods] = useInteraction({})

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
		if (ref?.current) {
			ref.current.value = ""
		}
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

			// New files list
			const _files = [...files, ...tempSelectedFiles]

			// Append new files to the existing files array
			setFiles(_files)

			// Call onChange function
			onChange(_files)
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[files, onChange],
	)

	// Callback to open the file selector dialog
	const openFileSelector = useCallback(() => {
		if (onClick) {
			onClick?.()
			return
		}
		ref.current?.click()
	}, [ref, onClick])

	// Callback to remove a file from the selected files
	const onRemoveFile = useCallback(
		(fileIndex: number) => {
			// New files list
			const _files = files.filter(
				(file: File, index: number) => index !== fileIndex,
			)

			// Update Files state
			setFiles(_files)

			// Call onChange callback
			onChange(_files)

			// Empty the file input value
			emptyFileInput()
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[files, onChange],
	)

	const { suiInlineClassname } = useStyles(_style)

	return (
		<Fragment>
			<NotificationRenderer />
			<div
				className={generateCN(
					"sui-uploader",
					{
						hover: isHovered,
						focus: isFocused,
					},
					suiInlineClassname,
				)}
				data-testid="uploader"
				{..._renderHTMLPropsSafely(_htmlProps)}
			>
				{/* Hidden input field to handle file selection */}
				{!onClick && (
					<input
						type="file"
						id={uploaderId}
						ref={ref}
						onChange={onSelectFile}
						className="sui-uploader__input sui-accessible-cta sui-hidden"
						multiple={multiple}
						accept={accept}
						{...ariaAttrs}
						{...methods}
						{..._renderHTMLPropsSafely(props)}
					/>
				)}

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
