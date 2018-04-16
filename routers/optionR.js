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

module.exports=router;