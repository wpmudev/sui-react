import React, { useState, useCallback } from "react"
// import { default as RTextEditor } from "react-rte"

import { generateCN } from "@wpmudev/sui-utils"

import { RichTextEditorProps } from "./rich-text-editor.types"
import { Tooltip } from "@wpmudev/sui-tooltip"

/**
 * RichTextEditor Component
 *
 * A code editor component that allows displaying and editing code.
 * Uses ReactPrismEditor as the code editor.
 *
 * @param {RichTextEditorProps} props - Component props
 * @return {JSX.Element} - JSX Element representing the RichTextEditor component
 */
const RichTextEditor: React.FC<RichTextEditorProps> = ({
	filename = "",
	language = "markup",
	allowCopy = true,
	readOnly = false,
	displayLineNumbers = true,
	className = "",
	children,
}) => {
	// Generate class names
	const classNames = generateCN("sui-code-editor", {}, className ?? "")

	const [editorValue, setEditorValue] = useState(
		RTextEditor.createValueFromString("Bonjour, Lemonde!", "html"),
	)

	/**
	 * Handle editor's change.
	 * @param {import('react-rte').EditorValue} value Value from the editor.
	 */
	function onChange(value) {
		console.log(value.toString("html"))
		setEditorValue(value)
	}

	const toolbarConfig = {
		display: [
			"INLINE_STYLE_BUTTONS",
			"BLOCK_TYPE_BUTTONS",
			"LINK_BUTTONS",
			"BLOCK_TYPE_DROPDOWN",
			"HISTORY_BUTTONS",
		],
		INLINE_STYLE_BUTTONS: [
			{ label: "Bold", style: "BOLD", className: "custom-css-class" },
			{ label: "Italic", style: "ITALIC" },
			{ label: "Underline", style: "UNDERLINE" },
		],
		BLOCK_TYPE_DROPDOWN: [
			{ label: "Normal", style: "unstyled" },
			{ label: "Heading Large", style: "header-one" },
			{ label: "Heading Medium", style: "header-two" },
			{ label: "Heading Small", style: "header-three" },
		],
		BLOCK_TYPE_BUTTONS: [
			{ label: "UL", style: "unordered-list-item" },
			{ label: "OL", style: "ordered-list-item" },
		],
	}

	/**
	 * Handle editor's change.
	 * @param {import('react-rte').EditorValue} value Value from the editor.
	 */
	const onChange = useCallback((value) => {
		console.log(value.toString("html"))
		setEditorValue(value)
	}, [])

	return null
	// return (
	// 	<RTextEditor
	// 		// toolbarConfig={toolbarConfig}
	// 		value={editorValue}
	// 		onChange={onChange}
	// 	/>
	// )
	//
	// return (
	// 	<div className={classNames}>
	// 		<div className="sui-code-editor__header">
	// 			{/* Display filename if available */}
	// 			<span className="sui-code-editor__header-title">
	// 				{!!filename ? filename : ""}
	// 			</span>
	// 			{allowCopy && (
	// 				<Tooltip
	// 					label="Copy"
	// 					theme="secondary"
	// 					color="black"
	// 					position="top"
	// 					isSmall={true}
	// 					aria-label={isCopied ? "Copied" : ""}
	// 					onMouseLeave={() => setIsCopied(false)}
	// 					customWidth="65"
	// 					onClick={() => copyCodes(children)}
	// 				>
	// 					{isCopied && "Copied"}
	// 				</Tooltip>
	// 			)}
	// 		</div>
	// 		<div className="sui-code-editor__content">
	// 			{/* ReactPrismEditor is used as the code editor */}
	// 			<RTextEditor />
	// 		</div>
	// 	</div>
	// )
}

export { RichTextEditor }
