const express = require("express")
const router = express.Router()

const { registerCourse } = require("../controller/courses.controller")

router.post("/registro", registerCourse)

module.exports = router