const express = require('express');
const app = express();
const router = express.Router();
// const cors = require('cors');
const ImageModel = require("../mongoModel/model.js")
const multerData = require("../Middlewares/middleware.js");
app.use(express.json());


router.post('/', multerData.single("photo"),async(req,res)=>{
    const photo = req.file.filename;
    console.log(`Photo: ${photo}`);
    const mydata = await ImageModel.create({photo})
    res.json(mydata);

    res.send("hey there my post route")
});


router.get("/",(req,res)=>{
    const data = ImageModel.find();
    console.log(data);
   res.send("my data available here")
})


module.exports=router;
