var express = require('express');
var router= express.Router();
Action = require('../Model/action');
var bodyparser=require('body-parser');
router.use(bodyparser.json());



module.exports=router;