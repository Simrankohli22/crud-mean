const mongoose = require('mongoose');

const Employee = mongoose.model('Employee',{
    Name : {type: String},
    Position :{type: String},
    Phone :{type: String},
    Email:{type:String},
    Salary:{type:String}
});

module.exports = Employee;