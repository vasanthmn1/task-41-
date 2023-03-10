const express = require('express')
const { createStudent } = require('../controller/studentCtrl')

const router = express.Router()


router.post('/students', createStudent)

module.exports = router