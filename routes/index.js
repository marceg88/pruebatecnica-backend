const express = require("express")

const app = express()

const teacherRoutes = require("./teacher.routes")
const courseRoutes = require("./course.routes")
const lessonsRoutes = require("./lessons.routes")
const paymentRoutes = require("./payment.routes")

app.use("/profesores", teacherRoutes)
app.use("/cursos", courseRoutes)
app.use("/lessons", lessonsRoutes)
app.use("/payment", paymentRoutes)

module.exports = app