const express = require("express")
const router = express.Router()

const { registerTeacher, findTeacherByInstitution, findTeacher, getTeacher, getByMounth, deleteTeacher } = require("../controller/teachers.controller")

const { findLessonsByOwner, hourMaxCourse, findLessonsByCourse } = require("../controller/lessons.controller")

router.get("/lista", getTeacher)

router.get("/lista/:teacherId", findTeacher)

router.get("/:teacherId/lessons", findLessonsByOwner)

router.delete('/:teacherId', deleteTeacher) 

router.get("/:nameCourse", findLessonsByCourse)

router.post("/registro", registerTeacher) 




module.exports = router