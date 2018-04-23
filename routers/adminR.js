var express = require('express');
var router= express.Router();
Admin = require('../Model/admin');
var bodyparser=require('body-parser');
router.use(bodyparser.json());

router.get('/all',function (req,res) {
    Admin.find({},function (err,result) {
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
        username: req.params.emailoruser,
        password : req.params.password
    };
    var obj3={
        $or:[obj1, obj2]
    };
    Admin.find(obj3,function (err,result) {
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
    Admin.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result[0]);
    })
});
router.get('/byforlname/:flname',function (req,res) {
    var obj1= {
        first_name:req.params.flname
    };
    var obj2= {
        last_name:req.params.flname
    };
    var obj3={
        $or:[obj1, obj2]
    };
    Admin.find(obj3,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/byrole/:role', function (req,res) {
    var obj ={role:req.params.role};
    Admin.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.post('/register',function (req,res) {
    var ibody= req.body;
    Admin.create(ibody,function (err,ibody) {
        if(err){
            if(err.code===11000){
                console.log("username or email already exists");
            }else
            throw (err);
        }
        res.send(ibody);
    })
});
router.delete('/del/:_id',function (req,res) {

    Admin.findByIdAndRemove(req.params._id,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.put('/update/:_id',function (req,res) {
    var ibody=req.body;
    Admin.findByIdAndUpdate(req.params._id,ibody,function (err,ibody) {
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