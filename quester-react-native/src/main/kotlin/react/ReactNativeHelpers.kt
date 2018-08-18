package quester.react

import react.RProps

var RProps.style: dynamic
  set(style) {
    this.asDynamic().style = style
  }
  get() {
    return this.asDynamic().style
  }

