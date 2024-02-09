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
	...styleProps
}: DrawerHeaderTypes) => {
	const { cssCN } = useStyles(styleProps, className)
	const classNames = generateCN("sui-drawer__header", {}, cssCN)

	const ctx = useDrawerContext()

	const onClose = useCallback(() => {
		ctx?.toggle(false)
	}, [ctx.isOpen])

	return (
		<div className={classNames}>
			<div className="sui-drawer__header-title">
				<span className="sui-heading--h4">{title}</span>
				{!isEmpty(hintText) && (
					<Tooltip
						type="icon"
						name="info"
						icon="Info"
						customWidth={160}
						iconSize="sm"
						{...tooltipOptions}
					>
						{hintText}
					</Tooltip>
				)}
			</div>
			<div className="sui-drawer__header-close">
				<Button
					icon="Close"
					appearance="tertiary"
					color="black"
					isSmall={true}
					iconOnly={true}
					onClick={onClose}
					aria-label="close"
				/>
			</div>
		</div>
	)
}

export { DrawerHeader }
