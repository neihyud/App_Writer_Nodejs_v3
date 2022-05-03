var bcrypt = require('../models/bcrypt.model')

module.exports.postCreate = function (req, res, next) {
    var content = convertText(req.body.myTextarea)
    if (req.body.myTextarea == '') {
        return;
    }
    req.body.myTextarea = content
    next();
}

module.exports.passwordCreate = function (req, res, next) {
    var content = convertText(req.body.myTextarea)
    if (req.body.password == '') {
        // res.redirect('back')
        res.send('not is password')
        return;
    }
    req.body.myTextarea = content
    next()
}

function convertText(str) {
    var contents = str.split('</p>')
    var mainContent = ''

    contents.forEach(content => {
        if (!content == '')
            mainContent += content.slice(3)
    })
    return mainContent.split(-3)
}