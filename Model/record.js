var mongoose =require('mongoose');
var recordschema = mongoose.Schema({
    client_id:{
        type: String,
        required: true
    },
    client_name:{
        type: String,
        required: true
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
        type: String
    },
    position:{
        type: String
    },
    keyword:{
        type: String
    }
});
var Record = module.exports = mongoose.model('Record', recordschema);

