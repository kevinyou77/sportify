package repositories
import play.api.db.slick.DatabaseConfigProvider
import scala.concurrent.ExecutionContext
import slick.jdbc.JdbcProfile
import play.api.Logger
import slick.lifted.Tag
import models.Order
import javax.inject.Inject

class OrderRepository @Inject()(databaseConfigProvider: DatabaseConfigProvider)(implicit executionContext: ExecutionContext){
    
    val logger: Logger = Logger(this.getClass)

    protected val dbConf = databaseConfigProvider.get[JdbcProfile]

    import dbConf._
    import profile.api._

    class OrderTable(tag: Tag) extends Table[Order](tag, "orders"){
        def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
        def userId = column[Int]("user_id")
        def courtId = column[Int]("court_id")
        def startTime = column[Int]("start_time")
        def endTime = column[Int]("end_time")
        def totalPrice = column[Int]("total_price")
        def status = column[String]("status")
        def createdAt = column[String]("created_at")
        def * = (id, userId, courtId, startTime, endTime, totalPrice, status, createdAt) <> ((Order.apply _).tupled, Order.unapply)
    }

    protected val orders = TableQuery[OrderTable]

}