const express = require('express')
const router = express.Router()
const db = require("../create_database")
const coursedata = require('../controller/courses.js')

router.get('/', coursedata.getCourses)
router.get('/:id', coursedata.getCourseById)
router.post('/', coursedata.createCourse)
router.delete('/:id', coursedata.deleteCourse)
router.put('/:id', coursedata.updateCourse)
module.exports = router