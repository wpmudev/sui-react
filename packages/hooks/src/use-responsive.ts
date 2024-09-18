import { useState, useEffect, useMemo } from "react"

type ValueType = number | number[]

interface ConfigType {
	[key: string]: ValueType
}

const getMediaQuery = (value: ValueType): string => {
	if (typeof value === "number") {
		return `(min-width: ${value}px)`
	} else if (Array.isArray(value)) {
		const [min, max] = value
		return `(min-width: ${min}px) and (max-width: ${max - 1}px)` // Subtract 1 to make it inclusive
	}
	return ""
}

const getDevice = (devices: ConfigType): string => {
	for (const [deviceKey, value] of Object.entries(devices)) {
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
			desktop: 1200,
			tablet: 1024,
			mobile: 600,
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
