var connection = require('../models/db.model')
var Posts = require('../models/orm.model')

module.exports.show = function (req, res) {
    const posts = Posts.findAll()
    posts.then((data) => {
        var result = data.map((post) => {
            return post.dataValues
        })

        res.render('posts/home', {
            posts: result
        })
    })
}

module.exports.remove = async function (req, res) {
    const id = req.params.id
    await Posts.destroy({
        where: {
            id: id
        } 
    })
    res.redirect('/')
}

