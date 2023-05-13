import React, { Children, Fragment, createElement } from 'react';
import { isEmpty, isUndefined } from '@wpmudev/react-utils';

// Build menu component
const Menu = ({ children }) => {
	const set = {};

	// Count total menu items
	set.total = children.length;
	set.last = set.total - 1;

	set.content = Children.map(children, (item, index) => {
		return (
			<Fragment>
				<li className="sui-menu__list">
					<MenuItem key={index} {...item.props}>
						{item.props.label}
					</MenuItem>
					{(index !== set.last) && (
						<span className="sui-menu__break" aria-hidden="true" tabIndex="-1">|</span>
					)}
				</li>
			</Fragment>
		);
	});

	return (
		<ul className="sui-menu">
			{ set.content }
		</ul>
	);
}

// Build menu item
const MenuItem = ({ href, className, children, ...props }) => {
	const has = {};
	const set = {};

	// Validate props
	has.link = !isUndefined( href ) && !isEmpty( href ) ? true : false;
	has.class = !isUndefined( className ) && !isEmpty( className ) ? true : false;

	// Define element tag name
	set.tag = 'span';

	if ( has.link ) {
		set.tag = 'a';
	}

	// Define class name
	set.class = 'sui-menu__item';

	if ( has.link ) {
		set.class += ' sui-menu-link';
	}

	if ( has.class ) {
		set.class += ` ${className}`;
	}

	return createElement(
		set.tag,
		{
			...( has.link && { href: href }),
			className: set.class,
			...props
		},
		children
	);
}

// Publish component(s)
export { Menu }
