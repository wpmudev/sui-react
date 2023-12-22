import React, { Children, cloneElement } from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { Row } from "@wpmudev/sui-grid"
import { BuilderWrapperProps } from "./builder.types"

const BuilderWrapper: React.FC<BuilderWrapperProps> = ({
	className,
	children,
	...props
}) => {
	// Class names based on interaction and disabled state.
	const classNames = generateCN("sui-builder__wrapper", {}, className)

	return (
		<Row
			className={classNames}
			align={{ sm: "inline" }}
			{...props}
			data-testid="builder-wrapper"
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
