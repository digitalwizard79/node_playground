const request = require('request')

const weather = (latitude, longitude, callback) => {
    let url = "http://api.weatherstack.com/current?access_key=46e93de0857ba7b01934019150b577c7&query=" + latitude + ", " + longitude + "&units=f";
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connecto the darksky API!")
        } else {
            if (body.error) {
                callback("Error: " + body.error.info)
            } else {
                const current = body.current
                callback(undefined, current)
            }
        }        
    })
}

module.exports = weather