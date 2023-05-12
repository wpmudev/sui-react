import React, { Children, Fragment } from 'react';

// Import required component
import { FieldList as SuiFieldList } from '../lib/react-field-list';
import { Box, BoxGroup } from '@wpmudev/react-box';

// Import documentation main page
import docs from './ReactFieldList.mdx';

// Configure default options
export default {
	title: 'SUI/Components/Compound Elements/Field List',
	// component: SuiFieldList,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Field List" story
const FieldList = ({ example, ...args }) => {
	// Array numbers from 1 to n.
	const createList = (topNumber) => {
		const listNumbers = [];
		topNumber = topNumber + 1;

		for (let i = 1; i < topNumber; i++) {
			listNumbers.push(i);
		}

		return listNumbers;
	};

	const items = createList(4);

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<SuiFieldList {...args}>
					{items.map((item, key) => (
						<div
							key={`sample-${item}--${key}`}
							id={`sample-${item}--${key}`}
							label={`Label ${item}`} />
					))}
				</SuiFieldList>
			</div>
		</div>
	);
};

// Set story arguments.
FieldList.args = {
	label: 'This is the title',
	helper: 'This is example the description for field list.'
};

// Set controls for story arguments.
FieldList.argTypes = {};

// Publish required stories.
export { FieldList };
