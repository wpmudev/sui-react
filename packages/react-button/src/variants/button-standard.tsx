import React from "react"

// Import required component(s).
import { Button as Base } from "./button"
import { ButtonPropsType } from "../types"

// Build "Standard Button" component.
const Button: React.FC<ButtonPropsType> = ({ children, ...props }) => {
	return <Base {...props}>{children}</Base>
}

// Publish required component(s).
export { Button }
