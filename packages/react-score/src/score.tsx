import React from "react"
import { generateCN } from "@wpmudev/react-utils"

import { ScoreProps } from "./score.types"

const Score: React.FC<ScoreProps> = ({
	bar,
	value,
	content,
	state,
	isSmall = false,
	isPercentage = true,
	className,
	...props
}) => {
	const classNames = generateCN(
		"sui-score",
		{
			loaded: true,
			lg: !isSmall,
			success: !state && 61 <= value,
			warning: !state && 35 <= value && 60 >= value,
			error: !state && value < 35,
			// add class based on state type
			[state]: !!state,
		},
		className,
	)

	return (
		<div className={classNames} {...props}>
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<circle strokeWidth="12" cx="50" cy="50" r="42" />
				<circle
					strokeWidth="12"
					cx="50"
					cy="50"
					r="42"
					strokeDasharray="0,3943.4067435231395"
					style={{
						animation: `3s ease 0s 1 normal forwards running sui${
							bar ? bar : value
						}`,
					}}
				/>
			</svg>
			<span className="sui-score--content">
				{value}
				{isPercentage && <span className="sui-score--percentage">%</span>}
			</span>
			{!!content && !!isSmall && content}
			<span className="sui-screen-reader-only" tabIndex="0">
				Score {value} out of 100
			</span>
		</div>
	)
}

// Publish required component.
export { Score, ScoreProps }
