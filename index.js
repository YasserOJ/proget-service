var express= require('express');
var app=express();
var connex = require('./routers/Connection');

var bodyparser=require('body-parser');
app.use(bodyparser.json());

var client=require('./routers/clientR');
app.use("/Client",client);

var candidat=require('./routers/candidatR');
app.use("/Candidat",candidat);

var admin=require('./routers/adminR');
app.use("/Admin",admin);

var option=require('./routers/optionR');
app.use("/Option",option);

var postule=require('./routers/postuleR');
app.use("/Postule",postule);

var record=require('./routers/recordR');
app.use("/Record",record);

var action=require('./routers/actionR');
app.use("/Action",action);

var panier=require('./routers/panierR');
app.use("/Panier",panier);

var notificationcan=require('./routers/notificationcanR');
app.use("/Notificationcan",notificationcan);

var notificationcl=require('./routers/notificationclR');
app.use("/Notificationcl",notificationcl);

app.listen(2222,function (err) {
    if(err){
        throw err;
    }
    console.log('server is running');
});
