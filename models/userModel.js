import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "Please provide a firstName"]
    },
    
    lastName:{
        type: String,
        required: [true, "Please provide a lastName"]
    },

    email:{
        type: String,
        required: [true, "Please provide a Email"], 
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Please provide a Email"], 
    },
    number:{
        type: String,
        required:[true, "Please provide a Number"],
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    


})


const User = mongoose.models.users || mongoose.model
("users",userSchema);

export default User;