package services
import com.google.inject.Inject
import models.Court
import play.api.libs.json.{JsNumber, JsString, JsValue}
import repositories.CourtRepository

import scala.concurrent.ExecutionContext

class CourtService @Inject()(courtRepository: CourtRepository)(implicit executionContext: ExecutionContext){

    import models.{Category, Location}

    import scala.concurrent.Future

    def jsonData(court: Court, category: String) : JsValue= {
        import play.api.libs.json.JsObject
        JsObject(Seq(
            "id" -> JsNumber(court.id),
            "title" -> JsString(court.title),
            "rating" -> JsNumber(court.overallRating),
            "type" -> JsString(category)
        ))
    }

    def getCategoryId(name: String)={
        courtRepository.getCategoryId(name)
    }

    def get5Data() = {
        courtRepository.getCourtsBy5Data
    }

    def getAllCourt(page: Int, paging: Int, name: String, day: String)= {
        var offset = (page - 1) * paging
        var pagination = paging
        courtRepository.getCategoryId(name).flatMap{
            case Some(category)=>
                courtRepository.getLength.flatMap{
                    length=>
                        if(offset>=length){
                            offset=0
                            pagination=10
                        }else if(offset==1) offset=0
                        else if(offset<0) offset=0
                        courtRepository.getCourtsByDay(offset,pagination,category.id, day)
                }
            case None=> Future.failed(new Exception("categoryNotFound"))
        }
    }

    def getImagesByCourtId(courtId: Int)={
        courtRepository.getImagesByCourtId(courtId)
    }

    def getLocationAndCategories: Future[(Seq[Location],Seq[Category])] ={
        for {
            location <- courtRepository.getLocation
            category <- courtRepository.getCategories
        }yield (location,category)
    }



//    def get5CourtData() = {
//        courtRepository.get5Court.map{
//            case court =>
//                import play.api.libs.json.Json
//                var jsonArray = Json.arr()
//                for(c <- court){
//                    jsonArray = jsonArray :+ jsonData(c._1,c._2)
//                }
//                jsonArray
//        }
//    }



}