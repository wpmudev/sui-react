import React, {forwardRef} from "react";
import { Input as Base } from "./input-base";

// Build input component with forward ref
export const InputRef = forwardRef(({...props}, ref) => {
	return <Base {...props} ref={ref} />;
});
