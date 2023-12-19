/**
 *
 * External Dependencies
 *
 */
import React, { useState } from "react"
import classnames from "classnames"
import { Source } from "@storybook/addon-docs"
import Button from "../button/button"

/**
 *
 * Internal Dependencies
 *
 */
import "./snippet.scss"

interface SnippetProps {
	language: string
	dark?: boolean
	children: string
}

const Snippet: React.FunctionComponent<SnippetProps> = ({
	language,
	dark = false,
	children,
}) => {
	const [showCode, setShowCode] = useState(false)
	const snippetClasses = classnames({
		"csb-snippet": true,
		"csb-snippet--dark": dark,
	})
	return (
		<div className={snippetClasses}>
			<Button
				type="button"
				style="secondary"
				label={showCode ? "Hide code" : "Show code"}
				className="csb-snippet__toggle-button"
				onClick={() => setShowCode(!showCode)}
			/>
			{showCode && <Source code={children} language={language} dark={true} />}
		</div>
	)
}

export default Snippet
