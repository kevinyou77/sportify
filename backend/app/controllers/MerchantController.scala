package controllers

import javax.inject.Inject
import play.api.mvc.{AbstractController, ControllerComponents}
import services.MerchantService
import play.api.mvc.Request


import scala.concurrent.ExecutionContext

class MerchantController @Inject()(cc: ControllerComponents, merchantService: MerchantService)(implicit executionContext: ExecutionContext) extends AbstractController(cc){

  import play.api.libs.json.JsValue
  import play.api.mvc.Action

  import play.api.libs.json.Json
  import utils.Utility

  def login(): Action[JsValue]=Action.async(parse.json){
    import play.api.mvc.Request
    request: Request[JsValue]=>
      val username = (request.body\"username").as[String]
      val password = (request.body\"password").as[String]
      merchantService.signin(username,password).map{
        token=>
          Ok(Json.toJson(Utility.successLoginJson(token)))
      }.recover{
        case unauthorized=>Unauthorized(Json.toJson(Utility.generateJson(false,"username or password doesn't exist")))
      }
  }

  def register(): Action[JsValue] = Action.async(parse.json){
    import play.api.mvc.Request
    request: Request[JsValue]=>
      import models.Merchant
      val merchant = Merchant(0,(request.body\"username").as[String], (request.body\"password").as[String], (request.body\"email").as[String])
      merchantService.signUp(merchant).map{
        registered: Int =>
          Created(Utility.generateJson(true,"User registered"))
      }.recover{
        case usernameExist => Conflict(Utility.generateJson(false,"username already exist"))
      }
  }

  def addReservation: Action[JsValue] = Action.async(parse.json){
    request: Request[JsValue]=>
      import models.Reservation
      val reservation = Reservation(0,(request.body\"day").as[String],(request.body\"schedule").as[String],(request.body\"courtId").as[Int],(request.body\"status").as[Boolean])
      merchantService.addReservation(reservation).map{
        reservation=>
          Ok(Utility.generateJson(true,"reservation added"))
      }.recover{
        case reservationExist=>Conflict(Utility.generateJson(false,"reservation is exist"))
      }
  }

  def deleteReservation: Action[JsValue] = Action.async(parse.json){
    request: Request[JsValue]=>
      merchantService.deleteReservation((request.body\"day").as[String],(request.body\"schedule").as[String]).map{
        reservation=>
          NoContent
      }.recover{
        case reservationDoesntExist => NotFound(Utility.generateJson(false, "reservation doesn't exist"))
      }
  }

  def getReservation: Action[JsValue] = Action.async(parse.json){
    request: Request[JsValue]=>
    merchantService.getReservationByDay((request.body\"day").as[String]).map{
      reservation=>Ok(Json.toJson(reservation))
    }
  }
}
