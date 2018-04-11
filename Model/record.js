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
    time:{
        type: Date,
        default: Date.now
    },
    field:{
        type: [String]
    },
    position:{
        type: [String]
    },
    keyword:{
        type: String
    }
});
var Record = module.exports = mongoose.model('Record', recordschema);
module.exports=Record;