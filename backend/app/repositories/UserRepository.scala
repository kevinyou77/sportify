package repositories

import javax.inject.{Inject, Singleton}
import play.api.db.slick.DatabaseConfigProvider

import scala.concurrent.ExecutionContext
import akka.http.scaladsl.model.DateTime
import java.sql.Timestamp
import models.UserCategory

@Singleton
class UserRepository @Inject()(databaseConfigProvider: DatabaseConfigProvider)(implicit executionContext: ExecutionContext){

  import models.User
  import play.api.Logger
  import slick.jdbc.JdbcProfile
  import slick.lifted.Tag

  val logger: Logger = Logger(this.getClass)

  protected val dbConf = databaseConfigProvider.get[JdbcProfile]

  import dbConf._
  import profile.api._


  import scala.concurrent.Future

  implicit val dateTimeColumnType = MappedColumnType.base[DateTime, Timestamp](
    dt => new Timestamp(dt.clicks),
    ts => DateTime(ts.getTime)
  )
  
  class UserTable(tag: Tag) extends Table[User](tag, "users"){
    def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
    def username = column[String]("username")
    def email = column[String]("email")
    def password = column[String]("password")
    def longitude = column[String]("longitude")
    def latitue = column[String]("latitue")
    def phone = column[String]("phone")
    def created_at = column[String]("created_at")
    def updated_at = column[String]("updated_at")
    def role = column[String]("role")
    def * = (id,username,email,phone,password,longitude,latitue,role,created_at,updated_at)<> ((User.apply _).tupled, User.unapply)
  }

  class UserCategoryTable(tag: Tag) extends Table[UserCategory](tag, "user_categories"){
    def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
    def userId = column[Int]("user_id")
    def categoryId = column[Int]("category_id")
    def * = (id, userId, categoryId) <> ((UserCategory.apply _).tupled, UserCategory.unapply)
  }

  private val user = TableQuery[UserTable]
  private val userCategories = TableQuery[UserCategoryTable]

  def getUsers: Future[Seq[User]] = db.run {
    logger.info("getting users")
    user.result
  }

  def getUser(username: String): Future[Option[User]] = db.run{
    logger.info("getting user : "+username)
    user.filter(user=>user.username===username).result.headOption
  }

  def getUser(id: Int): Future[Option[User]] = db.run(user.filter(u=>u.id===id).result.headOption)

  def addUser(addUser: User, hashPassword: String)=db.run{
    logger.info("add user : "+addUser.username)    
    user.map(
      user=>(user.username, user.email, user.phone, user.password, user.longitude, user.latitue, user.role)
    )+=(addUser.username, addUser.email, addUser.phone, hashPassword, addUser.longitude, addUser.latitue, addUser.role)
  }

  def deleteUser(username: String) = db.run{
    logger.info("delete user: "+username)    
    user.filter(
      user=>
        user.username===username
    ).delete
  }

}
