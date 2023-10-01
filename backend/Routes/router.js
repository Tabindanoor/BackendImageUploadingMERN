const express = require('express');
const Router = express.Router();
const MulterData = require("../Middlewares/multer.js");
const MyModel = require("../mongoModel/model.js")

Router.post("/",MulterData.single("photo"),async(req,res)=>{
   console.log(req);
   const photo = req.file.filename;
   await MyModel.create({photo: photo})
   .then((data)=>{
    console.log(data);
    res.send(data);
    // res.send(JSON.stringify(data));
   })
   .catch(error)
   {
    console.log(error.message)
   }

//    res.send("how are you post route")
})

Router.get("/",(req,res)=>{
    const myData = MyModel.find().sort({createdAt:"descending"})
    res.send(myData)
    // res.send("hey how are you get route")
    console.log("here is my get route ");
})


module.exports = Router;