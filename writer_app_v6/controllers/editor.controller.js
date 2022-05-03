var connection = require('../models/db.model')
var bcrypt = require('../models/bcrypt.model')

const { nanoid } = require('nanoid')

module.exports.show = function (req, res) {
    res.render('posts/editor')
}


module.exports.save = function (req, res) {
    if (!req.body.title) {
        req.body.title = 'Name Doc'
    }
    let sql = 
        `INSERT INTO posts (title, content) VALUES 
        ('${req.body.title}', '${req.body.myTextarea}')`
    connection.query(sql, function(err, result) {})
    res.redirect('/editor?sucsess=true')
}


module.exports.saveSecurity = function (req, res) {
    if (!req.body.title) {
        req.body.title = 'Name Doc'
    }
    const password = bcrypt.hash(req.body.password)
    console.log('password: ', password)
    let sql = 
        `INSERT INTO posts (title, content, password) VALUES 
        ('${req.body.title}', '${req.body.myTextarea}', '${password}')`
    connection.query(sql, function(err, result) {})
    res.redirect('/editor?sucsess=true')
}


module.exports.postCurrent = function (req, res) {
    const id = req.params.id
    let sql = `SELECT * FROM posts WHERE id = ${id}`
    connection.query(sql, function (err, result) {
        if (req.body.password) {
            if (!bcrypt.comparePass(req.body.password, result[0].password)) {
                res.render('/home')
                return;
            }
        }

        res.render('posts/editor', {
            values: result[0]
        })
    })

}
