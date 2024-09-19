import { useState, useEffect, useMemo } from "react"

type ValueType = number | number[]

// Config type.
interface ConfigType {
	[key: string]: ValueType
}

// Sort the config object.
const sort = (devices: ConfigType) => {
	return Object.entries(devices).sort((a, b) => {
		const aIsRange = Array.isArray(a[1])
		const bIsRange = Array.isArray(b[1])

		if (aIsRange && bIsRange) {
			// If both are ranges, compare their min-width first, then max-width if necessary
			const [aMin, aMax] = a[1] as [number, number]
			const [bMin, bMax] = b[1] as [number, number]
			if (bMin !== aMin) {
				return bMin - aMin // Sort descending by min-width
			}
			return bMax - aMax // If min-widths are equal, sort descending by max-width
		}

		if (aIsRange && !bIsRange) {
			return -1
		}

		if (!aIsRange && bIsRange) {
			return 1
		}

		// If both are single min-widths, sort descending by their values
		const aValue = a[1] as number
		const bValue = b[1] as number

		return bValue - aValue
	})
}

// Generate the media queries.
const getMediaQuery = (value: ValueType): string => {
	if (typeof value === "number") {
		return `(min-width: ${value}px)`
	} else if (Array.isArray(value)) {
		let [min, max] = value,
			swap
		if (min > max) {
			swap = min
			min = max
			max = swap
		}
		return `(min-width: ${min}px) and (max-width: ${max - 1}px)` // Subtract 1 to make it inclusive
	}
	return ""
}

// Get the deivce key.
const getDevice = (devices: ConfigType): string => {
	const sortedDevices = sort(devices)

	for (const [deviceKey, value] of sortedDevices) {
		const mediaQuery = getMediaQuery(value)
		if (window.matchMedia(mediaQuery).matches) {
			return deviceKey
		}
	}

	return "unknown"
}

const useResponsive = (config: ConfigType = {}) => {
	const defaultBreakpoints = useMemo(() => {
		return {
			desktop: 1024,
			tablet: 600,
			mobile: [600, 0],
			...config,
		}
	}, [config])

	const [device, setDevice] = useState<string>(() =>
		getDevice(defaultBreakpoints),
	)

	useEffect(() => {
		const handleResize = () => {
			setDevice(getDevice(defaultBreakpoints))
		}

		// Initialize matchMedia for each device
		const mediaQueries = Object.values(defaultBreakpoints).map((value) => {
			const mediaQuery = getMediaQuery(value)
			const mediaList = window.matchMedia(mediaQuery)
			mediaList.addEventListener("change", handleResize)
			return mediaList
		})

		// Cleanup
		return () => {
			mediaQueries.forEach((mediaList) => {
				mediaList.removeEventListener("change", handleResize)
			})
		}
	}, [defaultBreakpoints])

	return device
}

export { useResponsive }
