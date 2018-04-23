var express = require('express');
var router= express.Router();
Notificationcan = require('../Model/notificationcan');
var bodyparser=require('body-parser');
router.use(bodyparser.json());

router.get('/bycanid/:candidat_id',function (req,res) {
    obj={
        candidat_id:req.params.candidat_id
    };
    Notificationcan.find(obj,function (err,result) {
        if(err){
            throw err;
        }
        res.send(result[0]);
    })
});
router.post('/add',function (req,res) {
    var ibody= req.body;
    Notificationcan.create(ibody,function (err,ibody) {
        if(err){
            throw (err);
        }
        res.send(ibody);
    })
});

module.exports=router;