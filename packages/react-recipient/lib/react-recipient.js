import React, { Fragment, createElement } from 'react';
import { isEmpty, isUndefined, isObject } from '@wpmudev/react-utils';

import { Avatar } from '../../react-avatar';
import { IconButton } from '../../sui-icon-button/lib/react-icon-button';

// Build "recipient" component
const Recipient = ({}) => {
	const has = {};
	const set = {};

	return (
		<div className="sui-recipient"> 
			<div className="sui-recipient__info">
				<span className="sui-recipient__info--name">
					<Avatar status="confirmed" />
					John Doe
				</span>
				<span className="sui-recipient__email">john@email.com</span>
			</div>
			<div className="sui-recipient__actions">
				<IconButton
					icon="submit"
					label="Send recipient"
					appearance="tertiary"
					color="black"
					isSmall={true}
				/>
				<IconButton
					icon="trash"
					label="Delete recipient"
					appearance="tertiary"
					color="red"
					isSmall={true}
				/>
				<IconButton
					icon="add"
					label="Add recipient"
					appearance="tertiary"
					color="black"
					isSmall={true}
				/>
			</div>
		</div>
	);
};

// Publish required component.
export { Recipient };
