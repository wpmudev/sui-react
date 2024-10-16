import React, { useRef } from "react"

import { Dropdown, DropdownRefProps } from "@wpmudev/sui-dropdown"
import { Avatar } from "@wpmudev/sui-avatar"

import { NavigationUserProps } from "./navigation.types"
import { _renderHTMLPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"

const NavigationUser: React.FC<NavigationUserProps> = ({
	user,
	menu,
	splitLastItem = false,
	isMenuDisabled = false,
	status,
	children,
	className = "",
	dropdownProps = {},
	_style = {},
	_htmlProps = {},
}) => {
	// Create a ref for the user dropdown button
	const userBtnRef = useRef<DropdownRefProps | null>(null)

	const { suiInlineClassname } = useStyles(_style, className)

	const classNames = generateCN(
		"sui-navigation__avatar",
		{},
		suiInlineClassname,
	)

	// Define the user's avatar button component
	const userAvatarBtn = (
		<Avatar
			status={status}
			image={{
				src: user?.image ?? "",
				alt: "User Avatar",
			}}
			icon={user?.icon}
			{...(!isMenuDisabled && {
				onClick: () => {
					// Toggle the user dropdown when the avatar is clicked
					userBtnRef?.current?.toggle()
				},
			})}
		/>
	)

	/**
	 * Get user block
	 */
	const getUserBlock = () => {
		// Return null if both name and email are missing or empty
		if (isEmpty(user?.name ?? "") && isEmpty(user?.email ?? "")) {
			return null
		}

		// Render otherwise
		return (
			<div className="sui-navigation__user">
				{!isEmpty(user?.name ?? "") && (
					<div className="sui-navigation__user--name">{user?.name}</div>
				)}
				{!isEmpty(user?.email ?? "") && (
					<div className="sui-navigation__user--email">{user?.email}</div>
				)}
			</div>
		)
	}

	return (
		<div className={classNames} {..._renderHTMLPropsSafely(_htmlProps)}>
			<Dropdown
				ref={userBtnRef}
				label="Menu Button"
				placement="left"
				size="lg"
				trigger={userAvatarBtn}
				renderContentOnTop={true}
				menu={menu ?? []}
				dropdownArrow={true}
				className={generateCN("sui-navigation__dropdown", {
					split: splitLastItem,
				})}
				{...dropdownProps}
			>
				{getUserBlock()}
				{children}
			</Dropdown>
		</div>
	)
}

NavigationUser.displayName = "NavigationUser"

export { NavigationUser }
