const express = require('express');
const router = express.Router();
const Controller = require('../controller/auth.controller')

router.get('/login',Controller.login)
router.post('/login',Controller.postLogin)

module.exports = router;