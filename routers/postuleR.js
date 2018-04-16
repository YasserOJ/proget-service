var express = require('express');
var router= express.Router();
Client = require('../Model/client');
var bodyparser=require('body-parser');
router.use(bodyparser.json());



module.exports=router;