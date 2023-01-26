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
	copy,
	content,
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
					<SuiCodeSnippet copy={copy} content={content} />
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
CodeSnippet.args = {
copy: true,
content: `// Code Starts
<div class=”className”>
    <a href=”#”> Link </a>
</div>`
};

// Set controls for story arguments.
// CodeSnippet.argTypes = {
// 	example: {
// 		name: 'Example',
// 		control : {
// 			type: 'select',
// 			options: {
// 				'Example: Default': 'span',
// 				'Example: Link': 'link',
// 				'Example: Basic Button': 'button'
// 			}
// 		}
// 	},
// 	label: {
// 		name: 'Label',
// 		table: {
// 			category: 'Elements'
// 		}
// 	},
// 	size: {
// 		name: 'Size',
// 		control: {
// 			type: 'select',
// 			options: {
// 				'Size: Default': '',
// 				'Size: Small': 'sm'
// 			}
// 		},
// 		table: {
// 			category: 'Modifiers'
// 		}
// 	},
// 	color: {
// 		name: 'Color',
// 		control: {
// 			type: 'select',
// 			options: {
// 				'Color: Default': 'default',
// 				'Color: Blue': 'blue',
// 				'Color: Yellow': 'yellow',
// 				'Color: Red': 'red',
// 				'Color: Green': 'green',
// 				'Color: White': 'white',
// 				'Color: Black': 'black',
// 				'Color: Dark Blue': 'dark-blue',
// 			}
// 		},
// 		table: {
// 			category: 'Modifiers'
// 		},
// 	},
// 	style: {
// 		name: 'Style',
// 		control: {
// 			type: 'select',
// 			options: {
// 				'Style: Default': 'default',
// 				'Style: Truncated': 'truncated',
// 				'Style: Multiline': 'multiline',
// 			}
// 		},
// 		table: {
// 			category: 'Modifiers'
// 		},
// 	},
// 	uppercase: {
// 		name: 'Uppercase',
// 		table: {
// 			category: 'Modifiers'
// 		}
// 	},
// 	disabled: {
// 		name: 'Disabled',
// 		table: {
// 			category: 'States'
// 		}
// 	}
// };

// Publish required stories.
export { CodeSnippet };
