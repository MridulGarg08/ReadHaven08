import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose'
import bookroute from './route/book.route.js'
import userroute from './route/user.route.js'
import cors from 'cors'
import path, { join } from 'path'
// import book from './model/book.model.js'
// import { getBook } from './controller/book.controller.js'
// const router=express.Router()
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config();
const port = process.env.PORT||4000
const mongconnect=process.env.MongoDBURI



//Connect To MongoDB

try {
  mongoose.connect(mongconnect);
  console.log("Connected to MongoDB")
  
} catch (error) {
  console.log("Error: ",error) 
}

//Definining Routes
app.use('/book',bookroute);
app.use('/user',userroute);
// app.get('/book',getBook)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})