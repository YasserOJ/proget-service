var mongoose =require('mongoose');
var optionSchema = mongoose.Schema({
    field:{
        type: String,
        required:true
    },
    position:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    }
})