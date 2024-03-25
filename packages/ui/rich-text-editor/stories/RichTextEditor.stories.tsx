import React, { Fragment, useEffect, useState } from "react"

// Import required component.
import { RichTextEditor as SuiRichTextEditor } from "../src"

// Import documentation main page.
import docs from "./RichTextEditor.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Advanced/Rich Text Editor",
	component: SuiRichTextEditor,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

/**
 * Tiny MCE API key
 * Get your own key from https://www.tiny.cloud/my-account/integrate/
 */
const TINY_MCE_API_KEY = "16svjtls827i92z95atzbvrutvut1n85ckqxu4k9sslf5b7d"

// Build "Tag" story.
const RichTextEditor = ({ color, ...props }: { color: string }) => {
	const [isScriptLoaded, setIsScriptLoaded] = useState<boolean>(false)

	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}

	useEffect(() => {
		const script = document.createElement("script")
		script.src = `https://cdn.tiny.cloud/1/${TINY_MCE_API_KEY}/tinymce/6/tinymce.min.js`
		script.async = true
		document.head.appendChild(script)

		const checkTinyMCEInterval = setInterval(() => {
			// @ts-ignore
			if (typeof tinymce !== "undefined") {
				// TinyMCE script has been loaded
				clearInterval(checkTinyMCEInterval) // Stop checking
				setIsScriptLoaded(true)
			}
		}, 500) // Check every 500 milliseconds

		// Cleanup function to clear interval on unmount
		return () => {
			clearInterval(checkTinyMCEInterval)
		}
	}, [])

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{isScriptLoaded ? <SuiRichTextEditor {...props} /> : "Loading..."}
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
RichTextEditor.args = {
	textareaId: "",
	isDisabled: false,
}

// Set controls for story arguments.
RichTextEditor.argTypes = {
	textareaId: {
		name: "ID",
		control: "text",
	},
	isDisabled: {
		name: "Disabled",
		control: "boolean",
	},
}

// Publish required stories.
export { RichTextEditor }
