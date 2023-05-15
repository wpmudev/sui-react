import React, { Fragment } from 'react';
import { isUndefined, isEmpty, isNumber, isObject, isFunction } from '@wpmudev/react-utils';

// Import required module(s)
import { AlertDialog } from '@wpmudev/react-alertdialog';
import { Box, BoxGroup } from '@wpmudev/react-box';
import { Button } from '@wpmudev/react-button';
import { IconButton } from '@wpmudev/react-icon-button';

// Build modal component
const Modal = ({
	id,
	title,
	icon,
	isSmall,
	content,
	footer,
	timer,
	trigger,
	onClick,
	...props
}) => {
	const has = {};
	const set = {};

	// Props validation
	has.id = !isUndefined(id) && !isEmpty(id) ? true : false;
	has.title = !isUndefined(title) && !isEmpty(title) ? true : false;
	has.icon = !isUndefined(icon) && !isEmpty(icon) ? true : false;
	has.timer = isNumber(timer) && timer > 0 ? true : false;

	if ( !has.id ) {
		throw new Error(
			`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Modal\n\nThe "ID" argument requires some value to be passed to it.\n\n`
		);
	}

	if ( !has.title ) {
		throw new Error(
			`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Modal\n\nThe "title" argument requires some value to be passed to it.\n\n`
		);
	}

	// Define icon object
	set.icon = Object.assign(
		{
			name: has.icon && isObject(icon) ? '' : icon,
			color: '',
			class: 'suicons' // Define icon main class
		},
		has.icon && isObject(icon) ? icon : ''
	);

	// Re-validate icon prop
	has.icon = !isUndefined(set.icon.name) && !isEmpty(set.icon.name) ? true : false;

	// Define icon color
	switch (set.icon.color) {
		case 'blue':
			set.icon.class += ' sui-color-primary--50';
			break;

		case 'green':
			set.icon.class += ' sui-color-success--50';
			break;

		case 'yellow':
			set.icon.class += ' sui-color-warning--50';
			break;

		case 'red':
			set.icon.class += ' sui-color-error--50';
			break;

		default:
			// do nothing
			break;
	}

	// Define icon size
	set.icon.class += ' suicons--lg';

	// Define modal content
	set.content = ({ closeModal }) => {
		return (
			<Box>
				<BoxGroup>
					<div slot="left">
						{ has.icon && (
							<span
								className={`${set.icon.class} suicons--${set.icon.name} sui-box-group__item`}
								aria-hidden="true" />
						)}
						<h3 id={`${id}__title`} className="sui-heading sui-heading--h4 sui-box-group__item">{title}</h3>
					</div>
					<div slot="right">
						<IconButton
							icon="close"
							label="Close modal"
							appearance="tertiary"
							color="black"
							isSmall={true}
							onClick={(e) => {
								closeModal();

								if (isFunction(onClick)) {
									onClick(e);
								}
							}} />
					</div>
				</BoxGroup>
				{ isFunction(content) && content({ closeModal }) }
				{ isFunction(footer) && (
					<BoxGroup>
						<div slot="left" />
						<div slot="right">
							{footer({ closeModal })}
						</div>
					</BoxGroup>
				)}
			</Box>
		);
	};

	// Define alert dialog props
	set.props = {
		dialogId: id,
		titleText: `${id}__title`,
		isSmall: isSmall,
		...(has.timer && {triggerTimer: timer}),
		...(isFunction(trigger) && {triggerContent: trigger}),
		modalContent: set.content,
		...props
	}

	return (
		<AlertDialog { ...set.props } />
	);
}

// Publish component(s)
export { Modal }
