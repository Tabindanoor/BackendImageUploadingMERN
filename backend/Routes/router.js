const express = require('express');
const app = express();
const router = express.Router();
const ImageModel = require("../mongoModel/model.js")
const multerData = require("../Middlewares/middleware.js");
app.use(express.json());

router.post('/',multerData.single("photo"),async(req,res)=>{
    const body = req.body;
    const photo = req.body.file.filename;
    await ImageModel.create({photo})
    .then((data)=>{
        console.log(data)
        res.send(data)
    })
});


// router.post('/', upload.single('photo'), async (req, res) => {
//     try {
//       if (!req.file) {
//         return res.status(400).json({ error: 'No file uploaded' });
//       }
  
//       const photo = req.file.filename;
  
//       // Save the image details to MongoDB
//       const data = await ImageModel.create({ photo });
  
//       console.log(data);
//       res.send(data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  

// router.post("/",multerData.single("photo"),async(req,res)=>{
//     console.log(req.file, "data")
//     const photo = req.file.filename;
//     try{
//        await ImageModel.create({photo})
//         .then((data)=>{
//             console.log(data);
//             res.json(data)
//         })

//     res.send("hy data nhi arha ")
//     }
//     catch(err){
//         console.log(err.message)
//     }
// })

module.exports=router;

// const express = require('express');
// const router = express.Router();
// const app = express()
// const ImageModel = require('../mongoModel/model.js')
// const multerData =  require('../Middlewares/middleware.js');
// app.use(express.json());

// router.get("/", async (req,res)=>{
//       const photos = await ImageModel.find().sort({createdAt:"descending"})
//        res.json(photos)
// })


// router.post("/",multerData.single("photo"),async(req,res)=>{
//     console.log(req.file, "data")
//     const photo = req.file.filename;
//     try{
//        await ImageModel.create({photo})
//         .then((data)=>{
//             console.log(data);
//             res.json(data)
//         })

//     res.send("hy data nhi arha ")
//     }
//     catch(err){
//         console.log(err.message)
//     }
// })

// module.exports = router

