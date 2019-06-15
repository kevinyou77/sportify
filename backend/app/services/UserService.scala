package services

import javax.inject.Inject
import repositories.{TokenRepository, UserRepository}
import util.BCryptUtility

import scala.concurrent.ExecutionContext

class UserService @Inject()(userRepository: UserRepository,tokenRepository: TokenRepository)(implicit executionContext: ExecutionContext){

  import models.{JWToken, User}

  import scala.concurrent.Future
  import play.api.Logger

  val logger: Logger = Logger(this.getClass)

  private def generateToken(user: User) ={
    import utils.JWTUtility
    val newToken = JWTUtility.encryptToken(user.id)
    tokenRepository.addAccessToken(newToken,user.id)
    print(newToken)
    newToken
  }

  private def checkExpiryToken(token: JWToken, user: User) ={
    import java.time.LocalDate
    val localDate = LocalDate.now()
    val expiryDate = LocalDate.parse(token.expiryDate)

    if(localDate.equals(expiryDate)){
      tokenRepository.deleteAccessToken(user.id)
      generateToken(user)
    }
    token.accessToken
  }

  def signup(user: User) = {
//    userRepository.getUser(user.username).flatMap{
//      case `user` =>
//        Future.failed(new Exception("username exist"))
//      case None=>
        userRepository.addUser(user,BCryptUtility.hashPassword(user.password))
    //}
  }

  def signin(username: String, password: String) = {
    var tokens =""
    userRepository.getUser(username).flatMap{
      case Some(user)=>
        if(BCryptUtility.check(password,user.password)){
          logger.info(password+" db:"+user.password)
          tokenRepository.getAccessToken(user.id).map{
            case Some(token) =>
              checkExpiryToken(token,user)
            case None =>
              generateToken(user)
          }
        }else {
          logger.info("username and password doesn't exist")
          Future.failed(new Exception("username and password doesn't exist"))
        }
      case None=>
        logger.info("username and password doesn't exist")
        Future.failed(new Exception("username doesn't exist"))
    }
  }

  def getProfile(token: String)={
    tokenRepository.getUserIdByToken(token).flatMap {
      case Some(token) =>
        userRepository.getUser(token.userId)
      case None=>Future.failed(new Exception("token is not exist"))
    }
  }

}
