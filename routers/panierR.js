var express = require('express');
var router= express.Router();
Panier = require('../Model/panier');
var bodyparser=require('body-parser');
router.use(bodyparser.json());

router.get('/byclid/:clid',function (req,res) {
    obj={
        client_id:req.params.clid
    };
    Panier.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result[0]);
    })
});
router.post('/add',function (req,res) {
    var ibody= req.body;
    Panier.create(ibody,function (err,ibody) {
        if(err){
            throw (err);
        }
        res.send(ibody);
    })
});
router.delete('/del/:client_id/:candidat_id',function (req,res) {
    var obj={
        client_id:req.params.client_id,
        candidat_id:req.params.candidat_idid
    };
    Panier.remove(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});

module.exports=router;