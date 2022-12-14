# Shared UI Icons Pack

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://docs.npmjs.com/getting-started/installing-node), you can install `@wpmudev/suicons` with this command.

```bash
npm i --save-dev @wpmudev/suicons
```

## Usage

There are many ways/formats to use the Shared UI Icons Package. The fastest and recommended way is via SVG directly. Or use the Webfont version if you want to include all icons at once:

### SVG Icons - For a few icons in your project

1. Suppose you want to use just a few icons. Find the icons you need in the "icons" folder. Then use them as regular images:

```html
<img
	width="32"
	height="32"
	src="@wpmudev/suicons/icons/plugin-smartcrawl.svg"
	alt="SmartCrawl Plugin" />
```

2. It's possible to serve the icons from a CDN such as [Unpkg](https://unpkg.com/). Use the `@wpmudev/suicons` npm package in the URL like the following:

```html
<img
	width="32"
	height="32"
	src="https://unpkg.com/@wpmudev/suicons/icons/plugin-smartcrawl.svg"
	alt="SmartCrawl Plugin" />
```

### Icons Font - Ideal when you want to include all icons at once

1. Install the `@wpmudev/suicons` and in the `&lt;head&gt;` of your HTML file, reference the location to your `suicons.css` stylesheet.

```html
<head>
  ...
  <link rel="stylesheet" href="@wpmudev/suicons/suicons.css" />
  ...
</head>
```

2. Use [unpkg.com](https://unpkg.com/) to load the [Shared UI Icons Pack](https://www.npmjs.com/package/@wpmudev/suicons) directly without installing anything:

```html
<head>
  ...
  <link rel="stylesheet" href="https://unpkg.com/@wpmudev/suicons/suicons.css" />
  ...
</head>
```

>Place the `suicons` class with `&lt;span&gt;` tag in your HTML file, like this. Then, use the <strong>icon name</strong> along with the `suicons-` class prefix.

```html
<span class="suicons suicons--smartcrawl"></span>
```

## Bugs, Ideas, Pull Requests

If you have any ideas or found bugs, please send me Pull Requests or let me know with [GitHub Issues](https://github.com/wpmudev/suicons/issues).

## License

### Can I use the SUI Icons Pack in my projects?

We created the WPMU DEV Design System to build plugins and products for WPMU DEV, not on products outside the company.

Additionally, many of the icons used in the SUI Icons Pack are licensed and the property of Fonticons, Inc. Projects and products not distributed by WPMU DEV must not use SUI Icons Pack. Please visit the [terms of use](https://wpmudev.github.io/sui-docs/?path=/story/sui-terms--page) for full license details.

### Need a new icon?

Please, see the [Support](https://wpmudev.github.io/sui-docs/?path=/story/sui-support--page) page to gather more information on requesting new icons and improvements.
