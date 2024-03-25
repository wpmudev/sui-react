import React from "react"
import { Code, Message } from "../index"

const NodeJSWarning = () => {
	return (
		<Message color="yellow">
			<p>
				Before moving further, please ensure you have{" "}
				<a href="https://nodejs.org/" target="_blank" rel="noreferrer">
					Node.js
				</a>{" "}
				installed on your device. You can get the latest version via their
				website.
			</p>
			<p>
				{`If you're planning on using Shared UI React Package in a project that doesn't yet use`}
				<a href="https://www.npmjs.com" target="_blank" rel="noreferrer">
					{" "}
					Node Package Manager
				</a>
				{`, you'll have to create a`}{" "}
				<a
					href="https://docs.npmjs.com/files/package.json"
					target="_blank"
					rel="noreferrer"
				>
					package.json
				</a>{" "}
				file first. To accomplish this, run <Code> npm init </Code> and follow
				the steps provided. Once completed, you can install the CSS Framework by
				following the instructions beneath.
			</p>
		</Message>
	)
}

export { NodeJSWarning }
