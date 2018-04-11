var mongoose =require('mongoose');
var optionSchema = mongoose.Schema({
    field:{
        type: String,
        required:true
    },
    position:{
        type: String,
        required:true
    }
});
var Option = module.exports = mongoose.model('Option', optionSchema);
module.exports=Option;