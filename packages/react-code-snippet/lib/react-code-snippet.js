import React, { createElement, useState, useEffect } from 'react';
import { Tooltip } from '@wpmudev/react-tooltip';
import Prism from 'prismjs';
import dedent from 'dedent';
import { isUndefined, isEmpty } from '@wpmudev/react-utils';

const CodeSnippet = ({
	language = 'markup',
	copy = true,
	className = '',
	children,
}) => {
	const is = {};
	const set = {};

	// validation
	is.children = !isUndefined(children) && !isEmpty(children) ? true : false;

	// set default values
	set.class = 'sui-code-snippet';
	set.language = language;
	[set.copied, set.setCopied] = useState(false);

	// copy text to clipboard
	set.copyCode = (text) => {
		navigator.clipboard.writeText(text);
		set.setCopied(true);
	};

	if (is.children) {
		set.children = children;
		dedent(set.children);
	}

	if (!isEmpty(className)) {
		set.class += ` ${className}`;
	}

	// highlight the code
	useEffect(() => {
		Prism.highlightAll();
	}, [set.language]);

	// Markup of html
	set.codeHTML = createElement(
		'pre',
		{},
		createElement(
			'code',
			{
				className: `language-${set.language}`,
			},
			set.children
		)
	);

	set.copyHTML = createElement(
		Tooltip,
		{
			label: 'Copy',
			theme: 'secondary',
			color: 'black',
			position: 'top',
			'aria-label': set.copied ? 'Copied' : '',
			onMouseLeave: () => set.setCopied(false),
			onClick: () => set.copyCode(code),
			customWidth: '65',
		},
		set.copied && 'Copied'
	);

	return createElement(
		'div',
		{
			className: set.class,
		},
		set.codeHTML,
		copy && set.copyHTML
	);

	// return code ? (
	// 	<div className={classes}>
	// 		<pre>
	// 			<code className={`language-${language}`}>{code}</code>
	// 		</pre>
	// 		{copy && (
	// 			<Tooltip
	// 				label="Copy"
	// 				theme="secondary"
	// 				color="black"
	// 				position="top"
	// 				aria-label={set.copied ? 'Copied' : ''}
	// 				onMouseLeave={() => set.setCopied(false)}
	// 				onClick={() => copyCode(code)}
	// 				customWidth="65"
	// 			>
	// 				{set.copied ? 'Copied' : ''}
	// 			</Tooltip>
	// 		)}
	// 	</div>
	// ) : (
	// 	''
	// );
};

export { CodeSnippet };
