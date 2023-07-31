const mongoose = require("mongoose");
const validator = require("validator");

const studenSchema = mongoose.Schema(
    {
    name:{type: String, required: true, minlength:3},
    email:{type:String,required: true,unique: [true, 'Email id is already exist'], validate: (value)=>{
    if(!validator.isEmail(value)){
        throw new Error();
    }}},
    phone: {
        type: Number,
        min: 10,
        unique: true,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
},
);
const Student = new mongoose.model('Student', studenSchema);

module.exports = Student;