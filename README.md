# announcement-banner

A reusable announcement bar banner component. If you don’t need a _Hide_ or _Close_ button on the banner, you don’t need this (just use CSS)!

* [Demo](https://zachleat.github.io/announcement-banner/demo.html)
* Read more at [_Ruthlessly Eliminating Layout Shift on Netlify.com_](https://www.zachleat.com/web/layout-shift/)

Features:

* Hyperlink to a thing.
* Limited visual style (bring your own theme)
* JavaScript not required.
* Close preference saved to local storage for future page loads
* Frameworkless: Web component
* No CLS (cumulative layout shift):
  * Even when opted in to closed by default
  * Even when JavaScript fails
  * Even when JavaScript succeeds but runs after render
* Use the `key` attribute (v1.0.5+) (or backwards compatible with `data-banner-key` 1.0.3+) to set your own storage key for comparison (defaults to the first link URL).

## Installation

1. Install from [npm](https://www.npmjs.com/package/@zachleat/announcement-banner): `npm install @zachleat/announcement-banner --save`
2. Inline helper script into your `<head>`

```js
// Inline this into your <head>

// The current banner CTA URL, we inject this from a JSON data file
let key = "https://www.zachleat.com/";
let savedKey = localStorage.getItem("banner--cta-url");

if(savedKey === key) {
  document.documentElement.classList.add("banner--hide");
}
```

3. Add `announcement-banner.css` and `announcement-banner.js` to your build CSS and JS.
4. Add the markup:

```html
<announcement-banner class="demo-banner">
  <a href="YOUR_URL">YOUR_TEXT</a>
  <button type="button" data-banner-close class="demo-banner-close">Close</button>
</announcement-banner>
```

## Changelog

* `v1.0.6` npm package name changed from `herald-of-the-dog` to `@zachleat/announcement-banner`