import React, { Children, cloneElement, useId } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { Row } from "@wpmudev/sui-grid"
import { BuilderWrapperProps } from "./builder.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

const BuilderWrapper: React.FC<BuilderWrapperProps> = ({
	id,
	className,
	children,
	_htmlProps = {},
	_style = {},
}) => {
	const generatedId = useId()
	const builderWrapperId = id || `sui_builder_wrapper_${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)

	// Class names based on interaction and disabled state.
	const classNames = generateCN("sui-builder__wrapper", {}, suiInlineClassname)

	// Default Children value
	children = useDefaultChildren(children, "{BuilderWrapper children content}")

	return (
		<Row
			id={builderWrapperId}
			className={classNames}
			align={{ sm: "inline" }}
			_htmlProps={{
				..._renderHTMLPropsSafely(_htmlProps),
				"data-testid": "builder-wrapper",
			}}
		>
			{Children.map(children, (child: any, index) =>
				cloneElement(child, {
					colSize: Children.count(children),
					key: `builder-wrapper-child-${index}`,
				} as object),
			)}
		</Row>
	)
}

// Publish component(s)
export { BuilderWrapper }
