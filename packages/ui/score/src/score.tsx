import React from "react"
import { _renderRestPropsSafely, generateCN } from "@wpmudev/sui-utils"

import { ScoreProps } from "./score.types"
import { useStyles } from "@wpmudev/sui-hooks"

const Score: React.FC<ScoreProps> = ({
	bar = 50,
	value = 50,
	content,
	state,
	isSmall = false,
	isPercentage = true,
	className,
	...props
}) => {
	const { cssCN } = useStyles(props, className)

	const classNames = generateCN(
		"sui-score",
		{
			loaded: true,
			lg: !isSmall,
			success: !state && 61 <= value,
			warning: !state && 35 <= value && 60 >= value,
			error: !state && value < 35,
			// add class based on state type
			[state as string]: !!state,
		},
		cssCN,
	)

	return (
		<div
			className={classNames}
			{..._renderRestPropsSafely(props)}
			data-testid="score"
		>
			<svg
				viewBox="0 0 100 100"
				className="sui-score__svg"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					strokeWidth="12"
					cx="50"
					cy="50"
					r="42"
					className="sui-score__circle sui-score__circle--bg"
				/>
				<circle
					strokeWidth="12"
					cx="50"
					cy="50"
					r="42"
					strokeDasharray="0,3943.4067435231395"
					className="sui-score__circle sui-score__circle--filled"
					style={{
						animation: `3s ease 0s 1 normal forwards running sui${
							bar ? bar : value
						}`,
					}}
				/>
				<circle
					className="sui-score__circle sui-score__circle--inner"
					strokeWidth="1"
					stroke="#000"
					cx="50"
					cy="50"
					r="42"
				/>
				<circle
					className="sui-score__circle sui-score__circle--outer"
					strokeWidth="1"
					stroke="#000"
					cx="50"
					cy="50"
					r="42"
				/>
			</svg>
			<span className="sui-score--content">
				{value}
				{isPercentage && <span className="sui-score--percentage">%</span>}{" "}
				{!!content && !!isSmall && content}
			</span>
			<span className="sui-screen-reader-only" tabIndex={0}>
				Score {value} out of 100
			</span>
		</div>
	)
}

// Publish required component.
export { Score }
