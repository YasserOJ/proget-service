var mongoose =require('mongoose');
var postuleSchema = mongoose.Schema({
    description:{
        type: String,
        required:true
    },
    img:{
        type: Buffer,
        required:true
    }
});
var Postule = module.exports = mongoose.model('Postule', postuleSchema);
module.exports=Postule;