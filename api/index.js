import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO)
.then( ()=>{
  console.log("Database is Successfully connected")
})
.catch((err)=>{
console.log(err)
})
app.listen(3000, () => {
  console.log("Port is Listening at Port 3000 !!");
});
