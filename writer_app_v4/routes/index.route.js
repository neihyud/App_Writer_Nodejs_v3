const homeRouter = require('./home.route')
const editorRouter = require('./editor.route')

function router(app) {
    app.use("/editor", editorRouter)
    app.use("/", homeRouter)
}

module.exports = router