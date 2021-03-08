const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=4fa4dcf2e3ad5b15e01dc6ee1e4e794e&query=${latitude},${longitude}&units=f`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, (`${body.current.weather_descriptions[0]}. The current temperature is ${body.current.temperature} and it feels like ${body.current.feelslike}`))
        }
    })
}

module.exports = forecast