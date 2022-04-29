const express = require('express')
const router = express.Router()
const editorController = require('../controllers/editor.controller')

router.post('/save', editorController.save)
router.get('/', editorController.show)


module.exports = router