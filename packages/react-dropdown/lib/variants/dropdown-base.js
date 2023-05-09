import React from "react";
import {isUndefined, isEmpty} from '@wpmudev/react-utils';

import { Menu } from "../elements/menu";

export const Base = ({id, label, action, className, isSmall = false, children}) => {
	const has = {}
	const set = {}

	// Props validation
	has.id = !isUndefined(id) && !isEmpty(id) ? true : false;
	has.label = !isUndefined(label) && !isEmpty(label) ? true : false;
	has.action = !isUndefined(action) && !isEmpty(action) ? true : false;
	has.class = !isUndefined(className) && !isEmpty(className) ? true : false;

	if (!has.id) {
		throw new Error(
			`Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Dropdown\n\nThe parameter "id" must not be empty.\n\n`
		);
	}

	// Define main class
	set.class = 'sui-dropdown';

	if (isSmall) {
		set.class += ' sui-dropdown--sm';
	}

	if (has.class) {
		set.class += ` ${className}`;
	}

	return (
		<div className={set.class}>
			{has.label && (
				<label id={`${id}__label`} className="sui-screen-reader-only">{label}</label>
			)}

			{action}

			<Menu id={id} hasLabel={has.label}>{children}</Menu>
		</div>
	);
}
