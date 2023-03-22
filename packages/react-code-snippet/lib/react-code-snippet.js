import React, { useState, useEffect } from 'react';
import { Tooltip } from '../../react-tooltip/lib/react-tooltip';
import Prism from 'prismjs';
import dedent from 'dedent';
import { isUndefined, isEmpty } from '@wpmudev/react-utils';

const CodeSnippet = ({
	language = 'markup',
	copy = true,
	className,
	children,
}) => {
	const [hasCopied, setHasCopied] = useState(false);

	// copy text to clipboard
	const copyCode = (text) => {
		navigator.clipboard.writeText(text);
		setHasCopied(true);
	};

	const code =
		!isUndefined(children) && !isEmpty(children) ? dedent(children) : '';

	let classes = 'sui-code-snippet';

	if (!isUndefined(className) && !isEmpty(className)) {
		classes += ' ' + className;
	}

	// highlight the code
	useEffect(() => {
		Prism.highlightAll();
	}, [language]);

	return code ? (
		<div className={classes}>
			<pre>
				<code className={`language-${language}`}>{code}</code>
			</pre>
			{copy && (
				<Tooltip
					label="Copy"
					theme="secondary"
					color="black"
					position="top"
					aria-label={hasCopied ? 'Copied' : ''}
					onMouseLeave={() => setHasCopied(false)}
					onClick={() => copyCode(code)}
					customWidth="65"
				>
					{hasCopied ? 'Copied' : ''}
				</Tooltip>
			)}
		</div>
	) : (
		''
	);
};

export { CodeSnippet };
