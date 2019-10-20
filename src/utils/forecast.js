const request = require('request')
const forecast = (latitude, longitude,  callback) => {
    const url = "https://api.darksky.net/forecast/358a819e2fa0a5f618b6c50d25e71409/"+latitude+","+longitude+"?lang=id";

    request({url, json: true}, (error, { body }) => {
    console.log(body.latitude,body.longitude)
        if(error){
            callback('Harus terhubung Internet', undefined)
        }else if(body.code){
            callback('Kordinat salah', undefined)
        }else{
            console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary+" Perkiraan suhu saat ini "+ body.currently.temperature + " derajat. (Tempratur High: " +body.daily.data[0].temperatureHigh+ " Min: " +body.daily.data[0].temperatureLow + ") Berapa persen kemungkinan akan turun hujan: " + body.currently.precipProbability + "% hujan" 
            )
        }
    })
}

module.exports = forecast