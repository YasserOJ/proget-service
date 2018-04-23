var mongoose =require('mongoose');
var notificationcanSchema = mongoose.Schema({
    candidat_id:{
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
var Notificationcan = module.exports = mongoose.model('Notificationcan', notificationcanSchema);