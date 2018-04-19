var express = require('express');
var router= express.Router();
Option = require('../Model/option');
var bodyparser=require('body-parser');
router.use(bodyparser.json());

router.get('/all',function (req,res) {
    Option.find({},{field:1,_id:0},function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/disfld',function (req,res) {
    Option.distinct("field",function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.get('/byfield/:field',function (req,res) {
    obj={field:req.params.field}
    Option.find(obj,{position:1,_id:0},function (err,result) {
        if(err){
            throw(err);
        }
        res.send(result);
    })
});
router.post('/addfld',function (req,res) {
    var ibody= req.body;
    Option.create(ibody,function (err,ibody) {
        if(err){
            throw (err);
        }
        res.send(ibody);
    })
});
router.delete('/del/:_id',function (req,res) {

    Option.findByIdAndRemove(req.params._id,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.put('/update/:_id',function (req,res) {
    var ibody=req.body;
    Option.findByIdAndUpdate(req.params._id,ibody,function (err,ibody) {
        /*if(err.code===11000){
            console.log("exists")
        }*/if(err){
            throw err;
        }
        res.send(ibody);
    })
});

module.exports=router;