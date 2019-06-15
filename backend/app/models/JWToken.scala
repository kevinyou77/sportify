package models

import play.api.libs.json.{JsValue, Json, Writes}

case class JWToken(id: Int=0, userId: Int=0, accessToken: String, startDate: String="", expiryDate: String="", merchantId: Int=0)

object JWToken{

  implicit val implicitWrites = new Writes[JWToken] {
    def writes(jwToken: JWToken): JsValue ={
      Json.obj(
        "id" -> jwToken.id,
        "userId" -> jwToken.userId,
        "merchantId" -> jwToken.merchantId,
        "accessToken" -> jwToken.accessToken,
        "startDate" -> jwToken.startDate,
        "expiryDate" -> jwToken.expiryDate
      )
    }
  }
}
