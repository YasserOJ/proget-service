var express= require('express');
var app=express();
var bodyparser=require('body-parser');
app.use(bodyparser.json());
var client=require('./routers/clientR');
app.use("/Client",client);
var candidat=require('./routers/candidatR');
app.use("/Candidat",candidat);
var connex = require('./routers/Connection');
app.listen(2222,function (err) {
    if(err){
        throw err;
    }
    console.log('server is running');
});
