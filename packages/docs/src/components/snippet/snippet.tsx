/**
 *
 * External Dependencies
 *
 */
import React, { useState } from "react"
import classnames from "classnames"
import { Source } from "@storybook/blocks"
import Button from "../button/button"

/**
 *
 * Internal Dependencies
 *
 */
import "./snippet.scss"

interface SnippetProps {
	language?:
		| "jsextra"
		| "jsx"
		| "json"
		| "yml"
		| "md"
		| "bash"
		| "css"
		| "html"
		| "tsx"
		| "typescript"
		| "graphql"
		| undefined

	dark?: boolean
	children: string
	isOpen?: boolean
	hideToggle?: boolean
}

const Snippet: React.FunctionComponent<SnippetProps> = ({
	language = "jsextra",
	dark = false,
	children,
	isOpen = false,
	hideToggle = false,
}) => {
	const [showCode, setShowCode] = useState(isOpen)
	const snippetClasses = classnames({
		"csb-snippet": true,
		"csb-snippet--dark": dark,
	})
	return (
		<div className={snippetClasses}>
			{!hideToggle && (
				<Button
					type="button"
					style="secondary"
					label={showCode ? "Hide code" : "Show code"}
					className="csb-snippet__toggle-button"
					onClick={() => setShowCode(!showCode)}
				/>
			)}
			{(showCode || hideToggle) && (
				<Source code={children} language={language} dark={true} />
			)}
		</div>
	)
}

export default Snippet
