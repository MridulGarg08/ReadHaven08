import mongoose from "mongoose";

const userschema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const user=mongoose.model("User",userschema);
export default user;