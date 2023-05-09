import React from "react";
import {isUndefined, isEmpty} from '@wpmudev/react-utils';

import { Base } from "./dropdown-base";
import { IconButton } from '@wpmudev/react-icon-button';

export const IconDropdown = ({id, label, isSmall = false, hasCta = true, children}) => {
	const has = {}
	const set = {}

	// Props validation
	has.id = !isUndefined(id) && !isEmpty(id) ? true : false;
	has.label = !isUndefined(label) && !isEmpty(label) ? true : false;

	if (!has.id) {
		throw new Error(
			`Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Dropdown\n\nThe parameter "id" must not be empty.\n\n`
		);
	}

	// Define button props
	set.props = {
		icon: 'add',
		label: 'Select',
		appearance: 'secondary',
		color: 'black',
		className: 'sui-dropdown__button',
		isSmall: isSmall,
		'aria-controls': id,
		'aria-expanded': false,
		'aria-haspopup': 'listbox',
		...(has.label && {'aria-labelledby': `${id}__label`}),
		'aria-activedescendant': '',
		role: 'combobox',
		tabIndex: 0
	}

	return (
		<Base
			id={id}
			label={label}
			action={(
				<IconButton {...set.props} />
			)}
			hasCta={hasCta}
			isSmall={isSmall}>
				{children}
		</Base>
	);
}
