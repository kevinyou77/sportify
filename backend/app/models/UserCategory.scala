package models
import play.api.libs.json.Writes
import play.api.libs.json.Json

case class UserCategory(id: Int, categoryId: Int, userId: Int)

object UserCategory{
    implicit val implicitWrites = new Writes[UserCategory]{
        def writes(userCategory: UserCategory)={
            Json.obj(
                "id" -> userCategory.id,
                "userId" -> userCategory.userId,
                "categoryId" -> userCategory.categoryId
            )
        }
    }
}