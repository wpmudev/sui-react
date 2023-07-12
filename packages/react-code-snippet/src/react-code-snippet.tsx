import React, { useState, useEffect, useCallback } from "react"
import Prism from "prismjs"
// import dedent from "dedent"

import { Tooltip } from "@wpmudev/react-tooltip"
import { generateCN } from "@wpmudev/react-utils"

/**
 * Represents the properties for a code snippet component.
 */
interface CodeSnippetProps {
	/**
	 * The language of the code snippet.
	 */
	language?: string
	/**
	 * Indicates whether the code snippet can be copied or not.
	 */
	copy?: boolean
	/**
	 * Optional CSS class name for the code snippet.
	 */
	className?: string
	/**
	 * The content of the code snippet.
	 */
	children?: React.ReactNode
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
	language = "markup",
	copy = true,
	className = "",
	children,
}) => {
	// generate class names
	const classNames = generateCN("sui-code-snippet", {}, className ?? "")
	const [isCopied, setIsCopied] = useState<boolean>(false)

	// highlight the code
	useEffect(() => {
		Prism?.highlightAll()
	}, [])

	// copy text to clipboard
	const copyCodes = useCallback((text: string) => {
		navigator?.clipboard?.writeText(text)
		setIsCopied(true)
	}, [])

	return (
		<div className={classNames}>
			{copy && (
				<Tooltip
					label="Copy"
					theme="secondary"
					color="black"
					position="top"
					aria-label={isCopied ? "Copied" : ""}
					onMouseLeave={() => setIsCopied(false)}
					customWidth="65"
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

export { CodeSnippet, CodeSnippetProps }
