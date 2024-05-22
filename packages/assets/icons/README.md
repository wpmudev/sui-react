[![npm](https://img.shields.io/npm/v/@wpmudev/sui-icons?color=blue&style=for-the-badge)](https://www.npmjs.com/package/@wpmudev/sui-icons)
[![License: GPLv2](https://img.shields.io/badge/License-GPL%20v2-blue.svg?color=green&style=for-the-badge)](http://www.gnu.org/licenses/gpl-3.0)

# Shared UI Icons Pack

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://docs.npmjs.com/getting-started/installing-node), you can install `@wpmudev/sui-icons` with this command.

```bash
npm i --save-dev @wpmudev/sui-icons
```

## Usage

There are many ways/formats to use the Shared UI Icons Package. The fastest and recommended way is via SVG directly. Or use the Webfont version if you want to include all icons at once:

### SVG Icons - For a few icons in your project

1. Suppose you want to use just a few icons. Find the icons you need in the "icons" folder. Then use them as regular images:

```html
<img
	width="32"
	height="32"
	src="@wpmudev/sui-icons/dist/svg/plugin-smartcrawl.svg"
	alt="SmartCrawl Plugin" />
```

2. It's possible to serve the icons from a CDN such as [Unpkg](https://unpkg.com/). Use the `@wpmudev/sui-icons` npm package in the URL like the following:

```html
<img
	width="32"
	height="32"
	src="https://unpkg.com/@wpmudev/sui-icons/dist/svg/plugin-smartcrawl.svg"
	alt="SmartCrawl Plugin" />
```

### Icons Font - Ideal when you want to include all icons at once

1. Install the `@wpmudev/sui-icons` and in the `&lt;head&gt;` of your HTML file, reference the location to your `sui-icons.css` stylesheet.

```html
<head>
  ...
  <link rel="stylesheet" href="@wpmudev/sui-icons/dist/css/sui-icons.css" />
  ...
</head>
```

2. Use [unpkg.com](https://unpkg.com/) to load the [Shared UI Icons Pack](https://www.npmjs.com/package/@wpmudev/sui-icons) directly without installing anything:

```html
<head>
  ...
  <link rel="stylesheet" href="https://unpkg.com/@wpmudev/sui-icons/dist/css/sui-icons.css" />
  ...
</head>
```

>Place the `suicons` class with `&lt;span&gt;` tag in your HTML file, like this. Then, use the <strong>icon name</strong> along with the `suicons-` class prefix.

```html
<span class="suicons suicons--plugin-smartcrawl"></span>
```

## Bugs, Ideas, Pull Requests

If you have any ideas or found bugs, please send me Pull Requests or let me know with [GitHub Issues](https://github.com/wpmudev/sui-icons/issues).

## License

### Can I use the SUI Icons Pack in my projects?

We created the **WPMU DEV Design System** to build plugins and products for [WPMU DEV](https://wpmudev.com/), not on products outside the company. Please visit the terms of use for full license details.

### Need a new icon?

New icons need to be added to **SUI Icons Pack** first. Please, visit the [Support](https://wpmudev.github.io/sui-docs/?path=/story/sui-support--page) page for more information on how to request it.

We can usually add an icon and release a new version on the same day if there is a hurry. However, remember that if there's a similar icon already available, we suggest you use it instead unless you request a design update.