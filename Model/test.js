var mongoose =require('mongoose');
var testschema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        index:{unique: true}
    },
    age:{
      type: String
    },
    cin:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});
var Test = module.exports = mongoose.model('Test', testschema);
module.exports=Test;
