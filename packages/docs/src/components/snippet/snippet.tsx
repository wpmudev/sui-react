/**
 *
 * External Dependencies
 *
 */
import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames"
// eslint-disable-next-line import/no-extraneous-dependencies
import { Source } from "@storybook/addon-docs"

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
	const snippetClasses = classnames({
		"csb-snippet": true,
		"csb-snippet--dark": dark,
	})
	return (
		<div className={snippetClasses}>
			<Source code={children} language={language} />
		</div>
	)
}

export default Snippet
