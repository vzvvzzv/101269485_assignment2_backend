let mongoose = require('mongoose')



const EmployeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        // required: [true, 'Please enter first name'],
        // trim: true,
        // lowercase: true
    },
    last_name: {
        type: String,
        // required: [true, 'Please enter last name'],
        // trim: true,
        // lowercase: true
    },
    email: {
        type: String,
        // required: [true, 'Please enter email'],
        // trim: true,
        // lowercase: true,
    }

})

const Employee  = mongoose.model("employees", EmployeeSchema)
module.exports = Employee