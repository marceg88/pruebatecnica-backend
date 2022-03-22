const mongoose = require("mongoose")

const Schema = mongoose.Schema

const HoursSchema = new Schema({
    nameCourse: { type: String, required: true },
    dateCourse: { type: Date, required: true},
    hours: { type: Number, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true }
})

module.exports = mongoose.model("Lesson", HoursSchema)