import React from "react";

// Import required component.
import { CodeSnippet as SuiCodeSnippet } from '../lib/react-code-snippet';

// Import documentation main page.
import docs from './ReactCodeSnippet.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Code Snippet',
	component: SuiCodeSnippet,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Tag" story.
const CodeSnippet = ({ 
	type,
	copy,
	code,
	color,
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== 'white' ? '#fff' : '#333',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiCodeSnippet type={type} copy={copy} code={code} />
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
CodeSnippet.args = {
	type: 'markup',
	copy: true,
	code: `<!-- Code Starts -->
	<div class=”className”>
		<a href=”#”> Link </a>
	</div>`
};

// Set controls for story arguments.
CodeSnippet.argTypes = {
	type: {
		name: 'Code Type',
		control: {
			type: 'select',
			options: {
				'Type: HTML': 'markup',
				'Type: Javascript': 'javascript',
				'Type: CSS': 'css'
			}
		}
	},
	copy: {
		name: 'Copy Button',
	},
	code: {
		name: 'Code'
	}
};

// Publish required stories.
export { CodeSnippet };
