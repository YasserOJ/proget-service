var express = require('express');
var router= express.Router();
Candidat = require('../Model/candidat');
connex = require('./Connection');
var bodyparser=require('body-parser');
router.use(bodyparser.json());

module.exports=router;