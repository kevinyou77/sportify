package repositories

import javax.inject.Inject
import play.api.db.slick.DatabaseConfigProvider

import scala.concurrent.ExecutionContext

class MerchantRepository @Inject()(databaseConfigProvider: DatabaseConfigProvider)(implicit executionContext: ExecutionContext){

  import play.api.Logger
  import slick.jdbc.JdbcProfile
  import slick.lifted.Tag

  val logger: Logger = Logger(this.getClass)

  protected val dbConf = databaseConfigProvider.get[JdbcProfile]

  import dbConf._
  import models.Merchant
  import profile.api._

  import scala.concurrent.Future

  class MerchantTable(tag: Tag) extends Table[Merchant](tag, "merchants"){
    def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
    def username = column[String]("username")
    def password = column[String]("password")
    def email = column[String]("email")
    def * =(id,username,password,email)<>((Merchant.apply _).tupled,Merchant.unapply)
  }

  val merchants = TableQuery[MerchantTable]

  def getMerchantById(merchantId: Int): Future[Option[Merchant]]=db.run{
    merchants.filter(m=> m.id===merchantId).result.headOption
  }

  def getMerchant(username: String): Future[Option[Merchant]]=db.run{
    merchants.filter(m=> m.username===username).result.headOption
  }

  def addMerchant(addMerchant: Merchant, hashPassword: String)=db.run{
    logger.info("add user : "+addMerchant.username)
    merchants.map(
      merchant=>(merchant.username, merchant.email, merchant.password)
    )+=(addMerchant.username, addMerchant.email, hashPassword)
  }
}
