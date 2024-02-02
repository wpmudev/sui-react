import React, { useState, useEffect, useCallback } from "react"
import Prism from "prismjs"
// import dedent from "dedent"

import { Tooltip } from "@wpmudev/sui-tooltip"
import { generateCN } from "@wpmudev/sui-utils"

import { CodeSnippetProps } from "./code-snippet.types"
import { useDefaultChildren } from "@wpmudev/sui-hooks"

const CodeSnippet: React.FC<CodeSnippetProps> = ({
	language = "javascript",
	copy = true,
	className,
	children,
}) => {
	// generate class names
	const classNames = generateCN("sui-code-snippet", {}, className ?? "")
	const [isCopied, setIsCopied] = useState<boolean>(false)

	// highlight the code
	useEffect(() => {
		Prism?.highlightAll()
	}, [])

	// Default children content
	children = useDefaultChildren(children)

	// copy text to clipboard
	const copyCodes = useCallback((text: React.ReactNode) => {
		navigator?.clipboard?.writeText(text as string)
		setIsCopied(true)
	}, [])

	return (
		<div className={classNames} data-testid="code-snippet">
			{copy && (
				<Tooltip
					data-testid="code-snippet-copy-btn"
					label="Copy"
					appearance="secondary"
					color="black"
					position="top"
					aria-label={isCopied ? "Copied" : ""}
					onMouseLeave={() => setIsCopied(false)}
					customWidth={65}
					onClick={() => copyCodes(children)}
				>
					{isCopied && "Copied"}
				</Tooltip>
			)}
			<pre>
				<code className={`language-${language}`}>{children}</code>
			</pre>
		</div>
	)
}

export { CodeSnippet }
