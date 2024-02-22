import React, { Children, cloneElement } from "react"

import { _renderRestPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { Row } from "@wpmudev/sui-grid"
import { BuilderWrapperProps } from "./builder.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

const BuilderWrapper: React.FC<BuilderWrapperProps> = ({
	className,
	children,
	htmlProps = {},
	_style = {},
	...props
}) => {
	const { suiInlineClassname } = useStyles(_style, className)

	// Class names based on interaction and disabled state.
	const classNames = generateCN("sui-builder__wrapper", {}, suiInlineClassname)

	// Default Children value
	children = useDefaultChildren(children, "{BuilderWrapper children content}")

	return (
		<Row
			className={classNames}
			align={{ sm: "inline" }}
			{...props}
			htmlProps={{
				..._renderRestPropsSafely(htmlProps),
				"data-testid": "builder-wrapper",
			}}
		>
			{Children.map(children, (child: any) =>
				cloneElement(child, {
					colSize: Children.count(children),
				} as object),
			)}
		</Row>
	)
}

// Publish component(s)
export { BuilderWrapper }
