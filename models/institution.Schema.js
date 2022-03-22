const mongoose = require("mongoose")

const Schema = mongoose.Schema

const InstitutionSchema = new Schema({
    inst: { type: String },
    teachers: [{type: Schema.Types.String, ref: "Teacher"}]
})

module.exports = mongoose.model("Institution", InstitutionSchema)