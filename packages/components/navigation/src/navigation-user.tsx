import React, { useRef } from "react"

import { Dropdown, DropdownRefProps } from "@wpmudev/sui-dropdown"
import { Avatar } from "@wpmudev/sui-avatar"

import { NavigationUserProps } from "./navigation.types"

const NavigationUser: React.FC<NavigationUserProps> = ({ user, menu }) => {
	const userBtnRef = useRef<DropdownRefProps>()

	const userAvatarBtn = (
		<Avatar
			status="confirmed"
			className=""
			image={{
				src: user?.image ?? "",
				alt: "User Avatar",
			}}
			onClick={() => {
				userBtnRef?.current?.toggle()
			}}
		/>
	)

	return (
		<div className="sui-navigation__user">
			<Dropdown
				ref={userBtnRef}
				label="Menu Button"
				isLabelHidden={true}
				direction="left"
				trigger={userAvatarBtn}
				renderContentOnTop={true}
				menu={menu ?? []}
			>
				<div className="sui-navigation__user-info">
					<div className="sui-navigation__user-info-name">{user?.name}</div>
					<div className="sui-navigation__user-info-email">{user?.email}</div>
				</div>
			</Dropdown>
		</div>
	)
}

NavigationUser.displayName = "NavigationUser"

export { NavigationUser }
