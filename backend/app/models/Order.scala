package models
import play.api.libs.json.Writes
import play.api.libs.json.Json

case class Order(id: Int, userId: Int, courtId: Int, startTime: Int, endTime: Int, totalPrice: Int, status: String, createdAt: String ="")

object Order{
    implicit val implicitWrites = new Writes[Order]{
        def writes(order: Order)={
            Json.obj(
                "id" -> order.id,
                "userId" -> order.userId,
                "courtId" -> order.courtId,
                "startTime" -> order.startTime,
                "endTime" -> order.endTime,
                "totalPrice" -> order.totalPrice,
                "status" -> order.status,
                "createdAt" -> order.createdAt
            )
        }
    }
}