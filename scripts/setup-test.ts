import { TextEncoder, TextDecoder } from "util"
import "@testing-library/jest-dom"

global.TextEncoder = TextEncoder
// @ts-expect-error
global.TextDecoder = TextDecoder

global.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn(),
}))

jest.mock(
	"react-prism-editor",
	() =>
		({ children }: { children: JSX.Element }) =>
			children,
)
