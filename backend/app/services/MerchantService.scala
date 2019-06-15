package services

import javax.inject.Inject
import models.JWToken
import repositories.{MerchantRepository, ReservationRepository, TokenRepository}

import scala.concurrent.ExecutionContext

class MerchantService @Inject()(merchantRepository: MerchantRepository, tokenRepository: TokenRepository, reservationRepository: ReservationRepository)(implicit executionContext: ExecutionContext){

  import models.{Merchant, Reservation}
  import play.api.Logger
  import util.BCryptUtility

  import scala.concurrent.Future

  private def generateToken(merchant: Merchant) ={
    import utils.JWTUtility
    val newToken = JWTUtility.encryptToken(merchant.id)
    tokenRepository.addAccessTokenForMerchant(newToken,merchant.id)
    print(newToken)
    newToken
  }

  private def checkExpiryToken(token: JWToken, merchant: Merchant) ={
    import java.time.LocalDate
    val localDate = LocalDate.now()
    val expiryDate = LocalDate.parse(token.expiryDate)

    if(localDate.equals(expiryDate)){
      tokenRepository.deleteAccessTokenForMerchant(merchant.id)
      generateToken(merchant)
    }
    token.accessToken
  }

  val logger: Logger = Logger(this.getClass)
  def signin(username: String, password: String) = {
    var tokens =""
    merchantRepository.getMerchant(username).flatMap{
      case Some(merchant)=>
        import util.BCryptUtility

        import scala.concurrent.Future
        if(BCryptUtility.check(password,merchant.password)){
          logger.info(password+" db:"+merchant.password)
          tokenRepository.getAccessTokenByMerchant(merchant.id).map{
            case Some(token) =>
              checkExpiryToken(token, merchant)
            case None =>
              generateToken(merchant)
          }
        }else {
          logger.info("username and password doesn't exist")
          Future.failed(new Exception("username and password doesn't exist"))
        }
      case None=>
        import scala.concurrent.Future
        logger.info("username and password doesn't exist")
        Future.failed(new Exception("username doesn't exist"))
    }
  }

  def signUp(merchant: Merchant)={
    merchantRepository.getMerchant(merchant.username).flatMap{
      case `merchant` =>
        Future.failed(new Exception("username exist"))
      case None=>
        merchantRepository.addMerchant(merchant,BCryptUtility.hashPassword(merchant.password))
    }
  }

  def addReservation(reservation: Reservation) ={
    reservationRepository.getReservationByDayAndSchedule(reservation.day,reservation.schedule).flatMap{
      case `reservation`=>
        Future.failed(new Exception("this schedule is exist"))
      case None=>
        reservationRepository.addReservation(reservation)
    }
  }

  def deleteReservation(day: String, schedule: String)={
    reservationRepository.getReservationByDayAndSchedule(day,schedule).flatMap{
      case Some(reservation)=>
        reservationRepository.deleteReservation(reservation.id)
      case None=> Future.failed(new Exception("reservation doesn't exist"))
    }
  }

  def getReservationByDay(day: String)={
    reservationRepository.getReservationByDay(day)
  }

}
