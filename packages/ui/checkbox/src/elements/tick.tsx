import React from "react"
import { _renderHTMLPropsSafely } from "@wpmudev/sui-utils"

export const Tick = ({ ...props }) => (
	<span {..._renderHTMLPropsSafely(props)}>
		<svg viewBox="0 0 12 10" fill="none" className="sui-checkbox__icon">
			<path d="M4.23784 9.08831L0.337838 5.16588C0.103533 4.93023 0.103533 4.54815 0.337838 4.31247L1.18635 3.45906C1.42065 3.22338 1.80057 3.22338 2.03488 3.45906L4.66211 6.10137L9.96507 0.91168C10.1994 0.676028 10.5793 0.676028 10.8136 0.91168L11.6621 1.76509C11.8964 2.00074 11.8964 2.38283 11.6621 2.6185L5.08637 9.08833C4.85205 9.32398 4.47215 9.32398 4.23784 9.08831Z" />
		</svg>
	</span>
)
