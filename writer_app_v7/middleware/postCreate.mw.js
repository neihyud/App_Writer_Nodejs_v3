var bcrypt = require('../models/bcrypt.model')

module.exports.postCreate = function (req, res, next) {
    var content = convertText(req.body.myTextarea)
    if (!req.body.title) {
        req.body.title = 'Name Doc'
    }
    if (req.body.myTextarea == '') {
        res.render('posts/editor', {
            values: req.body,
            emptyPost: 'true'
        })
        return;
    }
    req.body.myTextarea = content
    next();
}

module.exports.passwordCreate = function (req, res, next) {
    if (req.body.password == '') {
        res.redirect('/')
        return;
    }
    // var content = convertText(req.body.myTextarea)
    // req.body.myTextarea = content
    next()
}

function convertText(str) {
    console.log('str: ', str)
    var contents = str.split('</p>')
    var mainContent = ''

    contents.forEach(content => {
        if (!content == '')
            mainContent += content.slice(3)
    })
    return mainContent.split(-3)
}