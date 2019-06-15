package repositories
import javax.inject.Inject
import models.{Category, Court}
import play.api.Logger
import play.api.db.slick.DatabaseConfigProvider
import slick.jdbc.JdbcProfile

import scala.concurrent.{ExecutionContext, Future}

class CourtRepository @Inject()(databaseConfigProvider: DatabaseConfigProvider)(implicit executionContext: ExecutionContext){
    
    val logger: Logger = Logger(this.getClass)

    protected val dbConf = databaseConfigProvider.get[JdbcProfile]

    import dbConf._
    import models.{Image, Location, Reservation}
    import profile.api._

    class CourtTable(tag: Tag) extends Table[Court](tag, "courts"){
        def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
        //def owner = column[Int]("owner")
        def title = column[String]("title")
        def description = column[String]("description")
        def image = column[String]("image")
        def open_day = column[String]("open_day")
        def open_time = column[Int]("open_time")
        def close_time = column[Int]("close_time")
        def price = column[Int]("price")
        def status = column[String]("status")
        def location = column[String]("location")
        def overallRating = column[Int]("overall_rating")
        def categoryId = column[Int]("category_id")
        def created_at = column[String]("created_at")
        //def updated_at = column[String]("updated_at")
        def * = (id, title, description, image, open_day, open_time, close_time, price, location, status, overallRating, categoryId, created_at) <> ((Court.apply _).tupled, Court.unapply)
    }

    class LocationTable(tag: Tag) extends Table[Location](tag, "locations"){
        def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
        def name = column[String]("name", O.PrimaryKey, O.AutoInc)
        def * = (id,name) <> ((Location.apply _).tupled, Location.unapply)
    }

    class CategoryTable(tag: Tag) extends Table[Category](tag, "categories"){
        def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
        def name = column[String]("name")
        def * = (id, name) <> ((Category.apply _).tupled, Category.unapply)
    }

    class ImageTable(tag: Tag) extends Table[Image](tag, "images"){
        def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
        def url = column[String]("url")
        def courtId = column[Int]("court_id")
        def * =(id,url,courtId) <> ((Image.apply _).tupled, Image.unapply)
    }

    class ReservationTable(tag: Tag) extends Table[Reservation](tag, "reservations"){

        import models.Reservation

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


    private val courts = TableQuery[CourtTable]
    private val categories = TableQuery[CategoryTable]
    private val locations = TableQuery[LocationTable]
    private val images = TableQuery[ImageTable]

    def addCourt(addCourt: Court) = db.run{
        val c: Court = Court(0,addCourt.title, addCourt.description, addCourt.image, addCourt.open_day, addCourt.open_time, addCourt.close_time, addCourt.price, addCourt.location, addCourt.status, 0, addCourt.categoryId)
        courts.map(
            court=>(court.title, court.description, court.image, court.open_day, court.open_time, court.close_time, court.price, court.location, court.status)
        )+=(addCourt.title, addCourt.description, addCourt.image, addCourt.open_day, addCourt.open_time, addCourt.close_time, addCourt.price, addCourt.location, addCourt.status)
    }

    def getCategories: Future[Seq[Category]] = db.run(categories.result)

    def getLocation: Future[Seq[Location]] = db.run(locations.result)

    def getCourts: Future[Seq[Court]] = db.run(
        courts.result
    )

    def getLength: Future[Int] = db.run(
        courts.length.result
    )

    def getCategoryId(name: String):Future[Option[Category]] = db.run(categories.filter(c=>c.name===name).result.headOption)

    def getCourts(offset:Int,limit:Int,categoryId: Int) : Future[Seq[Court]] = db.run{
        logger.info(offset+" "+limit)

        courts.filter(c=>c.categoryId===categoryId).sortBy(_.id).sortBy(_.overallRating.desc).drop(offset).take(limit).result
    }

    def getCourtsByDay(offset:Int,limit:Int,categoryId: Int, day:String)  = db.run{
        logger.info(offset+" "+limit)
        (reservations join courts on(_.courtId===_.id)).map{ case (p, a) => (p, a) }.filter(a=> a._2.categoryId===categoryId&&a._1.day===day).result
    }

    def getImagesByCourtId(courtId: Int) : Future[Seq[Image]] = db.run(images.filter(i=>i.courtId===courtId).result)

    def getCourtsBy5Data: Future[Seq[(Court,String)]] = db.run{
        logger.info("getting 5 court")
      (courts join categories on (_.categoryId === _.id))
        .map{ case (p, a) => (p, a.name) }.take(5).sortBy(_._1.overallRating.desc).result
    }

//    def get5DataWithReservation = {
//        val q1= for {
//            c <- courts
//            i <- images
//        }
//    }
}