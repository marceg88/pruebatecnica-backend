const Teacher = require("../models/teachers.Schema")
const Lesson = require("../models/lessons.schema")
const mongoose = require("mongoose")

const teacherInf = {
    async register(teacher){
            try {
                const newTeacher = new Teacher(teacher)
                await newTeacher.save()
                return newTeacher
            } catch (error) {
                return error
            }
    },
    async findByIdTeacher(id){
        try {
            const teacher = await Teacher.findOne(id)
            return teacher
        } catch (error) {
            return error
        }
    },
    async findById(id){
        try {
            const teacher = await Teacher.findById(id)
            console.log("findBy", teacher)
            return teacher
        } catch (error) {
            return error
        }
    },
    async findByIdHours(id, maxAllHour){
        try {
            console.log("entra find by")
            const teacher = await Teacher.findById(id)
            
            const session = await mongoose.startSession()
                    await session.withTransaction(async () => {
                        
                        // await teacher[id].maxAllHours.push(maxAllHour)
                        teacher.maxAllHours = maxAllHour
                        await teacher.save({session})
                    })
                    await session.endSession()
            // teacher.maxAllHours = maxAllHour
            
            return teacher
        } catch (error) {
            return error
        }
    },
    async findByTeachers(){
        try {
            const teachers = await Teacher.find()
            return teachers
        } catch (error) {
            return error
        }
    },
    async findByMounth(mounth){
        try {
            const teachers = await Lesson.find(mounth)
            return teachers
        } catch (error) {
            return error
        }
    },
    
    async deleteTeacherById(id) {
        try {
            const teacher = await Teacher.findByIdAndDelete(id)
            return teacher
        } catch (error) {
            return error
        }

    },

}

module.exports = teacherInf