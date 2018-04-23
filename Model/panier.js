var mongoose =require('mongoose');
var panierSchema = mongoose.Schema({
    client_id:{
        type: String,
        required:true
    },
    candidat_id:{
        type: String,
        required:true
    },
    candidat_fname:{
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
    }
});
var Panier = module.exports = mongoose.model('Panier', panierSchema);