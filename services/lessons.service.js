const { default: mongoose } = require("mongoose")
const Lesson = require("../models/lessons.schema")
const Teacher = require("../models/teachers.Schema")

const lessonsInf = {
    async registerLessons(lessons, owner){
        try {
            const lessonsOwner = await Teacher.findById(owner)
            if(lessonsOwner){
                try {
                    const newLessons = await new Lesson(lessons)
                    const session = await mongoose.startSession()
                    await session.withTransaction(async () => {
                        await newLessons.save({session})
                        await lessonsOwner.lessons.push(newLessons._id)
                        await lessonsOwner.save({session})
                    })
                    await session.endSession()
                    return newLessons
                } catch (error) {
                    return error
                }
            } else {
                res(503).status({
                    message: "No se encontro el profesor",
                    status: "Failed",
                    data: {}
                })
            }
            
        } catch (error) {
            return error
        }
    },
    async getByOwner(ownerId) {
        try{
            const lessons = await Lesson.find({ owner: ownerId }).select({ __v: 0 })
            if (!lessons) {
                return error
            }
            return lessons;
        } catch (error) {
            return error
        }
    }
}

module.exports = lessonsInf