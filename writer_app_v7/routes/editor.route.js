const express = require('express')
const router = express.Router()
const editorController = require('../controllers/editor.controller')
const middleware = require('../middleware/postCreate.mw')

router.post('/', middleware.postCreate, editorController.save)
router.post('/save-security', middleware.postCreate, middleware.passwordCreate, editorController.saveSecurity)
router.post('/:id', middleware.passwordCreate, editorController.postSecurityCurrent)
router.get('/:id', editorController.postCurrent)
router.get('/', editorController.show)

module.exports = router