// @ts-nocheck
import React from "react"

import { FileCheck } from "@wpmudev/sui-icons"
import { Button } from "@wpmudev/sui-button"

import { UploaderFileProps } from "./uploader.types"
import { getFileImagePreview, isImageFile } from "./helper"

/**
 * Represents a single file item in the Uploader component.
 *
 * @param {UploaderFileProps} props          - The properties for the UploaderFile component.
 * @param {number}            props.id       - The unique ID of the file.
 * @param {File}              props.file     - The File object representing the uploaded file.
 * @param {Function}          props.onRemove - Callback function to remove the file.
 * @return {JSX.Element} The JSX representation of the UploaderFile component.
 */
const UploaderFile: React.FC<UploaderFileProps> = ({ id, file, onRemove }) => {
	// @todo: add error variation support
	return (
		<div className="sui-uploader__file" data-testid="uploader-file">
			<div className="sui-uploader__file--preview">
				{/* Render image preview if the file is an image, otherwise render a generic file icon */}
				{isImageFile(file?.type) ? (
					<span
						role="img"
						className="sui-uploader__file--image"
						style={{
							backgroundImage: `url(${getFileImagePreview(file)})`,
						}}
					/>
				) : (
					<FileCheck size="sm" className="sui-uploader__file--icon" />
				)}
			</div>
			{/* Display the file name */}
			<span className="sui-uploader__file--name">{file?.name}</span>
			{/* Button to remove the file */}
			<Button
				className="sui-uploader__file--remove"
				iconOnly={true}
				icon="close"
				onClick={() => onRemove(id)}
			/>
		</div>
	)
}

export { UploaderFile }