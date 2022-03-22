const Teacher = require("../models/teachers.Schema")


const teacherInf = {
    async register(teacher){
            try {
                const newTeacher = new Teacher(teacher)
                await newTeacher.save()
                console.log("new", newTeacher)
                return newTeacher
            } catch (error) {
                return error
            }
    },
    async findByIdTeacher(id){
        try {
            const teacher = await Teacher.findOne(id)
            console.log("teacher", teacher)
            return teacher
        } catch (error) {
            return error
        }
    },
    async findById(id){
        try {
            const teacher = await Teacher.findById(id).select({ __v: 0 })
            return teacher
        } catch (error) {
            return error
        }
    },
    async findByTeachers(){
        try {
            const teachers = await Teacher.find().select({ __v: 0 })
            console.log(teachers)
            return teachers
        } catch (error) {
            return error
        }
    }
}

module.exports = teacherInf