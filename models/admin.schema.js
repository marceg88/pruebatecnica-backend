const mongoose = require("mongoose")

const Schema = mongoose.Schema

const AdminSchema = new Schema({
    userName: { type: String, required: true },
    passwordAdmin: { type: String, required: true }
})

module.exports = mongoose.model("Admin", AdminSchema)