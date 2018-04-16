var express = require('express');
var router= express.Router();
Postule = require('../Model/postule');
var bodyparser=require('body-parser');
router.use(bodyparser.json());

router.get('/all',function (req,res) {
    Postule.find({},function (err,result) {
        if(err){
            throw(err);
        }
        res.send(result);
    })
});
router.get('/byyear/:year',function (req,res) {
    obj={year:req.params.year};
    Postule.find(obj,function (err,result) {
        if(err){
            throw (err);
        }
        res.send(result);
    })
});
router.get('/byandm/:year/:month',function (req,res) {
    obj={
        year:req.params.year,
        month:req.params.month
    };
    Postule.find(obj,function (err,result) {
        if(err){
            throw (err);
        }
        res.send(result);
    })
});
router.get('/byyear/:year/:month/:day',function (req,res) {
    obj={
        year:req.params.year,
        month:req.params.month,
        day:req.params.day
    };
    Postule.find(obj,function (err,result) {
        if(err){
            throw (err);
        }
        res.send(result);
    })
});
router.post('/register',function (req,res) {
    var ibody= req.body;
    Postule.create(ibody,function (err,ibody) {
        if(err){
            throw (err);
        }
        res.send(ibody);
    })
});
router.delete('/del/:_id',function (req,res) {
    var obj={_id:req.params};
    Postule.findByIdAndRemove(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.put('/up/:_id',function (req,res) {
    var ibody=req.body;
    Postule.remove(ibody,function (err,ibody) {
        if(err){
            throw err;
        }
        res.send(ibody);
    })
});

module.exports=router;