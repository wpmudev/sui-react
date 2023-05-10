import React, { Children, Fragment } from "react";
import { isObject } from "@wpmudev/react-utils";

// Create box group component
const BoxGroup = ({ isInline = true, children }) => {
	const set = {};

	// Build content based in slots
	set.slots = Children.map(children, (child, index) => {
		if (isObject(child)) {
			if ('left' === child.props.slot || 'right' === child.props.slot) {
				return (
					<div key={`sui-box-group--${index}`}
						className={`sui-box-group__slot sui-box-group__${child.props.slot}`}>
						{child.props.children}
					</div>
				);
			}
		}

		return (
			<Fragment key={`sui-box-group--${index}`}>
				{child}
			</Fragment>
		);
	});

	// Define main class
	set.class = 'sui-box-group';

	// Define class for inline content
	if (isInline) {
		set.class += ' sui-box-group--inline';
	}

	return (
		<div className={set.class}>
			{ set.slots }
		</div>
	);
}

// Publish component(s)
export { BoxGroup }
