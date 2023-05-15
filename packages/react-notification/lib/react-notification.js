import React, { Fragment, useState, useEffect } from "react";
import { isUndefined, isEmpty, isNumber, isFunction } from '@wpmudev/react-utils';

import { Button } from '@wpmudev/react-button';
import { IconButton } from '@wpmudev/react-icon-button';

export const Notification = ({
	id,
	title,
	action,
	children,
	state,
	timeIn,
	timeOut,
	isSmall = true,
	isInline = false,
	isVisible = false,
	isCloseButton = false,
	onClick
}) => {
	const has = {};
	const is = {};
	const set = {};

	set.action = Object.assign(
		{
			label: '',
			href: '',
			target: '_blank',
			onClick: ''
		},
		action
	);

	has.id = !isUndefined(id) && !isEmpty(id) ? true : false;
	has.title = !isUndefined(title) && !isEmpty(title) ? true : false;
	has.content = !isUndefined(children) && !isEmpty(children) ? true : false;
	has.timeIn = isNumber(timeIn) && timeIn > 0 ? true : false;
	has.timeOut = isNumber(timeOut) && timeOut > 0 ? true : false;
	has.action = !isEmpty(set.action.label) ? true : false;

	if (!has.title && !has.content) {
		throw new Error(
			`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Notification\n\nThe "Title" and "Children" components require some value to be passed to it.\n\n`
		);
	}

	// Display states
	[is.visible, set.visible] = useState(isVisible);

	// Run functions on load
	useEffect(() => {
		if ( has.timeIn ) {
			setTimeout( () => set.visible(true), timeIn );
		}

		if ( has.timeOut ) {
			setTimeout( () => set.visible(false), timeOut );
		}
	}, []);

	set.class = 'sui-notification';
	set.icon = 'suicons';

	if (isInline) {
		set.class += ' sui-notification--inline';
	} else {
		set.class += ' sui-notification--toast';
	}

	switch (state) {
		case 'success':
			set.class += ' sui-notification--' + state;
			set.icon += ' suicons--check-alt';
			break;

		case 'warning':
		case 'error':
			set.class += ' sui-notification--' + state;
			set.icon += ' suicons--warning';
			break;

		default:
			set.class += ' sui-notification--info';
			set.icon += ' suicons--info-alt';
			break;
	}

	set.icon += ' suicons--lg';
	set.icon += ' sui-notification__icon';

	if (!is.visible) {
		set.class += ' sui-notification--empty';
	}

	if (!isSmall) {
		set.class += ' sui-notification--lg';
	}

	set.props = {
		role: has.timeIn ? 'alert' : 'alertdialog',
		className: set.class,
		...( !has.timeIn && { 'aria-modal': true }),
		...( !has.timeIn && { 'aria-labelledby': '' }),
		...( !has.timeIn && { 'aria-describedby': '' }),
	}

	return (
		<div { ...set.props }>
			{ is.visible && (
				<Fragment>
					<span className={ set.icon } aria-hidden="true" />
					<div className="sui-notification__content">
						{has.title && (
							<span className="sui-notification__title">{ title }</span>
						)}
						{has.content && (
							<span className="sui-notification__message">{ children }</span>
						)}
						{has.action && (
							<Button
								{...(!isEmpty(set.action.href) && { href: set.action.href })}
								{...(!isEmpty(set.action.href) && { target: set.action.target })}
								appearance="secondary"
								color="blue"
								isSmall={true}
								className="sui-notification__action"
								{...(isFunction(set.action.onClick) && { onClick: set.action.onClick })}>
								{set.action.label}
							</Button>
						)}
					</div>
					{ isCloseButton && (
						<IconButton
							icon="close"
							label="Close"
							appearance="tertiary"
							color="black"
							className="sui-notification__button"
							isSmall={true}
							onClick={(e) => {
								set.visible(false);

								if (isFunction(onClick)) {
									onClick(e);
								}
							}} />
					)}
				</Fragment>
			)}
		</div>
	);
}
