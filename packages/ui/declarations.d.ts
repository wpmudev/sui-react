// Declaration for importing .mdx files as React components.
declare module "*.mdx" {
	let MDXComponent: (props: any) => JSX.Element
	export default MDXComponent
}

// Declare image files with .jpg and .png extensions
declare module "*.jpg"
declare module "*.png"
