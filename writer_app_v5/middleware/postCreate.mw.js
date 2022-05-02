module.exports.postCreate = function (req, res, next) {
    // let error = [];
    var content = convertText(req.body.myTextarea)
    if (req.body.myTextarea == '') {
        // res.render('posts/editor', {
        //     values: req.body.title
        // })
        // res.redirect('back')
        return;
    }
    req.body.myTextarea = content
    next();
}

function convertText (str) {
    var contents = str.split('</p>')
    var mainContent = ''

    contents.forEach(content => {
        if(!content == '') 
            mainContent += content.slice(3)
    })
    return mainContent.split(-3)
}