import React from "react";

// Build segmented button
const SegmentedGroup = ({ className, isFullWidth, children, ...props }) => {
	const set = {};

	// Define main class
	set.class = 'sui-segmented-group';

	if (isFullWidth) {
		set.class += ' sui-segmented-group--full-width';
	}

	return (
		<div className={ set.class } { ...props }>
			{ children }
		</div>
	);
}

// Publish component(s)
export { SegmentedGroup }
