const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const port = 8080
const router = require('./routes/index.route')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
// app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine", "pug")
app.set("views", "./views")

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './editor.html'))
})

router(app)

app.listen(port, ()=>{})