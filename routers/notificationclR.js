var express = require('express');
var router= express.Router();
Notificationcl = require('../Model/notificationcl');
var bodyparser=require('body-parser');
router.use(bodyparser.json());

router.get('/byclid/:client_id',function (req,res) {
    obj={
        client_id:req.params.client_id
    };
    Notificationcl.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result[0]);
    })
});
router.post('/add',function (req,res) {
    var ibody= req.body;
    Notificationcl.create(ibody,function (err,ibody) {
        if(err){
            if(err.code===11000){
                console.log("username or email already exists");
            }else
                throw (err);
        }
        res.send(ibody);
    })
});

module.exports=router;