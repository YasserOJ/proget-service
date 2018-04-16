var mongoose =require('mongoose');
var clientSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    contractNumber:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    adress:{
        type: String,
        required: true
    },
    Country:{
        type: String,
        required: true
    },
  /*  employerId:{
        type:Number,
        autoIncrement:true
    },*/
    field:{
      type: String,
      required: true
    }
});
var Client = module.exports = mongoose.model('Client', clientSchema);
