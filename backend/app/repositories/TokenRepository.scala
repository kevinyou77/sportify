package repositories

import javax.inject.Inject
import play.api.db.slick.DatabaseConfigProvider

import scala.concurrent.ExecutionContext

class TokenRepository @Inject()(databaseConfigProvider: DatabaseConfigProvider)(implicit executionContext: ExecutionContext){

  import models.JWToken
  import play.api.Logger
  import slick.jdbc.JdbcProfile
  import slick.lifted.Tag

  val logger: Logger = Logger(this.getClass)

  protected val dbConf = databaseConfigProvider.get[JdbcProfile]

  import dbConf._
  import profile.api._

  import scala.concurrent.Future

  class JWTokenTable(tag: Tag) extends Table[JWToken](tag,"jwtoken"){
    def id = column[Int]("id", O.AutoInc, O.PrimaryKey)
    def userId = column[Int]("user_id")
    def accessToken = column[String]("access_token")
    def startDate = column[String]("start_date")
    def expiryDate = column[String]("expiry_date")
    def merchantId = column[Int]("merchant_id")
    def * = (id,userId,accessToken,startDate,expiryDate,merchantId) <> ((JWToken.apply _).tupled, JWToken.unapply)
  }

  private val jwToken = TableQuery[JWTokenTable]

  def getAccessToken(userId: Int): Future[Option[JWToken]] = db.run{
    logger.info("get access token")
    jwToken.filter(
      p =>
        p.userId === userId
    ).result.headOption
  }

  def getAccessTokenByMerchant(merchantId: Int): Future[Option[JWToken]] = db.run(jwToken.filter(j=>j.merchantId===merchantId).result.headOption)

  def getUserIdByToken(accesstoken: String): Future[Option[JWToken]] = db.run(jwToken.filter(token=>token.accessToken===accesstoken).result.headOption)

  def addAccessToken(accessToken: String, userId: Int) = db.run{
    logger.info("add access token")
    jwToken.map(jwToken=>(jwToken.accessToken,jwToken.userId,jwToken.merchantId))+=(accessToken,userId,0)
  }

  def addAccessTokenForMerchant(accessToken: String, merchantId: Int) = db.run{
    logger.info("add access token")
    jwToken.map(jwToken=>(jwToken.accessToken,jwToken.merchantId,jwToken.userId))+=(accessToken,merchantId,0)
  }

  def deleteAccessToken(userId: Int)= db.run{
    logger.info("delete access token")
    jwToken.filter(jwToken=>jwToken.userId===userId).delete
  }

  def deleteAccessTokenForMerchant(merchantId: Int)= db.run{
    logger.info("delete access token")
    jwToken.filter(jwToken=>jwToken.merchantId===merchantId).delete
  }
}
