const express = require("express")
const router = express.Router()

const { registerTeacher, findTeacherByInstitution, findTeacher } = require("../controller/teachers.controller")

router.get("/:teacherId", findTeacher)

router.post("/registro", registerTeacher)

// router.get("/todos", findTeacherByInstitution)

module.exports = router