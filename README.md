# Material Design Ripple effect
Material Design Ripple effect with jQuery and CSS

Check out the official [Material Design resources](https://www.google.com/design/spec/animation/responsive-interaction.html#responsive-interaction-surface-reaction) made by Google

## Install

##### NPM

```bash
$ npm install material-ripple
```

## How to use it

You need to include the **CSS** and **JS** resources located in the `bin` folder. Don't forget to include **jQuery** as well.

````html
<link rel="stylesheet" href="ripple.min.css">

<div class="material-ripple">
  <span>My Account</span>
</div>

<script src="jquery.min.js"></script>
<script src="ripple.min.js"></script>
````

You can change the ripple color with the `data-ripple-color` attribute:

````html
<div class="material-ripple" data-ripple-color="#3498db">
  <span>Settings</span>
</div>
````

## License

MIT © [Balint Soos](https://github.com/balintsoos)
