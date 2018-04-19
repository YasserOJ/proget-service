var express = require('express');
var router= express.Router();
Candidat = require('../Model/candidat');
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
router.get('/byid/:_id',function (req,res) {
    obj={
        _id:req.params._id
    };
    Candidat.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result[0]);
    })
});
router.get('/byfname/:name',function (req,res) {
    var obj={fname:req.params.name};
    Candidat.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/byfield/:field', function (req,res) {
    var obj ={field:req.params.field};
    Candidat.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/byfandp/:field/:position', function (req,res) {
    var obj ={
        field:req.params.field,
        postion:req.params.position
    };
    Candidat.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/bygender/:gender',function (req,res) {
    var obj={
      gender:req.params.gender
    };
    Candidat.find(obj,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/byfandpandy/:field/:position/:experience', function (req,res) {
    var obj ={
        field:req.params.field,
        postion:req.params.position,
        experience_years:req.params.experience
    };
    Candidat.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/bygender/:gender',function (req,res) {
    var obj={
        gender:req.params.gender
    };
    Candidat.find(obj,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/byfandg/:field/:gender',function (req,res) {
    var obj={
        field:req.params.field,
        gender:req.params.gender
    };
    Candidat.find(obj,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/byfandpandg/:field/:position/:gender',function (req,res) {
    var obj={
        field:req.params.field,
        position:req.params.position,
        gender:req.params.gender
    };
    Candidat.find(obj,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/byfandpandeandg/:field/:position/:experience/:gender',function (req,res) {
    var obj={
        field:req.params.field,
        position:req.params.position,
        experience_years:req.params.experience,
        gender:req.params.gender
    };
    Candidat.find(obj,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.post('/register',function (req,res) {
    var ibody= req.body;
    Candidat.create(ibody,function (err,ibody) {
        if(err){
            if(err.code===11000){
                res.status(422).send("username or email already exists");
            }else
                throw (err);
        }
        res.send(ibody);
    })
});
router.delete('/del/:_id',function (req,res) {
    Candidat.findByIdAndRemove(req.params._id,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.put('/update/:_id',function (req,res) {
    var ibody=req.body;
    Candidat.findByIdAndUpdate(req.params._id,ibody,function (err,ibody) {
        if(err){
            if(err.code===11000){
                res.status(422).send("username or email already exists");
            }else
                throw (err);
        }
        res.send(ibody);
    })
});
module.exports=router;