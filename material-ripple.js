(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.materialRipple = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.eventListener = eventListener;
  var className = exports.className = 'material-ripple';

  var inkClassName = className + '-ink';
  var animateClass = inkClassName + '-animate';

  function eventListener(_ref) {
    var target = _ref.target,
        pageX = _ref.pageX,
        pageY = _ref.pageY;

    if (!target.matches('.' + className)) {
      target = target.closest('.' + className);

      if (!target) {
        return;
      }
    }

    var ink = target.querySelector('.' + inkClassName);

    if (!ink) {
      ink = Object.assign(document.createElement('div'), {
        className: inkClassName
      });

      target.insertBefore(ink, target.firstChild);
    }

    ink.classList.remove(animateClass);

    var x = pageX - target.offsetLeft - ink.offsetWidth / 2;
    var y = pageY - target.offsetTop - ink.offsetHeight / 2;

    ink.style.setProperty('--' + className + '-ink-top', y + 'px');
    ink.style.setProperty('--' + className + '-ink-left', x + 'px');

    ink.classList.add(animateClass);
  }

  if (typeof document !== 'undefined') {
    document.body.addEventListener('click', eventListener);
  }
});
