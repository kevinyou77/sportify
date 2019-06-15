package models
import play.api.libs.json.Writes
import play.api.libs.json.Json

case class Court(id:Int=0, title: String, description: String, image: String, open_day: String, open_time: Int, close_time: Int, price: Int, location: String, status: String, overallRating: Int = 0, categoryId: Int, created_at: String="")

object Court{
    implicit val implicitWrites = new Writes[Court]{
        def writes (court: Court) = {
            Json.obj(
                "id" -> court.id,
                //"owner" -> court.owner,
                "title" -> court.title,
                "description" -> court.description,
                "image" -> court.image,
                "open_day" -> court.open_day,
                "open_time" -> court.open_time,
                "close_time" -> court.close_time,
                "price" -> court.price,
                "status" -> court.status,
                "location" -> court.location,
                "overallRating" -> court.overallRating,
                "categoryId" -> court.categoryId,
                "created_at" -> court.created_at
                //"updated_at" -> court.updated_at
            )
        }
    }
}