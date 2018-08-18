package quester.components

import kotlinext.js.jsObject
import quester.react.*
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState

class Main : RComponent<RProps, RState>() {
  override fun RBuilder.render() {
    View {
      attrs {
        style = styles.container
      }

      Text {
        +"TEXTTTTTTT"
      }
    }
  }

  val styles = StyleSheet.create(
    jsObject<dynamic> {
      container = jsObject<StyleDef> {
        flex = 1
        backgroundColor = "#FFFFFF"
        alignItems = "center"
        justifyContent = "center"
      }
    })
}