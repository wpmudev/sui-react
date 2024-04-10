import { TextEncoder, TextDecoder } from "util"
import "@testing-library/jest-dom"
const { toHaveNoViolations } = require("jest-axe")

global.TextEncoder = TextEncoder
// @ts-expect-error
global.TextDecoder = TextDecoder

global.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn(),
}))

// Escape testing "react-prism-editor" package
jest.mock(
	"react-prism-editor",
	() =>
		({ children }: { children: JSX.Element }) =>
			children,
)

// Adding global node variables to the test environment
global.fetch = require("node-fetch-commonjs")
// @ts-ignore
global.Response = fetch.Response
// @ts-ignore
global.Headers = fetch.Headers
// @ts-ignore
global.Request = fetch.Request

// Add "toHaveNoViolations" accessibility matcher to jest
expect.extend(toHaveNoViolations)
