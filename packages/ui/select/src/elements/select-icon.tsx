import React from "react"
import { SuiHTMLAttributes, generateCN, isEmpty } from "@wpmudev/sui-utils"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"
import { IconProps } from "@wpmudev/sui-icon"
import { useStyles, useStylesTypes } from "@wpmudev/sui-hooks"

interface SelectIconProps extends SuiHTMLAttributes, useStylesTypes {
	name: IconsNamesType
	size: "xs" | "sm" | "md"
}

// Build "Icon" component.
const Icon: React.FC<SelectIconProps> = ({
	name,
	size = "md",
	_htmlProps = {},
	...props
}) => {
	const { suiInlineClassname } = useStyles(props)

	if (isEmpty(name ?? "")) {
		throw new Error(
			`Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n`,
		)
	}

	// Determine the IconTag based on the provided icon value
	const IconName: React.ComponentType<IconProps> = Icons[name]

	// get icon classname from name.
	const iconClass = (name ?? "").replace(
		/[A-Z]/g,
		(match, index) => (index === 0 ? "" : "-") + match.toLowerCase(),
	)

	return (
		<span
			className={generateCN(
				`suicons sui-select__icon sui-select__icon--${iconClass}`,
				{},
				suiInlineClassname,
			)}
			{..._htmlProps}
		>
			<span aria-hidden="true">{IconName && <IconName size={size} />}</span>
		</span>
	)
}

// Publish required component(s).
export { Icon }
