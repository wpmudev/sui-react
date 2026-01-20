import React, { useId } from "react"
import { Avatar } from "@wpmudev/sui-avatar"
import { Button } from "@wpmudev/sui-button"
import { NavigationUser } from "@wpmudev/sui-navigation"
import { WPMUDEVUserProps } from "../navigation-wpmudev.types"

const UserWPMUDEV: React.FC<WPMUDEVUserProps> = ({
	id,
	title,
	description,
	avatarProps,
	userProps,
	action,
	logout = {
		show: false,
		props: {},
	},
}) => {
	const generatedId = useId()
	const wpmudevUserId = id || `sui_wpmudev_user_${generatedId}`

	return (
		<NavigationUser
			id={`${wpmudevUserId}-navigation_user`}
			{...userProps}
			className={`sui-wpmudev__navigation-user sui-wpmudev__navigation--hide-mobile ${
				userProps?.className || ""
			}`}
		>
			<div id={wpmudevUserId} className="sui-wpmudev__user">
				<div
					id={`${wpmudevUserId}-details`}
					className="sui-wpmudev__user--details"
				>
					{avatarProps && (
						<div id={`${wpmudevUserId}-avatar`}>
							<Avatar
								id={`${wpmudevUserId}-avatar_img`}
								{...avatarProps}
							></Avatar>
						</div>
					)}
					<div
						id={`${wpmudevUserId}-content`}
						className="sui-wpmudev__user--content"
					>
						{title && <h4>{title}</h4>}
						{description && <p>{description}</p>}
					</div>
					{logout.show && (
						<div id={`${wpmudevUserId}-logout`}>
							<Button
								id={`${wpmudevUserId}-logout_button`}
								icon="Exit"
								iconOnly={true}
								type="secondary"
								colorScheme="black"
								{...logout.props}
							>
								Logout
							</Button>
						</div>
					)}
				</div>
				{action && <div id={`${wpmudevUserId}-action`}>{action}</div>}
			</div>
		</NavigationUser>
	)
}

export { UserWPMUDEV }
