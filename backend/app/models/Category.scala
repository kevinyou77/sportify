package models
import play.api.libs.json.Writes
import play.api.libs.json.Json

case class Category(id: Int, name: String)

object Category{
    implicit val implicitWrites = new Writes[Category]{
        def writes(category: Category) = {
            Json.obj(
                "id" -> category.id,
                "name" -> category.name
            )
        }
    }
}