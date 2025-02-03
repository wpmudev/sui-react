import React, { useId, ReactNode, ReactElement } from "react"
import { useStyles } from "@wpmudev/sui-hooks"
import { generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"

interface TemplateCardWrapperProps {
	id?: string
	className?: string
	type?: string
	name?: string
	children: ReactNode
	_htmlProps?: Record<string, any>
	_style?: Record<string, any>
}

const TemplateCardWrapper: React.FC<TemplateCardWrapperProps> = ({
	id = "",
	className = "",
	children,
	type = "radio",
	name = "",
	inputProps = {},
	_htmlProps = {},
	_style = {},
}) => {
	const uniqueId = useId()
	const uuid = id || `sui-template-${uniqueId}`
	const { suiInlineClassname } = useStyles(_style, className ?? "")

	// Assign unique name if name prop isn't provided
	const uuname = name || uuid

	// Generate class names
	const classNames = generateCN(
		"sui-template-card__wrapper",
		{},
		suiInlineClassname,
	)

	return (
		<div
			id={uuid}
			className={classNames}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{React.Children.map(children, (child) => {
				// Ensure child is a valid React element
				if (React.isValidElement(child)) {
					return React.cloneElement(child as ReactElement, {
						...("props" in child ? child.props : {}), // Ensure props exist
						inputProps: {
							name: uuname,
							type,
							...inputProps,
						},
					})
				}
				return child
			})}
		</div>
	)
}

export { TemplateCardWrapper }
