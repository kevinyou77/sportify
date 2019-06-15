package utils

import pdi.jwt.JwtAlgorithm
import pdi.jwt.JwtJson
import play.api.libs.json.Json

object JWTUtility {
  private val secretKey = "mp3M0^sY63NpnXeb0N@A4ff557Hi9kT6jIDm^/6wUoeWv:bsEQwEBnF:h_]c5anA"
  private val algo = Seq(JwtAlgorithm.HS256)

  def encryptToken(userId: Int): String = {
    val claim = Json.obj(("user",userId))
    val header = Json.obj(("typ", "JWT"), ("alg", "HS256"))
    JwtJson.encode(header=header,claim = claim,key = secretKey)
  }

  def decryptToken(token: String)={
    JwtJson.decodeJson(token,secretKey,algo)
  }

}
