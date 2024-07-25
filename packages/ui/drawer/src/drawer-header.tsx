import React, { useCallback } from "react"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Tooltip } from "@wpmudev/sui-tooltip"
import { DrawerHeaderTypes } from "./drawer.types"
import { useDrawerContext } from "./drawer-context"
import { Button } from "@wpmudev/sui-button"
import { useStyles } from "@wpmudev/sui-hooks"

const DrawerHeader = ({
	className = "",
	title = "",
	hintText = "",
	tooltipOptions = {},
	_style,
}: DrawerHeaderTypes) => {
	const { suiInlineClassname } = useStyles(_style, className)
	const classNames = generateCN("sui-drawer__header", {}, suiInlineClassname)

	const ctx = useDrawerContext()

	const onClose = useCallback(() => {
		ctx?.toggle(false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ctx.isOpen])

	return (
		<div className={classNames}>
			<div className="sui-drawer__header-title">
				{!isEmpty(hintText) && (
					<Tooltip
						type="icon"
						icon="Info"
						customWidth={160}
						iconSize="md"
						{...tooltipOptions}
					>
						{hintText}
					</Tooltip>
				)}
				<span className="sui-heading--h4">{title}</span>
			</div>
			<div className="sui-drawer__header-close">
				<Button
					icon="Close"
					type="tertiary"
					colorScheme="black"
					isSmall={true}
					iconOnly={true}
					onClick={onClose}
					_htmlProps={{
						"aria-label": "close",
					}}
				/>
			</div>
		</div>
	)
}

export { DrawerHeader }
