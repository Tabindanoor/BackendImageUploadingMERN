const express = require('express');
const Router = express.Router();
const MulterData = require("../Middlewares/multer.js");
const MyModel = require("../mongoModel/model.js")

Router.post("/",MulterData.single("photo"),async(req,res)=>{
   console.log(req.body);
   console.log(req.file.originalname, "file"); // Log the file received
// console.log(req.body,"body"); 
   const photo = req.file.originalname;
   await MyModel.create({ photo})
   .then((data)=>{
    
    console.log(data);
    // res.send(data);
    res.send(JSON.stringify(data));
   })
   .catch()
   {
    console.log("error occues in the posting images")
    res.send("error occues in the posting images")
   }

//    res.send("how are you post route")
})

Router.get("/", async (req, res) => {
    try {
        console.log(res, "this is response")
        const myData = await MyModel.find({}).sort({ createdAt: "descending" });
        // const myData = await MyModel.find({})
        // Check if any data was found
        // if (myData.length === 0) {
        //     return res.status(404).json({ message: "No data found" });
        // }

        console.log(myData)
        // Send the data as the response
        res.status(200).json(myData);
    } catch (error) {
        console.error("Error in GET route:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



module.exports = Router;