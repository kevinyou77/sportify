package models

import play.api.libs.json.{JsValue, Json, Writes}


case class User(id: Int=0, username: String, email: String, phone: String, password: String, longitude: String, latitue: String, role: String, createdAt: String = "", updateAt: String ="")

object User{
  implicit val implicitWrite = new Writes[User] {
    def writes(user: User): JsValue ={
      Json.obj(
        "id" -> user.id,
        "username" -> user.username,
        "email" -> user.email,
        "phone" -> user.phone,
        "longtitude" -> user.longitude,
        "latitude" -> user.latitue,
        "role" -> user.role,
        "createdAt" -> user.createdAt,
        "updateAt" -> user.updateAt
      )
    }
  }
}