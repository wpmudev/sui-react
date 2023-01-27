import React, { useState, useEffect } from "react";
import { useCopyToClipboard } from "@wordpress/compose";
import { Button } from "../../react-button/lib/react-button";
import Prism from "prismjs";

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

const CodeSnippet = ({ type, copy, code }) => {
	
	// highlight the code
	useEffect(() => {
		Prism.highlightAll();
	}, [code]);

	return (
		<div className="sui-code-snippet">
			<pre>
				<code className={`language-${type}`}>
					{code}
				</code>
			</pre>
			{ copy }
			{/* {copy && CopyToClipboard(htmlCode)} */}
		</div>
	);
};

export { CodeSnippet };