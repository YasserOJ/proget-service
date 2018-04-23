var express = require('express');
var router= express.Router();
Panier = require('../Model/panier');
var bodyparser=require('body-parser');
router.use(bodyparser.json());



module.exports=router;