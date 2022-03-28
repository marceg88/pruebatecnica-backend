const express = require("express")
const router = express.Router()

const {getByMounth} = require("../controller/teachers.controller")

router.get("/listames/:mounth", getByMounth)

module.exports = router