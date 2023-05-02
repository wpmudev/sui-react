import React from "react";
import { Input as Base } from "./input-base";

// Build standard input component
export const Input = ({ ...props }) => {
	return <Base {...props} />;
}
