import React from 'react';

// Import required component(s)
import { Dropdown as SuiDropdown, IconDropdown } from '../lib/react-dropdown';

// Import documentation main page
import docs from './ReactDropdown.mdx';

// Configure default options
export default {
	title: 'SUI/Components/Compound Elements/Dropdown',
	component: SuiDropdown,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build story
export const Dropdown = ({ example, ...props }) => {
	const set = {};

	set.box = {
		margin: 0,
		padding: '30px',
		border: 'white' === props.color ? '1px solid #E6E6E6' : 0,
		borderRadius: '4px',
		background: 'white' === props.color ? '#333' : '#fff',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={set.box}>
					{'standard' === example && (
						<SuiDropdown {...props}>
							<div>Option One</div>
							<div>Option Two</div>
							<div>Option Three</div>
							<div>Option Four</div>
						</SuiDropdown>
					)}

					{'standard-icon' === example && (
						<SuiDropdown {...props}>
							<div icon="plugin-hustle">Option One</div>
							<div icon="plugin-hustle">Option Two</div>
							<div icon="plugin-hustle">Option Three</div>
							<div icon="plugin-hustle">Option Four</div>
						</SuiDropdown>
					)}

					{'link-options' === example && (
						<SuiDropdown {...props}>
							<div href="https://wpmudev.com/">Option One</div>
							<div href="https://wpmudev.com/">Option Two</div>
							<div href="https://wpmudev.com/">Option Three</div>
							<div href="https://wpmudev.com/">Option Four</div>
						</SuiDropdown>
					)}

					{'click-options' === example && (
						<SuiDropdown {...props}>
							<div onClick={() => console.log('Option one selected')}>Option One</div>
							<div onClick={() => console.log('Option two selected')}>Option Two</div>
							<div onClick={() => console.log('Option three selected')}>Option Three</div>
							<div onClick={() => console.log('Option four selected')}>Option Four</div>
						</SuiDropdown>
					)}
				</div>
			</div>
		</div>
	);
};

Dropdown.args = {
	example: 'standard',
	id: 'myUniqueId',
	label: 'Menu Button',
	isSmall: false,
	hasCta: false,
	isLabelHidden: false,
};

Dropdown.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Standard': 'standard',
				'Example: Option with icon': 'standard-icon',
				'Example: Option with link': 'link-options',
				'Example: Option with action': 'click-options',
			},
		},
	},
	isSmall: {
		name: 'Small'
	},
	hasCta: {
		name: 'CTA Button'
	},
	isLabelHidden: {
		name: 'Icon Button'
	}
};
