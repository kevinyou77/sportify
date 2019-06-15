package models
import play.api.libs.json.Writes
import play.api.libs.json.Json

case class CourtCategory(id: Int=0, courtId: Int, categoryId: Int)

object CourtCategory{
    implicit val implicitWrites = new Writes[CourtCategory]{
        def writes (CourtCategory: CourtCategory) = {
            Json.obj(
                "id" -> CourtCategory.id,
                "courtId" -> CourtCategory.courtId,
                "categoryId" -> CourtCategory.categoryId
            )
        }
    }
}