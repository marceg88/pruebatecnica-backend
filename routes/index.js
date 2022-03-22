const express = require("express")

const app = express()

const teacherRoutes = require("./theacher.routes")
const courseRoutes = require("./course.routes")
const lessonsRoutes = require("./lessons.routes")

app.use("/profesores", teacherRoutes)
app.use("/cursos", courseRoutes)
app.use("/lessons", lessonsRoutes)

module.exports = app