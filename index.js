const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())
const mongoose = require('mongoose');
const { config } = require('dotenv');
const dotenv = require('dotenv');
const Router = require("./Routes/router.js")
app.use(express.static("public"))
app.use(express.static("uploads"))

mongoose.connect("mongodb+srv://tabindanoor:tabindamuslim@image.1stvd6n.mongodb.net/?retryWrites=true&w=majority",{useUnifiedTopology:true,})
.then(()=>{
    console.log("Database Connected")})
.catch((error)=>{
    console.log(`Error: ${error}`)});


app.use(Router)
app.listen(5000,()=>{
    console.log("Server Started"); 
 });

 
