package models
import play.api.db.slick.DatabaseConfigProvider
import scala.concurrent.ExecutionContext
import play.api.Logger
import slick.jdbc.JdbcProfile
import javax.inject.Inject
import scala.concurrent.Future

class ReviewRepository @Inject()(databaseConfigProvider: DatabaseConfigProvider)(implicit executionContext: ExecutionContext){
    
    val logger: Logger = Logger(this.getClass)

    protected val dbConf = databaseConfigProvider.get[JdbcProfile]

    import dbConf._
    import profile.api._

    class ReviewTable(tag: Tag) extends Table[Review](tag, "reviews"){
        def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
        def orderId = column[Int]("order_id")
        def rating = column[Float]("rating")
        def review = column[String]("review")
        def courtId = column[Int]("court_id")
        def * = (id, orderId, rating, review, courtId) <> ((Review.apply _).tupled, Review.unapply)
    }

    protected val reviews = TableQuery[ReviewTable]

    def addReview(addreview: Review): Future[Int]= db.run(
        reviews.map(
            r=>(r.orderId,r.rating, r.review, r.courtId)
        )+=(addreview.orderId, addreview.rating, addreview.review, addreview.courtId)
    )

    def getReviewByCourt(courtId : Int): Future[Seq[Review]] = db.run(
        reviews.filter(r=> r.courtId === courtId).result
    )
}