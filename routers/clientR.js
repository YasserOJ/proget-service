var express = require('express');
var router= express.Router();
Client = require('../Model/client');
var bodyparser=require('body-parser');
router.use(bodyparser.json());
router.get('/all',function (req,res) {
  Client.find({},function (err,result) {
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
    Client.find(obj3,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/byname/:name',function (req,res) {
    var obj={name:req.params.name};
    Client.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/byfield/:field',function(req,res){
    var obj={field:req.params.field};
    Client.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/bynandf/:name/:field',function(req,res){
    obj={
        name:req.params.name,
        field:req.params.field
    };
    Client.find(obj,function(err,result){
        if(err){
            throw err;
        }
        res.send(result)
    })
});
router.get('/byid/:_id',function (req,res) {
    obj={
        _id:req.params._id
    };
    Client.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result[0]);
    })
});
router.post('/register',function (req,res) {
   var ibody= req.body;
   Client.create(ibody,function (err,ibody) {
       if(err){
           throw (err);
       }
       res.send(ibody);
   })
});
router.delete('/del/:_id',function (req,res) {

    Client.findByIdAndRemove(req.params._id,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.put('/update/:_id',function (req,res) {
    var ibody=req.body;
    Client.findByIdAndUpdate(req.params._id,ibody,function (err,ibody) {
        /*if(err.code===11000){
            console.log("exists")
        }*/if(err){
            throw err;
        }
        res.send(ibody);
    })
});
module.exports=router;