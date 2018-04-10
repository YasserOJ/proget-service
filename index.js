var express= require('express');
var app=express();
var bodyparser=require('body-parser');
/*var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/proget_db',function (err) {

     if(err) throw  err;

      console.log("okkkk")
});*/
Test = require('./Model/test');
app.use(bodyparser.json());
var client=require('./routers/clientR')
app.use("/Client",client);
var candidat=require('./routers/candidatR')
app.use("/Candidat",candidat);
var connex = require('./routers/Connection')
app.get('/',function (req,res) {
    res.send("hello world")
})
app.get('/test',function (req,res) {
    Test.find({},function (err, result) {
        if(err){
            throw (err)
        }
        res.send(result);
    })
})
app.get('/testid/:_id',function (req,res) {
    Test.findById( req.params._id, function (err,result) {
        if(err){
            throw(err);
        }
        res.send(result);
    })
})
app.post('/addtest',function (req, res) {
    var ss= req.body;
    Test.create(ss, function (err,ss) {
        if(err){
            throw err;
        }
        res.send(ss);
    })

});
app.put('/testup/:_id', function (req,res) {
    var result= req.body;
    Test.findByIdAndUpdate(req.params._id, result, function (err,result) {
        if(err){
            throw err;
        }
        res.send(result);
    });
});
app.delete('/testdel/:_id', function (req,res) {
    var id ={_id:req.params._id};
    Test.remove(id, function (err,result) {
        if (err){
            throw err;
        }
        res.send(result);
    })
});

app.listen(2222);
console.log('server is running');