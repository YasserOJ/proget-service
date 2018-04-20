var mongoose =require('mongoose');
var notificationCLSchema = mongoose.Schema({
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
var NotificationCL = module.exports = mongoose.model('NotificationCL', notificationCLSchema);