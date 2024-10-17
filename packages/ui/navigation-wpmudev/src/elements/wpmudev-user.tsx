import React from "react"
import { Avatar } from "@wpmudev/sui-avatar"
import { Button } from "@wpmudev/sui-button"
import { WPMUDEVUserProps } from "../navigation-wpmudev.types"

const UserWPMUDEV: React.FC<WPMUDEVUserProps> = ({
	title,
	description,
	avatarProps,
	action,
	logout = {
		show: false,
		props: {},
	},
}) => {
	return (
		<div className="sui-wpmudev__user">
			<div className="sui-wpmudev__user--details">
				{avatarProps && (
					<div>
						<Avatar {...avatarProps}></Avatar>
					</div>
				)}
				<div className="sui-wpmudev__user--content">
					{title && <h4>{title}</h4>}
					{description && <p>{description}</p>}
				</div>
				{logout.show && (
					<div>
						<Button
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
			{action && <div>{action}</div>}
		</div>
	)
}

export { UserWPMUDEV }
