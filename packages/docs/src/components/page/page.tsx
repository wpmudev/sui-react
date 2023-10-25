/**
 *
 * External Dependencies
 *
 */
import React from "react"

/**
 *
 * Internal Dependencies
 *
 */
import Banner from "../banner/banner"
import Header from "../header/header"
import Body from "../body/body"
import Tabs from "../tabs/tabs"
import Section from "../section/section"
import Footer from "../footer/footer"
import "./page.scss"

/*************************************
 *
 * Home Component
 *
 *************************************/
interface HomeProps {
	title: string
	subtitle: React.ReactNode
	action: {
		link: string
		label: string
	}
	image: {
		src: string
		src2x: string
		width?: string
		height?: string
		alt?: string
	}
	children: React.ReactNode
}

const Home: React.FunctionComponent<
	HomeProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ title, subtitle, action, image, children, ...props }) => {
	return (
		<div className="csb-page" {...props}>
			<Banner title={title} subtitle={subtitle} action={action} image={image} />

			<Body>
				<Section container={true}>{children}</Section>
			</Body>

			<PageFooter />
		</div>
	)
}

/*************************************
 *
 * Simple Component
 *
 *************************************/
interface SimpleProps {
	title: string
	subtitle?: React.ReactNode
	status?: "planned" | "draft" | "ready" | "dead"
	children: React.ReactNode
}

const Simple: React.FunctionComponent<
	SimpleProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ title, subtitle, status, children, ...props }) => {
	return (
		<div className="csb-page" {...props}>
			<Header title={title} border={true} status={status} />

			<Body>
				{!!subtitle && (
					<Section contained={true}>
						<p className="csb-page__title">{subtitle}</p>
					</Section>
				)}

				{children}
			</Body>

			<PageFooter />
		</div>
	)
}

/*************************************
 *
 * Tabs Component
 *
 *************************************/
interface PageTabsProps {
	title: string
	subtitle?: React.ReactNode
	status?: "planned" | "draft" | "ready" | "dead"
	children: JSX.Element[]
}

const PageTabs: React.FunctionComponent<
	PageTabsProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ title, subtitle, status, children, ...args }) => {
	return (
		<div className="csb-page" {...args}>
			<Header title={title} border={false} status={status} />

			<Body>
				<Tabs label={subtitle}>{children}</Tabs>
			</Body>

			<PageFooter />
		</div>
	)
}

/*************************************
 *
 * Canvas Component
 *
 *************************************/
interface CanvasProps {
	children: React.ReactNode
}
const Canvas: React.FunctionComponent<
	CanvasProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ children, ...args }) => {
	return (
		<div className="csb-page" style={{ background: "transparent" }} {...args}>
			<Body>{children}</Body>
		</div>
	)
}

/*************************************
 *
 * PageFooter Component
 *
 *************************************/
const PageFooter: React.FunctionComponent = () => {
	return (
		<Footer>
			<div data-label="Terms of Use" data-kind="sui-terms--page" />
			<div
				data-label="Privacy Policy"
				data-link="https://incsub.com/privacy-policy/"
			/>
		</Footer>
	)
}

const Page = { Home, Simple, Tabs: PageTabs, Canvas }

export default Page
