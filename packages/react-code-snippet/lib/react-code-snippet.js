import React, { useState, useEffect } from "react";
import { Button } from "@wpmudev/react-button";
import Prism from "prismjs";

const CodeSnippet = ({ type, copy, code }) => {
	const [hasCopied, setHasCopied] = useState(false);

	const copyCode = ( text ) => {
		// copy text to clipboard
		navigator.clipboard.writeText( text );
		setHasCopied(true);
	}

	// highlight the code
	useEffect(() => {
		Prism.highlightAll();
	}, [code, type]);

	return (
		<div className="sui-code-snippet">
			<pre>
				<code className={`language-${type}`}>
					{ code }
				</code>
			</pre>
			{copy && (
				<Button
					theme="secondary"
					color="black"
					aria-label={hasCopied ? "Copied!" : ""}
					data-tooltip={hasCopied ? "Copied!" : ""}
					onMouseLeave={() => setHasCopied(false)}
					onClick={ () => copyCode(code) }
					data-clipboard-target=""
				>
					Copy
				</Button>
			)}
		</div>
	);
};

export { CodeSnippet };