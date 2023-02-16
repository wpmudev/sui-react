import React, { Fragment } from 'react';
import { isBoolean, isEmpty, isObject, isUndefined } from '@wpmudev/react-utils';

// Build "Avatar" component.
const Avatar = ({ 
	status,
	image,
	icon,
	size
}) => {
	
	const avatar = {};

	avatar.class = 'sui-avatar';

	// avatar size
	if ( 'small' === size ) {
		avatar.class += ' sui-avatar--sm';
	}

	avatar.status = status;

	if ( 'danger' === status ) {
		avatar.status = 'warning';
	}

	return (
		<Fragment>
			<div className={avatar.class}>
				{ !isEmpty(image) && !isUndefined(image) && (
					<div className="sui-avatar__image">
						<img src={image} alt="" width="20" />
					</div>
				)}

				{ !isEmpty(icon) && !isUndefined(icon) && (
					<span className={`sui-avatar--icon suicons suicons--${icon}`} aria-hidden="true"></span>
				)}

				{ !isEmpty(status) && !isUndefined(status) && 'none' !== status && (
					<span className={`sui-avatar__status sui-avatar__status--${status}`}>
						<span className={ `suicons suicons--${avatar.status}` } aria-hidden="true"></span>
					</span>
				)}
			</div>
		</Fragment>
	);
}

// Publish required component.
export { Avatar }
