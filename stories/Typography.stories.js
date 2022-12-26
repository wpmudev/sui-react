import React from 'react';

// Import documentation main page.
import docs from './content/Typography/Main.mdx';

// Import required styles.
import "../src/_core/_typography.scss";

// Configure default options.
export default {
	title: 'SUI/CSS Framework/Typography',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
		actions: {
			disable: true,
		},
	},
};

// Build "Typography" story.
const Typography = ({
	style,
	sizeHeading,
	sizeSubtitle,
	sizeBody,
	align,
	children,
}) => {
	const hasAlign = 'undefined' !== typeof align && '' !== align;
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: '#FFF',
		textAlign: hasAlign ? align : 'left',
	};

	let content;

	switch (style) {
		case 'heading':
			content = <Heading type={sizeHeading}>{children}</Heading>;
			break;

		case 'subtitle':
			content = (
				<Subtitle small={'small' === sizeSubtitle ? true : false}>
					{children}
				</Subtitle>
			);
			break;

		case 'caption':
		case 'overline':
			content = <p className={`sui-${style}`}>{children}</p>;
			break;

		default:
			content = (
				<Paragraph small={'small' === sizeBody ? true : false}>
					{children}
				</Paragraph>
			);
			break;
	}

	return (
		<div className="sui-layout sui-layout--spacing sui-layout--justify">
			<div className="sui-layout__content">
				<div style={boxStyles}>{content}</div>
			</div>
		</div>
	);
};
Typography.args = {
	style: 'paragraph',
	sizeHeading: 'h1',
	sizeBody: 'normal',
	sizeSubtitle: 'normal',
	align: 'left',
	children: 'The quick brown fox jumps over the lazy dog.',
};
Typography.argTypes = {
	style: {
		name: 'Text Style',
		control: {
			type: 'select',
			options: {
				Heading: 'heading',
				Subtitle: 'subtitle',
				Paragraph: 'paragraph',
				Caption: 'caption',
				Overline: 'overline',
			},
		},
	},
	sizeHeading: {
		name: 'Heading Size',
		control: {
			type: 'select',
			options: {
				'Heading 1': 'h1',
				'Heading 2': 'h2',
				'Heading 3': 'h3',
				'Heading 4': 'h4',
				'Heading 5': 'h5',
			},
		},
		if: {
			arg: 'style',
			eq: 'heading',
		},
	},
	sizeSubtitle: {
		name: 'Font Size',
		control: {
			type: 'inline-radio',
			options: {
				Normal: 'normal',
				Small: 'small',
			},
		},
		if: {
			arg: 'style',
			eq: 'subtitle',
		},
	},
	sizeBody: {
		name: 'Font Size',
		control: {
			type: 'inline-radio',
			options: {
				Normal: 'normal',
				Small: 'small',
			},
		},
		if: {
			arg: 'style',
			eq: 'paragraph',
		},
	},
	align: {
		name: 'Alignment',
		control: {
			type: 'inline-radio',
			options: {
				Left: 'left',
				Center: 'center',
				Right: 'right',
			},
		},
	},
	children: {
		name: 'Demo Content',
	},
};

// Build "Heading" component.
const Heading = ({ type, children }) => {
	const hasType = type && 'undefined' !== typeof type && '' !== type;
	const setType = ' sui-heading--' + type;

	return <h1 {...(hasType && { className: setType })}>{children}</h1>;
};

// Build "Subtitle" component.
const Subtitle = ({ small, children }) => {
	const isSmall = 'boolean' === typeof small && small;
	const setSmall = isSmall ? ' sui-subtitle--sm' : '';

	return <h2 className={`sui-subtitle${setSmall}`}>{children}</h2>;
};

// Build "Paragraph" component.
const Paragraph = ({ small, children }) => {
	const isSmall = 'boolean' === typeof small && small;

	if (isSmall) {
		return (
			<p>
				<small>{children}</small>
			</p>
		);
	}

	return <p>{children}</p>;
};

// Publish required stories.
export { Typography };
