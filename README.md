# herald-of-the-dog

A reusable announcement bar banner component. If you don’t need a _Hide_ or _Close_ button on the banner, you don’t need this (just use CSS)!

* [Demo](https://zachleat.github.io/herald-of-the-dog/demo.html)
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

## Installation

1. Install from [npm](https://www.npmjs.com/package/herald-of-the-dog): `npm install herald-of-the-dog --save`
2. Inline helper script into your `<head>`

```js
// Inline this into your <head>

// The current banner CTA URL, we inject this from a JSON data file
let ctaUrl = "https://www.netlify.com/sustainability/";
let savedCtaUrl = localStorage.getItem("banner--cta-url");

if(savedCtaUrl === ctaUrl) {
  document.documentElement.classList.add("banner--hide");
}
```

3. Add `herald.css` and `herald.js` to your build CSS and JS.
4. Add the markup:

```html
<announcement-banner class="demo-banner">
  <a href="YOUR_URL">YOUR_TEXT</a>
  <button type="button" data-banner-close class="demo-banner-close">Close</button>
</announcement-banner>
```