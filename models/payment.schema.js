const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PaymentSchema = new Schema({
    idTeacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
    nameTeacher: { type: Schema.Types.String, ref: "Teacher" },
    paymentHour: { type: Schema.Types.String, ref: "Teacher" },
    mounth: [{ type: Schema.Types.String, ref: "Teacher" }]
     
})

module.exports = mongoose.model("Payment", PaymentSchema)