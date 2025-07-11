const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())
const dotenv = require('dotenv');
dotenv.config(); 
const mongoose = require('mongoose');
const Router = require("./Routes/router.js")
app.use(express.static("public"))
app.use(express.static("uploads"))

mongoose.connect(process.env.URI_MongoDB,{useUnifiedTopology:true,})
.then(()=>{
    console.log("Database Connected")})
.catch((error)=>{
    console.log(`Error: ${error}`)});

app.use(Router)
app.listen(5000,()=>{
    console.log("Server Started"); 
 });