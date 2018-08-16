(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'quester-react-native'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'quester-react-native'.");
    }
    root['quester-react-native'] = factory(typeof this['quester-react-native'] === 'undefined' ? {} : this['quester-react-native'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
}));

//# sourceMappingURL=quester-react-native.js.map
