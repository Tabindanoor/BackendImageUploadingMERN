const express = require('express');
const Router = express.Router();
const MulterData = require("../Middlewares/multer.js");
const MyModel = require("../mongoModel/model.js")
const fs = require("fs")
const path = require("path")

Router.post("/",MulterData.single("photo"),async(req,res)=>{
   console.log(req.body);
   console.log(req.file.filename, "file"); // Log the file received
// console.log(req.body,"body"); 
   const photo = req.file.filename;
   await MyModel.create({ photo})
   .then((data)=>{
    
    console.log(data);
    // res.send(data);
    res.send(JSON.stringify(data));
   })
   .catch((err) => {
  console.log("error occurs in posting images", err);
  res.status(500).send("Error occurred while posting image");
});
})


Router.get("/", async (req, res) => {
    try {
        console.log(res, "this is response")
        const myData = await MyModel.find({}).sort({ createdAt: "descending" });
        console.log(myData)
        // Send the data as the response
        res.send(JSON.stringify(myData));
        // res.status(200).json(myData);
    } catch (error) {
        console.error("Error in GET route:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// delete fucntion


Router.delete("/:id", async (req, res) => {
  try {
    const image = await MyModel.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    const filePath = path.join(__dirname, "..", "uploads", image.photo);

    // Delete image file from uploads folder
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      }
    });

    // Delete from MongoDB
    await MyModel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error("Error in DELETE route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});







module.exports = Router;