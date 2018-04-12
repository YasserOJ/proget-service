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
router.get('/login/:emailoruser/:password/',function (req, res) {
    var obj1= {
        email: req.params.emailoruser,
        password : req.params.password
    };
    var obj2= {
        userName: req.params.emailoruser,
        password : req.params.password
    };
    var obj3={
        $or:[obj1, obj2]
    };
    Candidat.find(obj3,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/byfname/:first_name',function (req,res) {
    var obj={first_name:req.params.first_name};
    Client.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
module.exports=router;