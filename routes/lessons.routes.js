const express = require("express")
const router = express.Router()

const { registerLessons, findLessonsByOwner } = require("../controller/lessons.controller")

router.post("/registro", registerLessons)

router.get("/:teacherId/lessons", findLessonsByOwner)

module.exports = router