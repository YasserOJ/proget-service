var mongoose =require('mongoose');
var notificationclSchema = mongoose.Schema({
    client_id:{
        type: String,
        required:true
    },
    post_id:{
        type: String,
        required:true
    },
    text:{
        type: String,
        required:true
    }
});
var Notificationcl = module.exports = mongoose.model('Notificationcl', notificationclSchema);