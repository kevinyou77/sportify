package utils

object Utility {

  import play.api.libs.json.{JsValue, Json}

  def generateJson(status: Boolean,message: String) ={
    import play.api.libs.json.JsObject
    JsObject(Seq(
      ("Success",Json.toJson(status)),
      ("Message",Json.toJson(message))
    ))
  }

  def successLoginJson(bearerToken: String):JsValue={
    val json:JsValue = Json.parse(s"""
      {
        "Success" : true,
        "Data" : {
          "BearerToken" : "$bearerToken"
        }

        }""")
    json
  }
}
