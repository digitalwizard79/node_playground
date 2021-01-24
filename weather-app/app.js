const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

let search = process.argv[2];

if (search !== undefined) {
    geocode(search, (error, { latitude, longitude, location } = {}) => {
        if (error)
            return console.log(error)

        weather(latitude, longitude, (error, { weather_descriptions, temperature, feelslike } = {}) => {
            if (error)
                return console.log(error)

            console.log(location + " -- " + "Latitude: " + latitude + ', Longitude: ' + longitude)
            console.log(weather_descriptions[0] + ": It is currently " + temperature + " degrees out. It feels like " + feelslike + " degrees out.")
        })
    })
} else {
    console.log("No location provided. Please try again.")
}