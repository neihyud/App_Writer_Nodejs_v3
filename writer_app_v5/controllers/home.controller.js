var connection = require('../models/db.model')

module.exports.show = function (req, res) {
    let sql = 'SELECT * FROM posts'
    connection.query(sql, function(err, result) {
        res.render('posts/home', {
            posts: result
        })
    })
}
