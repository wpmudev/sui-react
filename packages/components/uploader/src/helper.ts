// Array of allowed image file types
const SUI_UPLOADER_IMAGE_EXTS = ["image/png", "image/jpeg", "image/jpg"]

/**
 * Check if the given file type is an image type based on the predefined list.
 *
 * @param {string} fileType - The file type to check.
 * @return {boolean} True if the file type is an image type, false otherwise.
 */
const isImageFile = (fileType: string): boolean =>
	SUI_UPLOADER_IMAGE_EXTS.includes(fileType)

/**
 * Get the base64 encoded image preview of a File object.
 *
 * @param {File} file - The File object for which to generate the preview.
 * @return {string} The base64 encoded image preview of the File object.
 */
const getFileImagePreview = (file: File): string => {
	// Generate the URL for the File object and return it as a base64 encoded string
	return URL?.createObjectURL(file) ?? ""
}

// Export the utility functions and the array of allowed image file types
export { isImageFile, getFileImagePreview, SUI_UPLOADER_IMAGE_EXTS }
