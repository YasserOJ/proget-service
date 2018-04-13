var express = require('express');
var router= express.Router();
Option = require('../Model/option');
var bodyparser=require('body-parser');
router.use(bodyparser.json());

router.get('/all',function (req,res) {
    Option.find({},{field:""},function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});

module.exports=router;