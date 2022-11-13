const path = require('path')
const express = require('express')
const morgan = require("morgan")
const { engine } = require ('express-handlebars');
const app = express()
const port = 3000

// Http logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

app.get('/trang-chu', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})