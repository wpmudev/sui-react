import React from 'react';

// Import required component
import { Footer as SuiFooter } from '../lib/react-footer';

// Configure default options
export default {
	title: 'SUI/Components/Compound Elements/Footer',
	component: SuiFooter,
	parameters: {
		layout: 'fullscreen',
		// docs: {
		// 	page: docs,
		// },
	},
};

// Build footer story
const Footer = ({ example }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<SuiFooter />
			</div>
		</div>
	);
};

// Set story arguments
Footer.args = {};

// Set controls for story arguments
Footer.argTypes = {};

// Publish required stories
export { Footer };
