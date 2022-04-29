const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const port = 8080
const router = require('./routes/index.route')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', './views')

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './index.html'))
// })

router(app)

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => { })