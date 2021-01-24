const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Hello express!</h1>')
})

// Help page
app.get('/help', (req, res) => {
    res.send({
        name: 'Thomas',
        age: 41
    })
})

// About page
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

// Weather page
app.get('/weather', (req, res) => {
    res.send({
        location: 39042,
        forecast: "It is currently 59 degrees"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})