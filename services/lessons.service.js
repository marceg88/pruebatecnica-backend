const mongoose = require("mongoose")
const Lesson = require("../models/lessons.schema")
const Teacher = require("../models/teachers.Schema")
const Courses = require("../models/courses.schema")

const lessonsInf = {
    async registerLessons(lessons, owner ){
        try {
            const lessonsOwner = await Teacher.findById(owner)
                try {
                    const newLessons = await new Lesson(lessons)
                    const session = await mongoose.startSession()
                    await session.withTransaction(async () => {
                        await newLessons.save({session})
                        await lessonsOwner.lecciones.push(newLessons._id)
                        await lessonsOwner.save({session})
                    })
                    await session.endSession()
                    return newLessons
                } catch (error) {
                    return error 
                } 
        } catch (error) {
            return error
        }
    },
    async getByOwner(ownerId, mounth) {
        try{
            const lessons = await Lesson.find({ owner: ownerId, mounth })
            if (!lessons) {
                return error
            }
            return lessons;
        } catch (error) {
            return error
        }
    },
    async getByOwnerAll(ownerId) {
        try{
            const lessons = await Lesson.find({ owner: ownerId })
            if (!lessons) {
                return error
            }
            return lessons;
        } catch (error) {
            return error
        }
    },
    async getBylessons(nameCourse) {
        try{
            // console.log("serv", mounth)
            const lessons = await Lesson.find({nameCourse})
            console.log("serv1", lessons)
            if (!lessons) {
                return error
            }
            return lessons;
        } catch (error) {
            return error
        }
    },
    async findLessonTeacher(coursesId) {
        try {
            const lessonsTeacher = await Teacher.lecciones.find({coursesId})
            return lessonsTeacher
        } catch (error) {
            return error
        }

    },
    async findByMounth(mounth){
        try {
            const hoursMounth = await Teacher.lecciones.find({ mounth: mounth })
            console.log("hoursMounth", hoursMounth)
            return hoursMounth
        } catch (error) {
            return error 
        }
    },
}

module.exports = lessonsInf