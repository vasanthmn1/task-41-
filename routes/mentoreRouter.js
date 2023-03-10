const express = require('express')
const { createMentore, mentorToStudent, addStudent } = require('../controller/mentorCtrl')

const router = express.Router()


router.post('/mentors', createMentore)
router.post('/mentors/:mentorId/students/:studentId', mentorToStudent)

module.exports = router