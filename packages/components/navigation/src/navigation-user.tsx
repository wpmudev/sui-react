import React, { useRef } from "react"

import { Dropdown, DropdownRefProps } from "@wpmudev/sui-dropdown"
import { Avatar } from "@wpmudev/sui-avatar"

import { NavigationUserProps } from "./navigation.types"

const NavigationUser: React.FC<NavigationUserProps> = ({ user, menu }) => {
	// Create a ref for the user dropdown button
	const userBtnRef = useRef<DropdownRefProps>()

	// Define the user's avatar button component
	const userAvatarBtn = (
		<Avatar
			status="confirmed"
			className=""
			image={{
				src: user?.image ?? "",
				alt: "User Avatar",
			}}
			onClick={() => {
				// Toggle the user dropdown when the avatar is clicked
				userBtnRef?.current?.toggle()
			}}
		/>
	)

	return (
		<div>
			<Dropdown
				ref={userBtnRef}
				label="Menu Button"
				isLabelHidden={true}
				direction="left"
				trigger={userAvatarBtn}
				renderContentOnTop={true}
				menu={menu ?? []}
			>
				<div className="sui-navigation__user">
					<div className="sui-navigation__user--name">{user?.name}</div>
					<div className="sui-navigation__user--email">{user?.email}</div>
				</div>
			</Dropdown>
		</div>
	)
}

NavigationUser.displayName = "NavigationUser"

export { NavigationUser }
