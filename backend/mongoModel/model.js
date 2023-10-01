const mongoose = require('mongoose');


const ImageSchema = new mongoose.Schema({
    photo: {
        type : String,
        required:true
        },
},{timestamps:true})

const ImageModel = new mongoose.model('ImageModel',ImageSchema)
module.exports=ImageModel;

