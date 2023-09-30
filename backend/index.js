const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require("path");
const app = express();
const mongoose = require('mongoose');
app.use(cors())
app.use(express.json());
const Router = require('./Routes/router.js');
app.use(express.static("./public"))

mongoose.connect("mongodb+srv://tabindanoor:tabindamuslim@image.1stvd6n.mongodb.net/image?retryWrites=true&w=majority", {useUnifiedTopology:true, useNewUrlParser:true})
.then(()=>{
    console.log(`connected to mongodb`);
})
.catch((err)=>{
    console.error(`${err} error connecting to database`)  ;   });

app.use(Router)

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})