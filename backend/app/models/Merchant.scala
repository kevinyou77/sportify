package models

case class Merchant(id: Int=0, username: String, password: String, email: String)

object Merchant{

  import play.api.libs.json.Writes
  import play.api.libs.json.Json

  implicit val implicitWrites = new Writes[Merchant] {
    def writes(merchant: Merchant)={
      Json.obj(
        "id"->merchant.id,
        "username" -> merchant.username,
        "password" -> merchant.password,
        "email" -> merchant.email
      )
    }
  }
}

