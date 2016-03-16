# Material Design Ripple effect
> Material Design Ripple effect with jQuery and CSS

![what it looks like](http://i.giphy.com/Hpd2CH1wdEZfq.gif)

Check out the [live example at CodePen](http://codepen.io/balintsoos/full/YqWLOJ/)

## Installation

##### NPM
`material-ripple` is available as an [npm package](https://www.npmjs.com/package/material-ripple)

```bash
$ npm install material-ripple
```

## How to use it

You need to include the **CSS** and **JS** resources located in the `dist` folder. Don't forget to include **jQuery** as well.

````html
<link rel="stylesheet" href="ripple.min.css">

<div class="material-ripple">
  <span>My Account</span>
</div>

<script src="jquery.min.js"></script>
<script src="ripple.min.js"></script>
````

### Styling

You can change the ripple color with the `data-ripple-color` attribute:

````html
<div class="material-ripple" data-ripple-color="#3498db">
  <span>Settings</span>
</div>
````

Or you can use CSS:

````css
.red-ripple > .material-ink {
  background-color: red;
}
````

**NOTE:** Static positioned elements appear behind absolutely positioned siblings (`.material-ink` in this case)
so you should set `position: relative;` to child elements inside `.material-ripple` to bring them above `.material-ink`.

For example if you have an HTML structure like this:

````html
<div class="material-ripple">
  <span>Dashboard</span>
</div>
````

Make the `span` elements relatively positioned like this:

````css
.material-ripple > span {
  position: relative;
}
````

## Bonus

Material Design Cards and Box Shadow by **Samuel Thornton**
[CodePen link](http://codepen.io/sdthornton/pen/wBZdXq)

You can choose from 5 different shadow level (from 1 to 5).

````html
<div class="material-card material-shadow-1">
  ...
</div>
````

## License

MIT © [Balint Soos](https://github.com/balintsoos)
