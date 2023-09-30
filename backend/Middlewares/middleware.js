const express = require('express');
const multer = require('multer');

const Storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, "../public/")
    },
    filename: function(req,cb,file){
        cb(null, Date.now()+ ""+file.originalname);
    }
});

const AllowedFiles = (req,file,cb)=>{
   const  Files =  ["image/png","image/jpeg","image/jpg"];
   if(Files.includes(file.mimetype)){
    cb(null,true)
   }
   else {
    cb(null,false)
   }
     
}

 const multerData = multer({Storage, AllowedFiles})
 module.exports = multerData;