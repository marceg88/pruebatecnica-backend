const express = require("express")
const router = express.Router()

const { registerLessons } = require("../controller/lessons.controller")

router.post("/registro", registerLessons)



module.exports = router