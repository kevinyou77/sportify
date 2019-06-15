package models

case class Image (id: Int=0, url: String, courtId: Int)

object Image{

  import play.api.libs.json.Writes

  implicit val implicitWrites = new Writes[Image] {
    def writes(image: Image)={
      import play.api.libs.json.Json
      Json.obj("url"->image.url,"courtId"->image.courtId)
    }
  }
}

