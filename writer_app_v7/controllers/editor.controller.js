var connection = require('../models/db.model')
var Posts = require('../models/orm.model')
var bcrypt = require('../models/bcrypt.model')

const { nanoid } = require('nanoid')

module.exports.show = function (req, res) {
    res.render('posts/editor')
}

module.exports.save = function (req, res) {
    Posts.create({
        title: `${req.body.title}`,
        content: `${req.body.myTextarea}`
    })
    res.redirect('/editor?sucsess=true')
}


module.exports.saveSecurity = function (req, res) {
    const password = bcrypt.hash(req.body.password)
    Posts.create({
        title: `${req.body.title}`,
        content: `${req.body.myTextarea}`,
        password: `${password}`
    })
    res.redirect('/editor?sucsess=true')
}


module.exports.postSecurityCurrent = function (req, res) {
    const id = req.params.id
    var post = Posts.findByPk(id)
    post
        .then((data) => {
            if (req.body.password) {
                if (!bcrypt.comparePass(req.body.password, data.dataValues.password)) {
                    res.redirect('/?pass=false')
                    return;
                }

                res.render('posts/editor', {
                    values: data.dataValues
                })
            }
        })
        .catch((err) => console.log(err))
}

module.exports.postCurrent = function (req, res) {
    const id = req.params.id
    var post = Posts.findByPk(id)
    post.then((data) => {
        res.render('posts/editor', {
            values: data.dataValues
        })
    })
}
