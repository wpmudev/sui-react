// @ts-nocheck
import { HTMLProps } from "react"

import { FormFieldProps } from "@wpmudev/sui-form-field"

/**
 * Represents the properties for an uploader component.
 */
interface UploaderProps extends Omit<HTMLProps<HTMLInputElement>, "onChange"> {
	/**
	 * Upload button title
	 */
	btnTitle?: string

	/**
	 * Allow select multiple files
	 */
	multiple?: boolean

	/**
	 * Allowed files
	 */
	accept?: string

	/**
	 * Allow drag and drop
	 */
	allowDragAndDrop?: boolean
	/**
	 * Send the files array to parent component when file uploaded or removed
	 *
	 * @param {Record<File, any>[]} file
	 */
	onChange?: (files: Record<string, any>[]) => void
	/**
	 * List of object files or a blob url
	 *
	 * @param {Record<File, any>[] | string } file
	 */
	defaultFiles?: Record<string, any>[] | string
	/**
	 * Max allowed file size in bytes
	 */
	maxSize?: number
	/**
	 * Text to appear in the alert when file size is larger than the max
	 */
	maxSizeText?: string
}

/**
 * Represents the properties for a file in the uploader component.
 */
interface UploaderFileProps {
	/**
	 * The unique ID of the file.
	 */
	id: number

	/**
	 * The File object representing the uploaded file.
	 */
	file: File

	/**
	 * Callback function to remove the file.
	 *
	 * @param fileIndex - The index of the file to remove.
	 */
	onRemove?: (fileIndex: number) => void
}

/**
 * Represents the properties for the uploader component button.
 */
interface UploaderButtonProps
	extends Pick<UploaderProps, "btnTitle" | "multiple" | "allowDragAndDrop">,
		Pick<UploaderFileProps, "files"> {
	/**
	 * Callback function for button click event.
	 */
	onClick?: () => void

	/**
	 * Callback function for drag event.
	 *
	 * @param filesOrEvent - The dragged files or the drag event.
	 */
	onDrag?: (filesOrEvent: unknown | Record<string, any>[]) => void
}

export type { UploaderProps, UploaderFileProps, UploaderButtonProps }
