const mongoose = require("mongoose")

const Schema = mongoose.Schema

const HoursSchema = new Schema({
    nameCourse: { type: String, required: true },
    dateCourse: { type: Date, required: true},
    mounth: { type: String },
    hours: { type: Number, required: true },
    total: { type: Number },
    owner: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    lecciones: { type: Schema.Types.String, ref: 'Courses' }
})

module.exports = mongoose.model("Lesson", HoursSchema)