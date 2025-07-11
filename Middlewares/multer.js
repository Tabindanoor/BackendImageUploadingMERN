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
    const allowedData = ["image/png", "image/jpg", "image/jpeg"]; // Updated allowed MIME types
    // const allowedData = ["image/png", "image/jpg", "image/jpeg", "application/pdf"]; // Updated allowed MIME types
    
    if (!allowedData.includes(file.mimetype)) {
        // Assuming you have access to the `res` object in the current scope
        return res.status(401).json("Only images and PDFs are allowed"); // Updated error message
    } else {
        return cb(null, "ok");
    }
};

const MulterData = multer({
    storage:myMulter,
    fileFilter:defineTypes
});
module.exports = MulterData;