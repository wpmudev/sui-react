import React from "react"

// Import required component.
import { RichTextEditor as SuiRichTextEditor } from "../src"

// Import documentation main page.
import docs from "./RichTextEditor.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Simple Elements/Rich Text Editor",
	component: SuiRichTextEditor,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Tag" story.
const RichTextEditor = ({ color, ...props }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiRichTextEditor {...props}>
						{`import React from 'react';

const MyComponent = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a basic React functional component.</p>
    </div>
  );
};

export default MyComponent;
`}
					</SuiRichTextEditor>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
RichTextEditor.args = {
	filename: "App.js",
	language: "javascript",
	allowCopy: true,
	displayLineNumbers: true,
	readOnly: false,
}

// Set controls for story arguments.
RichTextEditor.argTypes = {
	filename: {
		name: "Filename",
		control: {
			type: "text",
		},
	},
	language: {
		name: "Code Language",
		options: ["markup", "javascript", "css"],
		control: {
			type: "select",
			labels: {
				markup: "Language: HTML",
				javascript: "Language: Javascript",
				css: "Language: CSS",
			},
		},
	},
	allowCopy: {
		name: "Allow Copy",
		control: {
			type: "boolean",
		},
	},
	displayLineNumbers: {
		name: "Line numbers",
		control: {
			type: "boolean",
		},
	},
	readOnly: {
		name: "Read Only",
		control: {
			type: "boolean",
		},
	},
}

// Publish required stories.
export { RichTextEditor }
