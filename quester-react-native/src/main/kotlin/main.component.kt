package quester

import quester.react.Text
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState

class Main: RComponent<RProps,RState>(){
  override fun RBuilder.render() {
    Text {
      +"TEXTTTTTTT"
    }
  }
}

@JsName("init")
fun init() = Main::class.js