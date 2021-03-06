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
    fname:{
        type: String,
        required:true
    },
    lname:{
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
        required:true,
        lowercase:true,
        unique:true
    },
    userName:{
        type: String,
        required:true,
        lowercase:true,
        unique:true
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
        type: [eet]
    },
    training:{
        type: [eet],
        required:true
    },
    skills:{
        type:[String]
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
