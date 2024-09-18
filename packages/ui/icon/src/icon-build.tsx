/**
 * Interface for generating icon parameters.
 */
import React, { Children, forwardRef, ReactNode } from "react"
import { isEmpty } from "@wpmudev/sui-utils"

import { Icon } from "./icon"
import { IconBuildParams, IconProps } from "./icon.types"

/**
 * Generate an icon component based on the provided options.
 *
 * @param {string | string[] | ReactNode[]} path
 * @param {IconBuildParams}                 options
 */
const iconBuild = (
	path: string | string[] | ReactNode[],
	options: IconBuildParams,
) => {
	const { viewBox = "0 0 24 24", title, defaultProps = {} } = options

	// Check if the `path` has a single value
	const isSinglePath: boolean = "string" === typeof path

	// Decide path variable
	path = isSinglePath ? path : Children.toArray(path)

	// Create a new icon component using forwardRef
	const Renderer = forwardRef<"svg", IconProps>((props, ref) => (
		<Icon
			ref={ref}
			viewBox={viewBox}
			{...defaultProps}
			{...props}
			aria-hidden={true}
		>
			{!isSinglePath && "string" !== typeof path ? (
				path?.map((p, index) => (
					<path key={index} fill="currentColor" d={p as string} />
				))
			) : (
				<path fill="currentColor" d={path as string} />
			)}
		</Icon>
	))

	// Set the display name for the generated icon component
	if (!isEmpty(title ?? "")) {
		Renderer.displayName = title
	}

	return Renderer
}

export { iconBuild }
