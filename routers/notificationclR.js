var express = require('express');
var router= express.Router();
Notificationcl = require('../Model/notificationcl');
var bodyparser=require('body-parser');
router.use(bodyparser.json());



module.exports=router;