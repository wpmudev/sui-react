import React, { Children, cloneElement } from "react"
import { TableSectionProps } from "./table.types"
import { useStyles } from "@wpmudev/sui-hooks"
import { _renderRestPropsSafely, generateCN } from "@wpmudev/sui-utils"

// TableFooter component represents the footer section of a table.
const TableFooter: React.FC<TableSectionProps> = ({
	children,
	_htmlProps = {},
	_style = {},
}) => {
	const { suiInlineClassname } = useStyles(_style)

	return (
		<table className="sui-table__table sui-table__table--footer">
			<tfoot
				className={generateCN("sui-table__footer", {}, suiInlineClassname)}
				{..._renderRestPropsSafely(_htmlProps)}
			>
				{Children.toArray(children).map((child: React.ReactNode) =>
					cloneElement(child as React.ReactElement, {
						...(child as React.ReactElement).props,
						isUnderFooter: true,
					}),
				)}
			</tfoot>
		</table>
	)
}

TableFooter.displayName = "TableFooter"

export { TableFooter }
