// import React from 'react';
// import { isUndefined, isEmpty } from '@wpmudev/react-utils';
//
// // Build "Icon" component.
// const Icon = ({ name }) => {
// 	const has = {};
// 	const set = {};
//
// 	// Required parameter(s) validation.
// 	has.name = !isUndefined(name) && !isEmpty(name) ? true : false;
//
// 	if (!has.name) {
// 		throw new Error(
// 			`Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n`
// 		);
// 	}
//
// 	// Define suicons main class.
// 	set.class = 'suicons';
//
// 	// Define icon name.
// 	set.class += ' suicons--' + name;
//
// 	// Define icon size.
// 	set.class += ' suicons--md';
//
// 	return (
// 		<span className="sui-button__icon" aria-hidden="true">
// 			<span className={set.class} />
// 		</span>
// 	);
// };
//
// // Publish required component(s).
// export { Icon };
