var express = require('express');
var router= express.Router();
Candidat = require('../Model/candidat');
connex = require('./Connection');
var bodyparser=require('body-parser');
router.use(bodyparser.json());
router.get('/all',function (req,res) {
    Candidat.find({},function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
module.exports=router;