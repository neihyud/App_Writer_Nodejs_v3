const express = require('express')
const router = express.Router()
const editorController = require('../controllers/editor.controller')
const middleware = require('../middleware/postCreate.mw')

router.post('/save', middleware.postCreate, editorController.save)
router.get('/', editorController.show)

module.exports = router