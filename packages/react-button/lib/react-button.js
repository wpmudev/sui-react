import React, { Fragment, Children, createElement } from 'react';
import { isBoolean, isEmpty, isObject, isUndefined } from '@wpmudev/react-utils';

// Build "Button" component.
const Button = ({
	href,
	target,
	mode,
	theme,
	color,
	size,
	position,
	loading,
	disabled,
	children,
	...props
}) => {
	// When provided renders button as a link.
	const isButton = isUndefined(href) ? true : false;

	// When provided sets the button in disabled mode.
	const isDisabled = isBoolean(disabled) && disabled ? true : false;

	// When provided sets the button in loading mode.
	const isLoading = isBoolean(loading) && loading ? true : false;

	// Set button props prefix.
	const btn = {};

	// Renders button as a link.
	btn.link = href;

	// Determine where to open the link when `href` is available.
	btn.target = target || '_blank';

	// Renders button class name.
	btn.class = 'sui-button';

	switch (mode) {
		case 'toggle':
			btn.class += ' sui-button--toggle';
			// Determines the position of the toggle button.
			switch (position) {
				case 'left':
				case 'middle':
				case 'right':
					btn.class += ' sui-button--' + position;
					break;

				default:
					btn.class += ' sui-button--middle';
					break;
			}
			break;

		default:
			btn.class += ' sui-button--default';
			// Renders the theme of the button.
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
			// Renders the color of the button.
			if ( !isUndefined(color) && !isEmpty(color) ) {
				btn.class += ' sui-button--' + color;
			} else {
				btn.class += ' sui-button--blue';
			}
			// Determines the size of the button.
			switch (size) {
				case 'sm':
					btn.class += ' sui-button--' + size;
					break;

				default:
					// Do nothing.
					break;
			}
			break;
	}

	if ( isLoading ) {
		btn.class += ' sui-button--loading';
	}

	if ( isDisabled ) {
		btn.class += ' sui-button--disabled';
	}

	// Renders button elements.
	btn.elements = Children.map( children, (child, index) => {
		return (
			<Fragment key={index}>
				{ 'icon' === child.props.slot && (
					<ButtonIcon
						name={child.props.name}
						size={child.props.size} />
				)}
				{ 'label' === child.props.slot && (
					<ButtonLabel hidden={child.props.hidden}>
						{ child.props.children }
					</ButtonLabel>
				)}
			</Fragment>
		);
	});

	// Renders button content.
	btn.markup = (
		<Fragment>
			{ isBoolean(loading) && (
				<Fragment>
					{ loading && <ButtonLoader /> }
					{ !loading && btn.elements }
				</Fragment>
			)}
			{ !isBoolean(loading) && btn.elements }
		</Fragment>
	);

	// Renders button tag.
	btn.tag = 'button';

	if (!isButton) {
		btn.tag = 'a';
	}

	// Renders button main layout.
	return (
		<Fragment>
			{ isButton && (
				<button
					className={ btn.class }
					{ ... ( isBoolean(loading) && { 'aria-live': 'polite' } ) }
					{ ... ( isBoolean(loading) && { 'aria-busy': loading } ) }
					{ ... ( (isDisabled || isLoading) && { disabled: '' } ) }
					{ ...props }>
					{ btn.markup }
				</button>
			)}

			{ !isButton && (
				<a
					href={ btn.link }
					target={ btn.target }
					className={ btn.class }
					{ ... ( isBoolean(loading) && { 'aria-live': 'polite' } ) }
					{ ... ( isBoolean(loading) && { 'aria-busy': loading } ) }
					{ ... ( (isDisabled || isLoading) && { disabled: '' } ) }
					{ ...props }>
					{ btn.markup }
				</a>
			)}
		</Fragment>
	);
}

const ButtonLabel = ({ hidden, children }) => {
	if ( isBoolean(hidden) && hidden ) {
		return <span className="sui-screen-reader-text">{ children }</span>;
	}

	return <span className="sui-button__label">{ children }</span>;
}

const ButtonIcon = ({ name, size }) => {
	const hasName = (!isUndefined(name) && !isEmpty(name)) ? true : false;

	let setSize;

	switch (size) {
		case 'sm':
		case 'md':
			setSize = 'suicons--' + size;
			break;

		default:
			setSize = 'suicons--md';
			break;
	}

	return (
		<span
			className={`suicons${hasName ? ' suicons--' + name : ''} ${setSize} sui-button__icon`}
			aria-hidden="true" />
	);
}

const ButtonLoader = ({ label, spacing }) => {
	const hasDoubleSpacing = isBoolean(spacing) && spacing ? true : false;

	return (
		<Fragment>
			<span className={`suicons suicons--spinner-alt suicons--md sui-animate--spin sui-button__icon${hasDoubleSpacing ? ' sui-hspacing--lg' : ''}`} aria-hidden="true" />
			<span className="sui-screen-reader-text">
				{ (!isUndefined(label) && !isEmpty(label))
					? label
					: 'Button on load'
				}
			</span>
		</Fragment>
	);
}

// Publish required component.
export { Button }
