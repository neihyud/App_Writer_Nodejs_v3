var connection = require('../models/db.model')

module.exports.show = function (req, res) {
    let sql = 'SELECT * FROM posts'
    connection.query(sql, function(err, result) {
        res.render('posts/home', {
            posts: result
        })
    })
}

module.exports.remove = function (req, res) {
    const id = req.params.id 
    let sql = `DELETE FROM posts WHERE id=${id}`
    connection.query(sql, function(err, result) {
        res.redirect('back')
    })
}

