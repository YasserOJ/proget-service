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
var CandidatSchema = mongoose.Schema({

})