const multer = require('multer');

const myMulter = multer.diskStorage({
    destination:function (req, file, cb ){
        cb(null,'./public/uploads')
    },
    filename : function( req ,file, cb){
        cb(null,`${Date.now()}_${file.originalname}`)
        }
})

const defineTypes = (req,file, cb) => {
    const allowedData = ["image/png", "image/jpg", "image/jpeg"]; 
    
    if (!allowedData.includes(file.mimetype)) {
        return res.status(401).json("Only images are allowed");
    } else {
        return cb(null, "ok");
    }
};

const MulterData = multer({
    storage:myMulter,
    fileFilter:defineTypes
});
module.exports = MulterData;