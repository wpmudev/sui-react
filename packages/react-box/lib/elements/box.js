import React, { Fragment } from "react";
import { isEmpty, isUndefined } from "@wpmudev/react-utils";

import { BoxGroup } from './box-group';

// Create box component
const Box = ({ title, icon, headerLeft, headerRight, children }) => {
	const has = {};
	const set = {};

	// Prop(s) validation
	has.title = !isUndefined(title) && !isEmpty(title) ? true : false;
	has.icon = !isUndefined(icon) && !isEmpty(icon) ? true : false;
	has.left = !isUndefined(headerRight) && !isEmpty(headerLeft) ? true : false;
	has.right = !isUndefined(headerRight) && !isEmpty(headerRight) ? true : false;

	console.log(`${!isUndefined(headerRight)}`);

	// Define main class
	set.class = 'sui-box';

	return (
		<div className={set.class}>
			{has.title && (
				<BoxGroup isInline={true}>
					<div slot="left">
						{has.icon && (
							<span className={`suicons suicons--${icon} suicons--lg sui-box-group__item`} aria-hidden="true" />
						)}
						{has.title && (
							<h2 className="sui-heading sui-heading--h3 sui-box-group__item">
								{title}
							</h2>
						)}
						{has.left && headerLeft}
					</div>
					<div {...(has.right && {slot: 'right'})}>
						{has.right && headerRight}
					</div>
				</BoxGroup>
			)}
			{children}
		</div>
	);
}

// Publish component(s)
export { Box }
