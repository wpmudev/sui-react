import React from "react"
import { ListProps } from "./list.types"
import { ListContext } from "./list-context"
import { useStyles } from "@wpmudev/sui-hooks"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

const List: React.FC<ListProps> = ({
	type = "ul",
	variant = "unstyled",
	overflow = true,
	className = "",
	children,
	onClick,
	_style = {},
	_htmlProps = {},
}) => {
	const { suiInlineClassname } = useStyles(_style, className)

	// Generate CSS class names for the Accordion component
	const classNames = generateCN(
		"sui-list",
		{
			ordered: type === "ol",
			unordered: type === "ul",
			border: variant === "bordered",
			flush: variant === "flushed",
			unstyled: variant === "unstyled",
			overflow: variant !== "unstyled" && overflow,
		},
		suiInlineClassname,
	)

	// Determine the HTML tag based on the type prop
	// This allows the component to render as either an <ul> or <ol>
	const Tag = type

	return (
		<ListContext.Provider
			value={{
				type,
				onClick,
			}}
		>
			<Tag
				className={classNames}
				data-testid="list"
				{..._renderHTMLPropsSafely(_htmlProps)}
			>
				{children}
			</Tag>
		</ListContext.Provider>
	)
}

export { List }
