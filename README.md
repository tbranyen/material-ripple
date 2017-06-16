# Material Ripple

Displays a ripple effect within an element container. Uses ES 6, CSS Variables,
and is compiled down to ES5/UMD with Babel.

## Installation

This has been forked from: https://github.com/balintsoos/material-ripple

``` sh
npm install @tbranyen/material-ripple
```

## How to use

Once you've installed using NPM, you will have a folder:

```
node_modules/@tbranyen/material-ripple
```

You can import using ES6 or AMD, CJS, or simply by dropping the
`material-ripple.js` file into an HTML page.

``` js
import { eventListener, className } from '@tbranyen/material-ripple';
```

You will also need to include the CSS:

``` html
<link rel="stylesheet" href="node_modules/@tbranyen/material-ripple/ripple.css">

<div class="material-ripple">
  <span>My Account</span>
</div>

<script src="material-ripple.min.js"></script>
```

## z-index issues

In order to prevent overlap issues with siblings, there is a CSS rule defined:

``` css
/*
 * This keeps the ripple underneath siblings, by setting all siblings to have
 * a higher z-index than the `.material-ripple-ink` priority of `0`.
 */
.material-ripple-ink ~ :not(.material-ripple-ink) {
  z-index: 1;
  position: relative;
}
```

Just keep it in mind when using this tool, and adjust your CSS accordingly.

## CSS Variables

You can change the ripple background color using a CSS variable: 

``` html
<div class="material-ripple" style="--material-ripple-background: #3498db">
  <span>Settings</span>
</div>
```

Or you can use CSS:

``` css
.red-ripple {
  --material-ripple-background: red;
}
```

## License

MIT © [Balint Soos](https://github.com/balintsoos)
