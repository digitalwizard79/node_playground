const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const basePath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(basePath))

// Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        author: 'Thomas Powers'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'My About Page',
        author: 'Thomas Powers'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'My Help Page',
        author: 'Thomas Powers',
        helpText: "This is a helpful text"
    })
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