const mongoose = require('mongoose');
const MySchema =new mongoose.Schema({
    photo:{
        type:String,
        required:true
    }
},{timestamps:true})


const MyModel = new mongoose.model("MyModel",MySchema);
module.exports = MyModel;