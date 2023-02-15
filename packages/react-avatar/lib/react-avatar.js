import React, { Fragment } from 'react';
import { isBoolean, isEmpty, isObject, isUndefined } from '@wpmudev/react-utils';

// Build "Avatar" component.
const Avatar = ({ 
	status,
	image,
	icon
}) => {

	

	return (
		<Fragment>
			<div className="sui-avatar">
				{ !isEmpty(image) && !isUndefined(image) && (
					<img src={image} alt="" width="20" />
				)}

				{ !isEmpty(icon) && !isUndefined(icon) && (
					<span className={`suicons suicons--${icon}`} aria-hidden="true"></span>
				)}

				{ !isEmpty(status) && !isUndefined(status) && (
					<span className={`sui-avatar__status`}>
						<span className={`suicons suicons--${status}`} aria-hidden="true"></span>
					</span>
				)}
			</div>
		</Fragment>
	);
}

// Publish required component.
export { Avatar }
