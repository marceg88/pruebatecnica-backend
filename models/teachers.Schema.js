const mongoose = require("mongoose")

const Schema = mongoose.Schema

const TeacherSchema = new Schema({
    name: { type: String, required: true, uppercase: true },
    numberId: { type: Number, required: true },
    dateBirth: { type: Date, required: true },
    currency: { type: String, required: true},
    price: { type: Number, required: true},
    role: { type: String, required: true},
    maxAllHours: { type: Number },
    maxHours: { type: String },
    courses: [{ type: String }],
    lecciones: [{ type: Schema.Types.ObjectId, ref: "Lesson" }]
})

module.exports = mongoose.model("Teacher", TeacherSchema)