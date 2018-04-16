var mongoose =require('mongoose');
var postuleSchema = mongoose.Schema({
    description:{
        type: String,
        required:true
    },
    img:{
        type: Buffer,
    },
    tag:{
      type:String,
    },
    year:{
        type:Number,
        min:2018,
        max:3000,
        required:true
    },
    month:{
        type:Number,
        min:1,
        max:12,
        required:true
    },
    day:{
        type:Number,
        min:1,
        max:31,
        required:true
    },
    field:{
        type:String,
        required: true
    }
});
var Postule = module.exports = mongoose.model('Postule', postuleSchema);