@file:JsModule("react-native")
@file:JsNonModule

package quester.react

import react.RClass
import react.RProps

external val View: RClass<RProps>
external val Text: RClass<RProps>
external val Button: RClass<RProps>

external val StyleSheet: StyleSheetObj

external interface StyleSheetObj {
  fun create(obj: dynamic): dynamic
}

external interface StyleDef {
  var flex: Int
  var backgroundColor: String
  var alignItems: String
  var justifyContent: String
}