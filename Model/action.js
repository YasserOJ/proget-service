var mongoose =require('mongoose');
var actionSchema = mongoose.Schema({
    post_id:{
        type: String,
        required:true
    },
    candidat_id:{
        type: String,
        required:true
    },
    candidat_name:{
        type: String,
        required:true
    }
});
var Action = module.exports = mongoose.model('Action', actionSchema);