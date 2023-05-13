import React, { Fragment, useState, useEffect } from "react";
import { isUndefined, isEmpty, isNumber, isFunction } from '@wpmudev/react-utils';

import { IconButton } from '@wpmudev/react-icon-button';

export const Announcement = ({
	id,
	children,
	timeIn,
	timeOut,
	isDark = false,
	isVisible = false,
	onClick
}) => {
	const has = {};
	const is = {};
	const set = {};

	has.id = !isUndefined(id) && !isEmpty(id) ? true : false;
	has.content = !isUndefined(children) && !isEmpty(children) ? true : false;
	has.timeIn = isNumber(timeIn) && timeIn >= 0 ? true : false;
	has.timeOut = isNumber(timeOut) && timeOut >= 0 ? true : false;

	if (!has.title && !has.content) {
		throw new Error(
			`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Announcement\n\nThe "Title" and "Children" components require some value to be passed to it.\n\n`
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

	set.class = 'sui-announcement';

	if (isDark) {
		set.class += ' sui-announcement--dark';
	}

	if (!is.visible) {
		set.class += ' sui-announcement--empty';
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
					{has.content && (
						<span className="sui-announcement__content">
							{ children }
						</span>
					)}
					<IconButton
						icon="close"
						label="Close"
						appearance="tertiary"
						color="white"
						className="sui-announcement__button"
						isSmall={true}
						onClick={(e) => {
							set.visible(false);

							if (isFunction(onClick)) {
								onClick(e);
							}
						}} />
				</Fragment>
			)}
		</div>
	);
}
