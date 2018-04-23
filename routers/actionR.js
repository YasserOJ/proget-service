var express = require('express');
var router= express.Router();
Action = require('../Model/action');
var bodyparser=require('body-parser');
router.use(bodyparser.json());

router.get('/bypost_id/:post_id',function (req,res) {
    obj={
        post_id:req.params.post_id
    };
    Action.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result[0]);
    })
});
router.post('/add',function (req,res) {
    var ibody= req.body;
    Action.create(ibody,function (err,ibody) {
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

    Action.findByIdAndRemove(req.params._id,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    })
});


module.exports=router;