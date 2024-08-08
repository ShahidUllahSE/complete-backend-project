import connectDb from "./db/index.js";
// require ('dotenv').config({path: './env'})   
// or
import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed", err)
})











/*
import express from "express"

const app = express()
(async () => {
    try{
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        application.on("error",(error)=>{
            console.log("ERR: ", error );
            throw error
        })
        app.listen (process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`)
        })
    }
    catch (error) {
        console.log(error)
    }throw error
} ) ()
    */