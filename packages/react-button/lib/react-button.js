import React, { Fragment } from 'react';
import { isBoolean, isEmpty, isObject, isUndefined } from '@wpmudev/react-utils';

// Build "Button" component.
const Button = ({ href, target, theme, color, size, icon, loading, disabled, children, ...props }) => {
	// When provided renders button as a link.
	const isButton = isUndefined(href) ? true : false;

	// Set button props prefix.
	const btn = {};

	// Renders button as a link.
	btn.link = href;

	// Determine where to open the link when `href` is available.
	switch (target) {
		case '_self':
		case '_blank':
		case '_parent':
		case '_top':
			btn.target = target;
			break;

		default:
			btn.target = '_blank';
			break;
	}

	// Renders button class name.
	btn.class = 'sui-button';

	switch (theme) {
		case 'primary':
		case 'secondary':
		case 'tertiary':
			btn.class += ' sui-button--' + theme;
			break;

		default:
			btn.class += ' sui-button--primary';
			break;
	}

	switch (color) {
		case 'blue':
		case 'black':
		case 'red':
		case 'hub':
		case 'white':
			btn.class += ' sui-button--' + color;
			break;

		default:
			btn.class += ' sui-button--blue';
			break;
	}

	if ( !isEmpty(size) && !isUndefined(size) ) {
		btn.class += ' sui-button--' + size;
	}

	if ( isBoolean(loading) && loading ) {
		btn.class += ' sui-button--loading';
	}

	if ( isBoolean(disabled) && disabled ) {
		btn.class += ' sui-button--disabled';
	}

	// Renders icon element.
	btn.icon = Object.assign(
		{
			name: !isObject(icon) ? icon : '',
			size: 'md',
			position: 'lead',
			label: ''
		},
		icon
	);

	const hasIcon = !isUndefined(btn.icon.name) && !isEmpty(btn.icon.name);

	// Renders button markup.
	btn.markup = (
		<Fragment>
			{ isBoolean(loading) && (
				<Fragment>
					{ loading && (
						<Icon icon={ btn.icon.name } { ... ( !isEmpty(btn.icon.label) && { label: btn.icon.label } ) } loading={ loading } />
					)}

					{ !loading && (
						<Fragment>
							{ (hasIcon && btn.icon.position === 'lead') && <Icon icon={ btn.icon.name } /> }
							{ (!isUndefined(children) && !isEmpty(children)) && (
								<span className="sui-button__label">{ children }</span>
							)}
							{ (hasIcon && btn.icon.position === 'trail') && <Icon icon={ btn.icon.name } /> }
						</Fragment>
					)}
				</Fragment>
			)}

			{ !isBoolean(loading) && (
				<Fragment>
					{ (hasIcon && btn.icon.position === 'lead') && <Icon icon={ btn.icon.name } /> }
					{ (!isUndefined(children) && !isEmpty(children)) && (
						<span className="sui-button__label">{ children }</span>
					)}
					{ (hasIcon && btn.icon.position === 'trail') && <Icon icon={ btn.icon.name } /> }
				</Fragment>
			)}
		</Fragment>
	);

	return (
		<Fragment>
			{ isButton && (
				<button className={ btn.class } { ...props }>
					{ btn.markup }
				</button>
			)}

			{ !isButton && (
				<a
					href={ btn.link }
					target={ btn.target }
					className={ btn.class }
					{ ...props }>
					{ btn.markup }
				</a>
			)}
		</Fragment>
	);
};

const Icon = ({ icon, label, loading }) => {
	const i = {};

	// Renders icon class name.
	i.class = 'sui-button__icon suicons suicons--md';

	if ( isBoolean(loading) ) {
		i.class += ' suicons--spinner-alt';
	} else {
		if ( !isUndefined(icon) && !isEmpty(icon) ) {
			i.class += ' suicons--' + icon;
		}
	}

	return (
		<Fragment>
			<span className={ i.class } aria-hidden="true" />
			{ isBoolean(loading)
				? (!isUndefined(label) && !isEmpty(label))
					? <span className="sui-screen-reader-text">{label}</span>
					: <span className="sui-screen-reader-text">Button on load</span>
				: (!isUndefined(label) && !isEmpty(label))
					? <span className="sui-screen-reader-text">{label}</span>
					: ''
			}
		</Fragment>
	);
}

// Publish required component.
export { Button }
