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
	isCollapsible?: boolean
}

const Snippet: React.FunctionComponent<SnippetProps> = ({
	language = "javascript",
	dark = false,
	children,
	isCollapsible = true,
}) => {
	const [showCode, setShowCode] = useState(false)
	const snippetClasses = classnames({
		"csb-snippet": true,
		"csb-snippet--dark": dark,
	})
	return (
		<div className={snippetClasses}>
			{isCollapsible && (
				<>
					<Button
						type="button"
						style="secondary"
						label={showCode ? "Hide code" : "Show code"}
						className="csb-snippet__toggle-button"
						onClick={() => setShowCode(!showCode)}
					/>
					{showCode && (
						<Source code={children} language={language} dark={true} />
					)}
				</>
			)}

			{!isCollapsible && (
				<Source code={children} language={language} dark={true} />
			)}
		</div>
	)
}

export default Snippet
