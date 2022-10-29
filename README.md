# Shared UI Icons Pack

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://docs.npmjs.com/getting-started/installing-node), you can install `@wpmudev/sui-icons` with this command.

```bash
npm install --save @wpmudev/sui-icons
```

## Usage

There are many ways/formats of how to use the Shared UI Icons Package. The fastest and recommended way is via SVG directly. Or use the webfont version if you want to include all icons at once:

### SVG Icons - For a few icons in your project

1. If you want to use just a few icons. Find the icons you need in the "icons" folder. Then use them as regular images:

```html
<img
	width="32"
	height="32"
	src="@wpmudev/sui-icons/icons/plugin-smartcrawl.svg"
	alt="SmartCrawl Plugin" />
```

2. Icons can be served from a CDN such as [Unpkg](https://unpkg.com/). Simply use the `@wpmudev/sui-icons` npm package in the URL like the following:

```html
<img
	width="32"
	height="32"
	src="https://unpkg.com/@wpmudev/sui-icons/icons/plugin-smartcrawl.svg"
	alt="SmartCrawl Plugin" />
```

### Icons Font - Ideal when you want to include all icons at once

1. Install `@wpmudev/sui-icons` with this command. In the `<head>` of your HTML file, reference the location to your `sui-icons.css` stylesheet.

```html
<head>
  ...
  <link rel="stylesheet" href="@wpmudev/sui-icons/sui-icons.css" />
  ...
</head>
```

2. Use [unpkg.com](https://unpkg.com/) to load directly the Shared UI Icons Pack without installing anything:

```html
<head>
  ...
  <link rel="stylesheet" href="https://unpkg.com/@wpmudev/sui-icons/sui-icons.css" />
  ...
</head>
```

>Place dashicons with `<span>` tag in your HTML file, like this. Icon class names are to be used with the `sui-icons` class prefix.

```html
<span class="sui-icons sui-icons--smartcrawl"></span>
```

## Bugs, Ideas, Pull Requests

If you have any ideas or found bugs, please send me Pull Requests or let me know with [GitHub Issues](https://github.com/wpmudev/sui-icons/issues).

## License

The Shared UI Icons Pack is copyright by WPMU DEV, licensed under the [GPL-3.0](https://github.com/wpmudev/sui-icons/blob/master/LICENSE).
