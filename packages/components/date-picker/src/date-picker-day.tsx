import React, { useState, useCallback } from "react"

import { getDate, isSameMonth, isToday, format, isWithinRange } from "date-fns"

import { generateCN } from "@wpmudev/sui-utils"

import { CodeSnippetProps } from "./date-picker.types"

const DatePickerDay: React.FC<any> = ({ value }) => {
	return <div className="sui-date-picker__calendar-day">{value}</div>
}

export { DatePickerDay }
