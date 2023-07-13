const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String,
    department:String,
    salary:String,
    userID:String
})

const employeeModel = mongoose.model("Employee", employeeSchema)

module.exports = employeeModel