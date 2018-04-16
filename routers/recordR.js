var express = require('express');
var router= express.Router();
Record = require('../Model/record');
var bodyparser=require('body-parser');
router.use(bodyparser.json());

router.get('/all',function (req,res) {
    Record.find({},function (err,result) {
        if(err){
            throw(err);
        }
        res.send(result);
    })
});
router.get('/byname/:name',function (req,res) {
    obj={client_name:req.params.name};
    Record.find(obj,function (err,result) {
        if(err){
            throw (err);
        }
        res.send(result);
    })
});
router.get('/byyear/:year',function (req,res) {
    obj={year:req.params.year}
    Record.find(obj,function (err,result) {
        if(err){
            throw (err);
        }
        res.send(result);
    })
});
router.get('/yearnname/:year/:name',function (req,res) {
    obj={
        year:req.params.year,
        client_name:req.params.name
    };
    Record.find(obj,function (err,result) {
        if(err){
            throw (err);
        }
        res.send(result);
    })
});
router.get('/byyandmandn/:year/:month/:name',function (req,res) {
    obj={
        year:req.params.year,
        month:req.params.month,
        client_name:req.params.name
    };
    Record.find(obj,function (err,result) {
        if(err){
            throw (err);
        }
        res.send(result);
    })
});
router.post('/register',function (req,res) {
    var ibody= req.body;
    Record.create(ibody,function (err,ibody) {
        if(err){
            throw (err);
        }
        res.send(ibody);
    })
});

module.exports=router;