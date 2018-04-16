var express = require('express');
var router= express.Router();
Record = require('../Model/record');
var bodyparser=require('body-parser');
router.use(bodyparser.json());


router.post('/register',function (req,res) {
    var ibody= req.body;
    Record.create(ibody,function (err,ibody) {
        if(err){
            throw (err);
        }
        res.send(ibody);
    })
});
router.delete('/del/:_id',function (req,res) {
    var obj={_id:req.params};
    Record.findByIdAndRemove(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});
router.put('/up/:_id',function (req,res) {
    var ibody=req.body;
    Record.remove(ibody,function (err,ibody) {
        if(err){
            throw err;
        }
        res.send(ibody);
    })
});

module.exports=router;