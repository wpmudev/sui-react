import React, { createRef } from "react"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
} from "@wpmudev/sui-drawer"
import { WPMUDEVDrawerProps } from "../navigation-wpmudev.types"
import { useStyles } from "@wpmudev/sui-hooks"

const WPMUDEVDrawer: React.FC<WPMUDEVDrawerProps> = ({
	title = "",
	toggleRef,
	children,
	footer,
	className = "",
	placement = "left",
	back = { show: false, action: () => {} },
	_style = {},
	_htmlProps = {},
	...props
}) => {
	const { suiInlineClassname } = useStyles(_style, className)
	const classNames = generateCN("sui-wpmudev__drawer", {}, suiInlineClassname)

	return (
		<Drawer
			ref={toggleRef}
			className={classNames}
			placement={placement}
			hasContainer={false}
			hasOverlay={false}
			{...props}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<DrawerHeader title={title} back={back} />
			<DrawerBody>{children}</DrawerBody>
			{footer && <DrawerFooter>{footer}</DrawerFooter>}
		</Drawer>
	)
}

// Export the MoreFromWPMUDEV component
export { WPMUDEVDrawer }
