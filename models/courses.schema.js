const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CoursesSchema = new Schema({
    nameCourse: { type: String },
    lessons: [{ type: String }]
})

module.exports = mongoose.model("Courses", CoursesSchema)