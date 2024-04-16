import React, { useRef } from "react"

import { Dropdown, DropdownRefProps } from "@wpmudev/sui-dropdown"
import { Avatar } from "@wpmudev/sui-avatar"

import { NavigationUserProps } from "./navigation.types"
import { isEmpty } from "@wpmudev/sui-utils"

const NavigationUser: React.FC<NavigationUserProps> = ({
	user,
	menu,
	isMenuDisabled = false,
	status,
}) => {
	// Create a ref for the user dropdown button
	const userBtnRef = useRef<DropdownRefProps | null>(null)

	// Define the user's avatar button component
	const userAvatarBtn = (
		<Avatar
			status={status}
			image={{
				src: user?.image ?? "",
				alt: "User Avatar",
			}}
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
		<div>
			<Dropdown
				ref={userBtnRef}
				label="Menu Button"
				placement="left"
				size="md"
				trigger={userAvatarBtn}
				renderContentOnTop={true}
				menu={menu ?? []}
			>
				{getUserBlock()}
			</Dropdown>
		</div>
	)
}

NavigationUser.displayName = "NavigationUser"

export { NavigationUser }
