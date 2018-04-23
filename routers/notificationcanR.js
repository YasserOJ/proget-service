var express = require('express');
var router= express.Router();
Notificationcan = require('../Model/notificationcan');
var bodyparser=require('body-parser');
router.use(bodyparser.json());



module.exports=router;