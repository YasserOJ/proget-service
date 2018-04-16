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
router.post('/add',function (req,res) {
    var ibody= req.body;
    Option.create(ibody,function (err,ibody) {
        if(err){
            throw (err);
        }
        res.send(ibody);
    })
});
router.delete('/del/:_id',function (req,res) {
    var obj={_id:req.params};
    Option.findByIdAndRemove(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.put('/up/:_id',function (req,res) {
    var ibody=req.body;
    Option.remove(ibody,function (err,ibody) {
        if(err){
            throw err;
        }
        res.send(ibody);
    })
});

module.exports=router;