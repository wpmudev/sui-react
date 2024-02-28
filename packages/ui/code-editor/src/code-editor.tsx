// @ts-nocheck
import React, { useState, useEffect, useCallback } from "react"
// @ts-ignore
import ReactPrismEditor from "react-prism-editor"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { Tooltip } from "@wpmudev/sui-tooltip"

import { CodeEditorProps } from "./code-editor.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

/**
 * CodeEditor Component
 *
 * A code editor component that allows displaying and editing code.
 * Uses ReactPrismEditor as the code editor.
 *
 * @param {CodeEditorProps} props - Component props
 * @return {JSX.Element} - JSX Element representing the CodeEditor component
 */
const CodeEditor: React.FC<CodeEditorProps> = ({
	filename = "App.js",
	language = "javascript",
	allowCopy = true,
	readOnly = false,
	displayLineNumbers = true,
	className,
	children,
	_htmlProps,
	_style,
}) => {
	const { suiInlineClassname } = useStyles(_style, className ?? "")

	// Generate class names
	const classNames = generateCN(
		"sui-code-editor",
		{
			numbers: displayLineNumbers,
		},
		suiInlineClassname,
	)
	const [isCopied, setIsCopied] = useState<boolean>(false)

	const [code, setCode] = React.useState("")

	children = useDefaultChildren(children)

	useEffect(() => {
		// Set code after a slight delay to prevent flickering
		setTimeout(() => {
			setCode(children as string)
		}, 100)
	}, [children])

	// Function to copy text to clipboard
	const copyCodes = useCallback((text: React.ReactNode) => {
		navigator?.clipboard?.writeText(text as string)
		setIsCopied(true)
	}, [])

	return (
		<div
			className={classNames}
			data-testid="code-editor"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div className="sui-code-editor__header">
				{/* Display filename if available */}
				<span className="sui-code-editor__header--title">
					{!!filename ? filename : ""}
				</span>
				{allowCopy && (
					<Tooltip
						buttonProps={{ type: "secondary", colorScheme: "black" }}
						label="Copy"
						placement="top"
						isSmall={true}
						aria-label={isCopied ? "Copied" : ""}
						onMouseLeave={() => setIsCopied(false)}
						customWidth={65}
						onClick={() => copyCodes(children ?? "")}
					>
						{isCopied && "Copied"}
					</Tooltip>
				)}
			</div>
			<div className="sui-code-editor__content">
				{/* ReactPrismEditor is used as the code editor */}
				<ReactPrismEditor
					language={language}
					theme="default"
					code={code}
					lineNumber={displayLineNumbers}
					readOnly={readOnly}
					changeCode={setCode}
				/>
			</div>
		</div>
	)
}

export { CodeEditor }
