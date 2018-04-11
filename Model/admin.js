var mongoose =require('mongoose');
var adminSchema = mongoose.Schema({
    first_name:{
        type: String,
        required:true
    },
    last_name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
});
var Admin = module.exports = mongoose.model('Admin', adminSchema);
module.exports=Admin;