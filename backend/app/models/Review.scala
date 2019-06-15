package models
import play.api.libs.json.Json
import play.api.libs.json.Writes

case class Review(id: Int=0, orderId: Int, rating: Float, review: String, courtId: Int)

object Review{
    implicit val implicitWrites = new Writes[Review]{
        def writes(review: Review)={
            Json.obj(
                "id" -> review.id,
                "orderId" -> review.orderId,
                "rating" -> review.rating,
                "review" -> review.review,
                "courtId" -> review.courtId
            )           
        }
    }
}