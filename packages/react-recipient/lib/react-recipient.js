import React, { Fragment, createElement } from 'react';
import { isEmpty, isUndefined, isObject } from '@wpmudev/react-utils';

import { Avatar } from '../../react-avatar';

import { RecipientName } from './elements/name-recipient';
import { RecipientEmail } from './elements/email-recipient';
import { RecipientButton } from './elements/button-recipient';

// Build "recipient" component
const Recipient = ({
	userName,
	userEmail,
	userImage,
	userConfirmed = false,
	isAdded = true,
	appearance,
	...props
}) => {
	const is = {};
	const set = {};

	// Parameter(s) validation.
	is.themeEnabled = !isUndefined(appearance) && !isEmpty(appearance);
	is.name = !isUndefined(userName) && !isEmpty(userName) ? true : false;
	is.email = !isUndefined(userEmail) && !isEmpty(userEmail) ? true : false;
	is.image = !isUndefined(userImage) && isObject(userImage) ? true : false;

	// Define recipient class.
	set.class = 'sui-recipient';

	// Define recipient appearance.
	if (is.themeEnabled) {
		set.class += ' sui-recipient--' + appearance;
	}

	set.markup = (
		<Fragment>
			<div className="sui-recipient__info">
				<Avatar className="sui-recipient__avatar" {...(userConfirmed && { status: 'confirmed' })} {...(is.image && { image: userImage })}/>
				{(is.name || is.email) && (
					<div className="sui-recipient__details">
						{is.name && <RecipientName>{userName}</RecipientName>}
						{is.email && <RecipientEmail>{userEmail}</RecipientEmail>}
					</div>
				)}
			</div>
			<div className="sui-recipient__actions">
				{!isAdded && (
					<RecipientButton className="sui-recipient__button" icon="add" color="black">Add recipient</RecipientButton>
				)}
				{isAdded && (
					<Fragment>
						<RecipientButton className="sui-recipient__button" icon="submit" color="black">Send recipient</RecipientButton>
						<RecipientButton className="sui-recipient__button" icon="trash" color="red">Delete recipient</RecipientButton>
					</Fragment>
				)}
			</div>
		</Fragment>
	);

	return createElement(
		'div',
		{
			className: set.class,
			...props
		},
		set.markup
	);
};

// Publish required component.
export { Recipient };
