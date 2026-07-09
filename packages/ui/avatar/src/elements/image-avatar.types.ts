/**
 * Interface representing the properties of an image avatar.
 */
interface ImageAvatarProps {
	/**
	 * Optional unique identifier for the image avatar.
	 */
	id?: string

	/**
	 * Source URL of the image for the avatar.
	 */
	source: string

	/**
	 * Text to be displayed as the alternative content for the avatar image.
	 */
	text: string
}

export type { ImageAvatarProps }
