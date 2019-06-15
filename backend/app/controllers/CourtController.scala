package controllers

import javax.inject.Inject
import play.api.mvc.{AbstractController, ControllerComponents}
import repositories.CourtRepository
import services.{CourtService, MerchantService}

import scala.concurrent.ExecutionContext

class CourtController @Inject()(cc: ControllerComponents, courtService: CourtService, repo: CourtRepository, merchantService: MerchantService)(implicit executionContext: ExecutionContext) extends AbstractController(cc){

  import models.{Court, Image}
  import play.api.libs.json._
  import play.api.mvc.Action

  private def generateJson(jsArray: JsArray) ={
    import play.api.libs.json.JsObject

    val jsObject = Json.toJson(jsArray)
    JsObject(Seq(
      ("Success",Json.toJson(true)),
      ("Data",jsObject)
    ))
  }


  def jsonData(court: Court, category: String) : JsValue= {
    import play.api.libs.json.JsObject
    println(category)
        JsObject(Seq(
        "id" -> JsNumber(court.id),
        "title" -> JsString(court.title),
        "rating" -> JsNumber(court.overallRating),
        "type" -> JsString(category),
          "image" -> JsString(court.image)
      ))
  }

  def imageJson(images: Seq[Image])={
    JsObject(Seq(
      ("Success",Json.toJson(true)),
      ("Data", Json.toJson(images))
    ))
  }


  import models.{Category, Location, Reservation}
  import play.api.mvc.Request

  def get5DataCourt(): Action[JsValue] = Action.async(parse.json){
    request: Request[JsValue]=>
      var jsonArray = Json.arr()
    courtService.get5Data.map{
      court=>
        for(c <- court){
          jsonArray = jsonArray :+ jsonData(c._1,c._2)
        }
        Ok(generateJson(jsonArray))
    }
  }

  def getImagesByCourtId: Action[JsValue] = Action.async(parse.json){
    request: Request[JsValue]=>
      courtService.getImagesByCourtId((request.body\"courtId").as[Int]).map{
        images=>
          Ok(imageJson(images))
      }
  }

  def jsonHead(court: Court, resArray: JsArray)={
    JsObject(Seq(
      ("Court",Json.toJson(court)),
      ("Schedules", resArray)
    ))
  }

  def jsonBody(reservation: Reservation)={
    JsObject(Seq(
      "id"->JsNumber(reservation.id),
      "courtId"->JsNumber(reservation.court_id),
      "day"->JsString(reservation.day),
      "schedule"->JsString(reservation.schedule),
      "status"->JsBoolean(reservation.status)
    ))
  }

  def getCourts(page: Int, paging: Int): Action[JsValue] = Action.async(parse.json){
    request: Request[JsValue] =>
      courtService.getAllCourt(page, paging,(request.body\"type").as[String], (request.body\"day").as[String]).map(
        court=> {
          var courtId=court.head._2.id
          var headJson = Json.arr()
          var bodyJson = Json.arr()
          bodyJson=bodyJson:+jsonBody(court.head._1):+jsonBody(court.seq(1)._1):+jsonBody(court.seq(2)._1)
          headJson=headJson:+jsonHead(court.head._2,bodyJson)
          bodyJson=Json.arr()
          courtId=court.seq(3)._1.court_id
          for (c <- 3 to court.size-3) {
            if (court.seq(c)._1.court_id != courtId) {
              courtId = court.seq(c)._1.court_id
              headJson = headJson :+ jsonHead(court.seq(c)._2, bodyJson)
              bodyJson = Json.arr()
            }
            bodyJson = bodyJson :+ jsonBody(court.seq(c)._1)
          }
          Ok(Json.toJson(headJson))
        }
      )
  }

  def jsonLocationAndCategory(locations: Seq[Location],categories: Seq[Category]) = {
    val objectLocations = Json.toJson(locations)
    val objectCategories = Json.toJson(categories)
    val data = JsObject(Seq(
      ("LocationList",objectLocations),
      ("Types",objectCategories)
    ))
    JsObject(Seq(
      ("data",data)
    ))
  }

  def getLocationAndCategory: Action[JsValue] = Action.async(parse.json){
    request: Request[JsValue] =>
      courtService.getLocationAndCategories.map(
        LC=>
          Ok(jsonLocationAndCategory(LC._1,LC._2))
      )
  }
}
