package models

case class Reservation(id: Int=0, day: String, schedule: String, court_id: Int, status: Boolean)

object Reservation{

  import play.api.libs.json.Writes
  import play.api.libs.json.Json

  implicit val implicitWrites = new Writes[Reservation] {
    def writes(reservation: Reservation)={
      Json.obj(
        "id"->reservation.id,
        "day" -> reservation.day,
        "schedule" -> reservation.schedule,
        "courtId" -> reservation.court_id,
        "status" -> reservation.status
      )
    }
  }
}
