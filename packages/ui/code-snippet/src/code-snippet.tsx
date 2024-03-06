import React, { useState, useEffect, useCallback } from "react"
import Prism from "prismjs"
// import dedent from "dedent"

import { Tooltip } from "@wpmudev/sui-tooltip"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

import { CodeSnippetProps } from "./code-snippet.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

const CodeSnippet: React.FC<CodeSnippetProps> = ({
	language = "javascript",
	copy = true,
	className,
	children,
	_htmlProps,
	_style,
}) => {
	const { suiInlineClassname } = useStyles(_style, className ?? "")
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
		<div
			className={classNames}
			data-testid="code-snippet"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{copy && (
				<Tooltip
					buttonProps={{
						type: "secondary",
						colorScheme: "black",
						_htmlProps: {
							"data-testid": "code-snippet-copy-btn",
						},
					}}
					label="Copy"
					placement="top"
					_htmlProps={{
						"aria-label": isCopied ? "Copied" : "",
					}}
					onMouseLeave={() => setIsCopied(false)}
					customWidth={isCopied ? 65 : 90}
					onClick={() => copyCodes(children)}
				>
					{isCopied ? "Copied" : "Click to Copy"}
				</Tooltip>
			)}
			<pre>
				<code className={`language-${language}`}>{children}</code>
			</pre>
		</div>
	)
}

export { CodeSnippet }
