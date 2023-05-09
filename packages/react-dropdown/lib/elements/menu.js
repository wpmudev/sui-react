import React, {Children, Fragment, createElement, useState} from "react";
import {isUndefined, isEmpty, isFunction} from '@wpmudev/react-utils';

import { Button } from "@wpmudev/react-button";

export const Menu = ({id, hasLabel = false, hasCta = false, children}) => {
	const is = {};
	const has = {};
	const set = {};

	[is.current, set.current] = useState(0);

	// Props validation
	has.id = !isUndefined(id) && !isEmpty(id) ? true : false;
	has.children = !isUndefined(children) && !isEmpty(children) ? true : false;

	if (!has.id) {
		throw new Error(
			`Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Dropdown\n\nThe parameter "id" must not be empty.\n\n`
		);
	}

	// List menu items
	set.items = Children.map( children, (item, index) => {
		const is = {};
		const has = {};
		const set = {};

		// Define and validate `icon` prop
		set.itemIcon = item.props.icon;
		has.itemIcon = !isUndefined(set.itemIcon) && !isEmpty(set.itemIcon) ? true : false;

		// Define and validate `href` prop
		set.itemLink = item.props.href;
		has.itemLink = !isUndefined(set.itemLink) && !isEmpty(set.itemLink) ? true : false;

		// Define and validate `onClick` prop
		set.itemClick = item.props.onClick;
		has.itemClick = isFunction(set.itemClick) ? true : false;

		// Define option tag name
		set.itemTagName = 'div';

		if (has.itemLink) {
			set.itemTagName = 'a';
		} else if (has.itemClick) {
			set.itemTagName = 'button';
		}

		// Define states
		[is.itemFocus, set.itemFocus] = useState(false);
		[is.itemSelect, set.itemSelect] = useState(false);

		// Define main class
		set.class = 'sui-dropdown__option';

		// Define focus class name
		if (is.itemFocus) {
			set.class += ' sui-option__focus';
		}

		set.itemMarkup = (
			<Fragment>
				{has.itemIcon && (
					<span className={`suicons suicons--${set.itemIcon} suicons--sm`} aria-hidden="true" />
				)}
				{item.props.children}
			</Fragment>
		);

		return createElement(
			set.itemTagName,
			{
				role: 'option',
				...(has.itemLink && {href: set.itemLink}),
				id: `${id}-${index}`,
				className: set.class,
				'aria-selected': is.itemSelect,
				...(has.itemClick && {onClick: set.itemClick}),
				onFocus: () => set.itemFocus(true),
				onBlur: () => set.itemFocus(false),
				onClick: (e) => {
					set.itemSelect(!is.itemSelect);
					if (has.itemClick) {
						onClick(e);
					}
				}
			},
			set.itemMarkup
		);
	});

	return (
		<div
			role="listbox"
			id={id}
			className="sui-dropdown__menu"
			{... (hasLabel && { 'aria-labelledby': `${id}__label` })}
			tabIndex="-1">
			{set.items}
			{ hasCta && (
				<Button appearance="primary" color="blue" iconLead="hub" isSmall={true}>
					Unlock bonus features
				</Button>
			)}
		</div>
	);
}
