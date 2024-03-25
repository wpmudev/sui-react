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

/**
 * Get basename
 *
 * @param {string} str file url
 */
export const basename = (str: string) => {
	let base = String(str).substring(str.lastIndexOf("/") + 1)

	if (base.lastIndexOf(".") !== -1) {
		base = base.substring(0, base.lastIndexOf("."))
	}

	return base
}
/**
 * Fetches data from a file URL and creates a File object.
 *
 * @param {string} fileUrl - The file URL.
 *
 * @return {Promise<File | null>} - A Promise that resolves to a File object or null if the operation fails.
 *
 */
export const getObjectFileFromUrl = async (
	fileUrl: string,
): Promise<File | null | Error> => {
	try {
		// Fetch the file data from the provided file URL
		const response = await fetch(fileUrl)

		// Check if the fetch operation was successful
		if (response.ok) {
			// Retrieve the file data as a Blob
			const blobData = await response.blob()

			// Create a new File object with the specified file name and type based on the Blob data
			const file = new File([blobData], basename(fileUrl), {
				type: blobData.type,
			})

			// Return the generated File object
			return file
		}
	} catch (err) {
		return null
	}
	return null
}
