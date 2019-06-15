package repositories

import javax.inject.Inject
import play.api.db.slick.DatabaseConfigProvider
import slick.jdbc.JdbcProfile

import scala.concurrent.ExecutionContext

class ReservationRepository @Inject()(databaseConfigProvider: DatabaseConfigProvider)(implicit executionContext: ExecutionContext){

  protected val dbConf = databaseConfigProvider.get[JdbcProfile]

  import dbConf._
  import models.Reservation
  import profile.api._

  import scala.concurrent.Future

  class ReservationTable(tag: Tag) extends Table[Reservation](tag, "reservations"){
    def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
    def day = column[String]("open_day")
    def schedule = column[String]("schedule")
    def courtId = column[Int]("court_id")
    def status = column[Boolean]("status")
    def * =(id,day,schedule,courtId,status)<>((Reservation.apply _).tupled,Reservation.unapply)
  }

  val reservations = TableQuery[ReservationTable]

  def addReservation(addReservation: Reservation)=
    db.run(reservations.map(reservation=>(reservation.day,reservation.schedule,reservation.courtId,reservation.status))
      +=(addReservation.day,addReservation.schedule,addReservation.court_id,addReservation.status))

  def getReservations: Future[Seq[Reservation]]= db.run(reservations.result)

  def getReservationByDay(day: String): Future[Seq[Reservation]] = db.run(reservations.filter(r=> r.day===day).result)

  def getReservationByDayAndSchedule(day: String, schedule: String): Future[Option[Reservation]] = db.run(reservations.filter(r=> r.day===day&&r.schedule===schedule).result.headOption)

  def deleteReservation(reservationId: Int) = db.run(reservations.filter(r=>r.id===reservationId).delete)

}
