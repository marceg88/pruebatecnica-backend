const Courses = require("../models/courses.schema")

const coursesInf = {
    async register(course){
        try {
            const newCourse = new Courses(course)
            await newCourse.save()
            return newCourse
        } catch (error) {
            return error
        }
    },
    async findByIdCourse(id){
        try {
            const course = await Courses.findOne(id)
            return course
        } catch (error) {
            return error
        }
    }
}

module.exports = coursesInf