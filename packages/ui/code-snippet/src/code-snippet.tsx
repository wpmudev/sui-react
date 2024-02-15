import React, { useState, useEffect, useCallback } from "react"
import Prism from "prismjs"
// import dedent from "dedent"

import { Tooltip } from "@wpmudev/sui-tooltip"
import { generateCN } from "@wpmudev/sui-utils"

import { CodeSnippetProps } from "./code-snippet.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

const CodeSnippet: React.FC<CodeSnippetProps> = ({
	language = "javascript",
	copy = true,
	className,
	children,
	...styleProps
}) => {
	const { suiInlineClassname } = useStyles(styleProps, className ?? "")
	// generate class names
	const classNames = generateCN("sui-code-snippet", {}, suiInlineClassname)
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
					buttonProps={{ type: "secondary", colorScheme: "black" }}
					data-testid="code-snippet-copy-btn"
					label="Copy"
					placement="top"
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
