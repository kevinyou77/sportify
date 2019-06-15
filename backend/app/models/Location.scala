package models

case class Location (id: Int, name: String)

object Location{

  import play.api.libs.json.Writes

  implicit val implicitWrites = new Writes[Location] {
    def writes(location: Location) ={
      import play.api.libs.json.Json
      Json.obj(
        "id"->location.id,
        "name" -> location.name
      )
    }
  }
}
