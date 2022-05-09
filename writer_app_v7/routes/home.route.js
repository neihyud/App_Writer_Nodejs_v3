const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home.controller')
const middleware = require('../middleware/postCreate.mw')

router.get('/', homeController.show)
router.get('/remove/:id', homeController.remove)

module.exports = router