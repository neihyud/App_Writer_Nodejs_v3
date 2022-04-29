module.exports.postCreate = function (req, res, next) {
    // let error = [];
    if (req.body.myTextarea == '') {
        // res.render('posts/editor', {
        //     values: req.body.title
        // })
        // res.redirect('back')
        return;
    }
    next();
}
