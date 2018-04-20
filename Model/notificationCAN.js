var mongoose =require('mongoose');
var notificationCANSchema = mongoose.Schema({
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
var NotificationCAN = module.exports = mongoose.model('NotificationCAN', notificationCANSchema);