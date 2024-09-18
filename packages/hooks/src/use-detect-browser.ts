/**
 * This hooks detects browser agent and their version
 */
const useDetectBrowser = () => {
	const userAgent: string = navigator?.userAgent ?? ""

	let name: string | undefined = "unknown"
	let ver: string | undefined = ""

	switch (true) {
		case userAgent.indexOf("Firefox") > -1:
			name = "firefox"
			ver = userAgent?.match(/Firefox\/([0-9.]+)/)?.[1]
			break
		case userAgent.indexOf("Chrome") > -1:
			name = "chrome"
			ver = userAgent?.match(/Chrome\/([0-9.]+)/)?.[1]
			break
		case userAgent.indexOf("Safari") > -1:
			name = "safari"
			ver = userAgent?.match(/Version\/([0-9.]+)/)?.[1]
			break
		case userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1:
			name = "ie"
			ver = userAgent?.match(/(?:MSIE |rv:)([0-9.]+)/)?.[1]
			break
		case userAgent.indexOf("Edge") > -1:
			name = "ms-edge"
			ver = userAgent?.match(/Edge\/([0-9.]+)/)?.[1]
			break
	}

	return { name, ver }
}

export { useDetectBrowser }
