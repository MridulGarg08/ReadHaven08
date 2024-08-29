import mongoose from "mongoose";

const bookschema=mongoose.Schema({
    name:String,
    title:String,
    author:String,
    price:Number,
    category:String,
    image:String
})
const book=mongoose.model("Book",bookschema);
export default book;