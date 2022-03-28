const express = require("express")
const router = express.Router()

const { registerCourse } = require("../controller/courses.controller")

const { hourMaxCourse, findLessonsByCourse } = require("../controller/lessons.controller")

router.post("/registro", registerCourse)



module.exports = router