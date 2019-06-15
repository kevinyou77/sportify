package controllers

import javax.inject.{Inject, Singleton}
import models.User
import play.api.libs.json.{JsValue, Json}
import play.api.mvc.{AbstractController, ControllerComponents, Request}
import services.UserService

import scala.concurrent.ExecutionContext
import repositories.UserRepository
import play.api.libs.json.JsObject


@Singleton
class UserController @Inject()(cc: ControllerComponents, userService: UserService, repo: UserRepository)(implicit executionContext: ExecutionContext) extends AbstractController(cc){
  import play.api.Logger
  import play.api.mvc.Action

  val logger: Logger = Logger(this.getClass)

  private def generateJson(status: Boolean,message: String) ={
    import play.api.libs.json.JsObject
    logger.warn("generating JSON data")
    JsObject(Seq(
      ("Success",Json.toJson(status)),
      ("Message",Json.toJson(message))
    ))
  }

  private def successLoginJson(bearerToken: String):JsValue={
    val json:JsValue = Json.parse(s"""
      {
        "Success" : true,
        "Data" : {
          "BearerToken" : "$bearerToken"
        }

        }""")
    json
  }

  private  def generateJsonData(user: User) ={
    JsObject(Seq(
      ("Success", Json.toJson(true)),
      ("Data", Json.toJson(user))
    ))
  }

  private def extractToken(authHeader: String): Option[String] = {
    logger.warn("extracting token from header")

    authHeader.split("Bearer ") match {
      case Array(_, token) => Some(token)
      case _               => None
    }
  }

  private def getToken(headers:Map[String,String]):String={
    logger.warn("getting token from header")

    var token : String = ""

    for ((k,v) <- headers) {
      if(k.equals("Authorization")) {
        token=token+extractToken(v).get
      }
    }
    token
  }

  def signUp: Action[JsValue] = Action.async(parse.json){
    request: Request[JsValue]=>
      val user: User = User(username=(request.body\"username").as[String], email=(request.body\"email").as[String], phone=(request.body\"phone").as[String], password=(request.body\"password").as[String],longitude = (request.body\"longitude").as[String],latitue = (request.body\"latitue").as[String],role = (request.body\"role").as[String])
      userService.signup(user).map{
        registered: Int =>
          Created(generateJson(true,"User registered"))
      }.recover{
        case usernameExist => Conflict(generateJson(false,"username already exist"))
      }
  }

  def signIn: Action[JsValue] = Action.async(parse.json){
    request: Request[JsValue]=>
      val username = (request.body\"username").as[String]
      val password = (request.body\"password").as[String]
      println(username+" "+password)
      userService.signin(username,password).map{
        bearerToken: String=>
          Ok(Json.toJson(successLoginJson(bearerToken)))
      }
  }

  def userProfile: Action[JsValue] = Action.async(parse.json){
    request: Request[JsValue] =>
      val headers: Map[String,String] = request.headers.toSimpleMap

      userService.getProfile(getToken(headers)).map{
        case Some(user)=>
          Ok(generateJsonData(user))
        case None => NotFound(generateJson(false, "access token expired"))
      }.recover {
        case unauthorize => NotFound(generateJson(false, "you are not authorized"))
      }
  }


}
