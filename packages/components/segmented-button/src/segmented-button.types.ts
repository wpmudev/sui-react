import { ToggleButtonProps } from "@wpmudev/sui-button"

/**
 * This interface defines the props for the SegmentedButton component.
 * It extends the ToggleButtonProps type to inherit toggle button props.
 */
interface SegmentedButtonProps extends ToggleButtonProps {
	/** An optional icon to be displayed inside the segmented button. */
	icon?: string

	/** Optional content (React Node) to be rendered inside the segmented button. */
	children?: React.ReactNode

	/** Whether this segmented button is the first one in a group of segmented buttons. */
	isFirst?: boolean

	/** Whether this segmented button is the last one in a group of segmented buttons. */
	isLast?: boolean

	/** Whether the label of the segmented button should be hidden. */
	isLabelHidden?: boolean
}

export { SegmentedButtonProps }
