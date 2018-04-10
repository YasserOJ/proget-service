var mongoose =require('mongoose');
var eet= mongoose.Schema({
    start_date:{
        type :Date,
        required:true
    },
    end_date:{
        type : Date
    },
    title:{
        type: String,
        required:true
    }
});
var candidatSchema = mongoose.Schema({
    first_name:{
        type: String,
        required:true
    },
    last_name:{
        type: String,
        required:true
    },
    birth_date:{
        type: String,
        required:true
    },
    birth_place:{
        type: String,
        required:true
    },
    nationality:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    status:{
        type: String,
        required:true
    },
    adress:{
        type: String,
        required:true
    },
    country:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    userName:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    picture:{
        type: Buffer,
        required:true
    },
    level:{
        type: String,
        required:true
    },
    field:{
        type: String,
        required:true
    },
    position:{
        type: String,
        required:true
    },
    experience_years:{
        type: String,
        required:true
    },
    education:{
        type:[eet],
        required:true
    },
    experince:{
        type: [eet],
        required:true
    },
    training:{
        type: [eet],
        required:true
    },
    skills:{
        type:[String],
        required:true
    },
    language:{
        type: [String],
        required:true
    },
    file:{
        type:[Buffer]
    }
});
var Candidat = module.exports = mongoose.model('Candidat', candidatSchema);
module.exports=Candidat;