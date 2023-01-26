import React, { useState, useEffect } from "react";
import { useCopyToClipboard } from "@wordpress/compose";
import { Button } from "../../react-button/lib/react-button";
import Prism from "prismjs";
import "./prism-theme.css";

const CopyToClipboard = htmlCode => {
	const [hasCopied, setHasCopied] = useState(false);
	const CopyToClipboardAction = useCopyToClipboard(htmlCode, () => {
		setHasCopied(true);
	});

	return (
		<Button
			theme="secondary"
			color="black"
			aria-label={hasCopied ? "Copied!" : ""}
			data-tooltip={hasCopied ? "Copied!" : ""}
			onMouseLeave={() => setHasCopied(false)}
			onClick={() => { CopyToClipboardAction }}
			data-clipboard-target=""
		>
			Copy
		</Button>
	);
};

const CodeSnippet = ({ copy, content }) => {
	
	// highlight the code
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	const htmlCode = content;

	return (
		<div className="sui-snippet">
			<pre className="sui-snippet--code">
				<code className="language-markup">
					{htmlCode}
				</code>
			</pre>
			{copy && CopyToClipboard(htmlCode)}
		</div>
	);
};

export { CodeSnippet };