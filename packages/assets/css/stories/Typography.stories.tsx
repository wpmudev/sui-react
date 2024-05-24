/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { CSSProperties, StyleHTMLAttributes } from "react"

// Import documentation main page.
import docs from "./content/Typography/Main.mdx"

// Configure default options.
export default {
	title: "SUI/CSS Framework/Typography",
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
		actions: {
			disable: true,
		},
	},
}

// Build "Typography" story.
const Typography = ({
	style,
	sizeHeading,
	sizeSubtitle,
	sizeBody,
	align,
	children,
}: {
	style: string
	sizeHeading: string
	sizeSubtitle: string
	sizeBody: string
	align: string
	children: React.ReactElement
}) => {
	const hasAlign = "undefined" !== typeof align && "" !== align
	const boxStyles: CSSProperties = {
		padding: 20,
		borderRadius: 4,
		background: "#FFF",
		textAlign: hasAlign ? (align as CSSProperties["textAlign"]) : "left",
	}

	let content

	switch (style) {
		case "heading":
			content = <Heading type={sizeHeading}>{children}</Heading>
			break

		case "label":
			content = <label className={`sui-${style}`}>{children}</label>
			break

		case "tag":
		case "helper":
			content = <span className={`sui-${style}`}>{children}</span>
			break

		case "overline":
			content = <p className={`sui-${style}`}>{children}</p>
			break

		default:
			content = (
				<Paragraph small={"small" === sizeBody ? true : false}>
					{children}
				</Paragraph>
			)
			break
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>{content}</div>
			</div>
		</div>
	)
}
Typography.args = {
	style: "paragraph",
	sizeHeading: "h1",
	sizeBody: "normal",
	sizeSubtitle: "normal",
	align: "left",
	children: "The quick brown fox jumps over the lazy dog.",
}
Typography.argTypes = {
	style: {
		name: "Text Style",
		options: [
			"heading",
			"subtitle",
			"paragraph",
			"label",
			"helper",
			"overline",
			"tag",
		],
		control: {
			type: "select",
			labels: {
				heading: "Heading",
				subtitle: "Subtitle",
				paragraph: "Paragraph",
				label: "Label",
				helper: "Help Text",
				overline: "Overline",
				tag: "Tag",
			},
		},
	},
	sizeHeading: {
		name: "Heading Size",
		options: ["h1", "h2", "h3", "h4", "h5"],
		control: {
			type: "select",
			labels: {
				h1: "Heading 1",
				h2: "Heading 2",
				h3: "Heading 3",
				h4: "Heading 4",
				h5: "Heading 5",
			},
		},
		if: {
			arg: "style",
			eq: "heading",
		},
	},
	sizeSubtitle: {
		name: "Font Size",
		options: ["normal", "small"],
		control: {
			type: "inline-radio",
			labels: {
				normal: "Normal",
				small: "Small",
			},
		},
		if: {
			arg: "style",
			eq: "subtitle",
		},
	},
	sizeBody: {
		name: "Font Size",
		options: ["normal", "small"],
		control: {
			type: "inline-radio",
			labels: {
				normal: "Normal",
				small: "Small",
			},
		},
		if: {
			arg: "style",
			eq: "paragraph",
		},
	},
	align: {
		name: "Alignment",
		options: ["left", "center", "right"],
		control: {
			type: "inline-radio",
			labels: {
				left: "Left",
				center: "Center",
				right: "Right",
			},
		},
	},
	children: {
		name: "Demo Content",
	},
}

// Build "Heading" component.
const Heading = ({
	type,
	children,
}: {
	type?: string
	children: React.ReactElement
}) => {
	const hasType = type && "undefined" !== typeof type && "" !== type
	const setType = " sui-heading--" + type

	return <h1 {...(hasType && { className: setType })}>{children}</h1>
}

// Build "Paragraph" component.
const Paragraph = ({
	small,
	children,
}: {
	small: boolean
	children: React.ReactElement
}) => {
	const isSmall = "boolean" === typeof small && small

	if (isSmall) {
		return (
			<p>
				<small>{children}</small>
			</p>
		)
	}

	return <p>{children}</p>
}

// Publish required stories.
export { Typography }
