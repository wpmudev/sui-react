import { useState, useEffect, useMemo } from "react"

type ValueType = number | number[]

// Config type.
interface ConfigType {
	[key: string]: ValueType
}

// Sort the config object.
const sort = (devices: ConfigType) => {
	return Object.entries(devices).sort((a, b) => {
		const [aValue, bValue] = [a[1], b[1]]
		const [aIsRange, bIsRange] = [Array.isArray(aValue), Array.isArray(bValue)]

		if (aIsRange && bIsRange) {
			// compare min-width, then max-width if necessary
			const [aMin, aMax] = aValue as [number, number]
			const [bMin, bMax] = bValue as [number, number]
			return bMin !== aMin ? bMin - aMin : bMax - aMax
		}

		// prioritize ranges over single values
		if (aIsRange !== bIsRange) return aIsRange ? -1 : 1
		return (bValue as number) - (aValue as number)
	})
}

// Generate the media queries.
const getMediaQuery = (value: ValueType): string => {
	if (typeof value === "number") {
		return `(min-width: ${value}px)`
	}

	if (Array.isArray(value)) {
		let [min, max] = value
		// swap values if min is greater than max
		if (min > max) [min, max] = [max, min]

		return `(min-width: ${min}px) and (max-width: ${max - 1}px)` // Subtract 1 for inclusivity
	}

	return ""
}

// Get the deivce key.
const getDevice = (devices: ConfigType): string => {
	for (const [deviceKey, value] of sort(devices)) {
		if (window.matchMedia(getMediaQuery(value)).matches) {
			return deviceKey
		}
	}
	return "OutOfScope"
}

const useResponsive = (config: ConfigType = {}) => {
	const defaultBreakpoints = useMemo(
		() => ({ desktop: 1024, tablet: 600, mobile: [600, 0],...config }),
		[config],
	)

	const [device, setDevice] = useState(() => getDevice(defaultBreakpoints))

	useEffect(() => {
		const handleResize = () => setDevice(getDevice(defaultBreakpoints))

		// initialize matchMedia for each device and listen for changes
		const mediaQueries = Object.values(defaultBreakpoints).map((value) => {
			const mediaList = window.matchMedia(getMediaQuery(value))
			mediaList.addEventListener("change", handleResize)
			return mediaList
		})

		// cleanup event listeners on unmount
		return () => {
			mediaQueries.forEach((mediaList) =>
				mediaList.removeEventListener("change", handleResize),
			)
		}
	}, [defaultBreakpoints])

	return device
}

export { useResponsive }
