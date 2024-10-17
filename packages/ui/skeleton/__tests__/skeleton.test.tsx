import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Skeleton, SkeletonCircle, SkeletonText } from "../src"
import { a11yTest } from "@wpmudev/sui-utils"

describe("@wpmudev/skeleton", () => {
	// Define the props for the Skeleton component
	const props = {
		type: "block", // Can be 'block', 'text', or 'circle'
		isLoaded: false, // Set to false to render skeleton
		isInline: false,
		isGrayScale: false,
		size: {
			width: "100px",
			height: "50px",
		},
		className: "custom-skeleton",
		_htmlProps: {
			"data-testid": "skeleton",
		},
	}

	// Define the content that should render when the Skeleton is loaded
	const skeletonContent = "__SKELETON_CONTENT__"

	// Define the SkeletonComponent as a functional component
	const SkeletonComponent = () => {
		return (
			<Skeleton {...props}>
				<span>{skeletonContent}</span>
			</Skeleton>
		)
	}

	// Test case: Ensure that the Skeleton component renders correctly
	it("renders skeleton correctly when not loaded", async () => {
		render(<SkeletonComponent />)
		expect(screen.getByTestId("skeleton")).toBeInTheDocument()

		// Check if the skeleton content is not rendered when loading
		expect(screen.queryByText(skeletonContent)).not.toBeInTheDocument()
	})

	// Test case: Ensure that the content renders when Skeleton is loaded
	it("renders content correctly when loaded", () => {
		render(
			<Skeleton {...props} isLoaded={true}>
				<span>{skeletonContent}</span>
			</Skeleton>,
		)
		// Check if the skeleton content is rendered after loading
		expect(screen.getByText(skeletonContent)).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(
			<Skeleton {...props}>
				<span>{skeletonContent}</span>
			</Skeleton>,
		)
	})
})

describe("@wpmudev/skeleton-text", () => {
	// Define the props for the SkeletonText component
	const props = {
		lines: 3,
		gap: 8,
		isLoaded: false,
		endLineWidth: "80%",
		className: "custom-skeleton-text",
		_skeletonProps: {
			_htmlProps: {
				"data-testid": "skeleton",
			},
		},
		_htmlProps: {
			"data-testid": "skeleton-text",
		},
	}

	// Define the content that should render when SkeletonText is loaded
	const skeletonTextContent = "__TEXT_CONTENT__"

	// Define the SkeletonTextComponent as a functional component
	const SkeletonTextComponent = () => {
		return (
			<SkeletonText {...props}>
				<span>{skeletonTextContent}</span>
			</SkeletonText>
		)
	}

	// Test case: Ensure that the SkeletonText component renders correctly
	it("renders skeleton text correctly when not loaded", async () => {
		render(<SkeletonTextComponent />)
		expect(screen.getByTestId("skeleton-text")).toBeInTheDocument()

		// Ensure the content is not visible when not loaded
		expect(screen.queryByText(skeletonTextContent)).not.toBeInTheDocument()

		// Ensure the number of skeleton lines rendered matches the `lines` prop
		expect(screen.getAllByTestId("skeleton")).toHaveLength(props.lines)
	})

	// Test case: Ensure the text content renders when SkeletonText is loaded
	it("renders text content correctly when loaded", () => {
		render(
			<SkeletonText {...props} isLoaded={true}>
				<span>{skeletonTextContent}</span>
			</SkeletonText>,
		)
		expect(screen.getByText(skeletonTextContent)).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(
			<SkeletonText {...props}>
				<span>{skeletonTextContent}</span>
			</SkeletonText>,
		)
	})
})

describe("@wpmudev/skeleton-circle", () => {
	// Define the props for the SkeletonCircle component
	const props = {
		size: {
			width: "50px",
			height: "50px",
		},
		isLoaded: false,
		className: "custom-skeleton-circle",
		_htmlProps: {
			"data-testid": "skeleton-circle",
		},
	}

	// Define the content that should render when the SkeletonCircle is loaded
	const skeletonCircleContent = "__CIRCLE_CONTENT__"

	// Define the SkeletonCircleComponent as a functional component
	const SkeletonCircleComponent = () => {
		return (
			<SkeletonCircle {...props}>
				<span>{skeletonCircleContent}</span>
			</SkeletonCircle>
		)
	}

	// Test case: Ensure that the SkeletonCircle component renders correctly
	it("renders skeleton circle correctly when not loaded", async () => {
		render(<SkeletonCircleComponent />)
		expect(screen.getByTestId("skeleton-circle")).toBeInTheDocument()

		// Ensure the content is not visible when not loaded
		expect(screen.queryByText(skeletonCircleContent)).not.toBeInTheDocument()
	})

	// Test case: Ensure the circle content renders when SkeletonCircle is loaded
	it("renders circle content correctly when loaded", () => {
		render(
			<SkeletonCircle {...props} isLoaded={true}>
				<span>{skeletonCircleContent}</span>
			</SkeletonCircle>,
		)
		expect(screen.getByText(skeletonCircleContent)).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(
			<SkeletonCircle {...props}>
				<span>{skeletonCircleContent}</span>
			</SkeletonCircle>,
		)
	})
})
